import {useContext, useEffect, useRef, useState} from 'react';
import {ReviewSpeechResult, Task} from "../../pages/TasksPage/types/tasks";
import * as NewStyle from "../NewStyle/NewStyle.tsx"
import {TokenContext} from "../../context/context.ts";

interface RecordingTaskModalContentProps {
    task: Task,
    isModalOpen: boolean
}

function RecordingTaskModalContent({task, isModalOpen}: RecordingTaskModalContentProps) {
    const {token} = useContext(TokenContext);
    const taskText = task.mainTaskPart.toString().replace("%s", task.fillTaskPart.toString()).replace("%d", task.duration.toString());
    const [recordingIndicatorText, setRecordingIndicatorText] = useState("Recording.");
    const [seconds, setSeconds] = useState(0);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null)
    const audioChunksRef = useRef<Array<Blob>>([]);
    const [speechResult, setSpeechResult] = useState<null | ReviewSpeechResult>(null);
    const timeoutRef = useRef<null | number>(null);
    const isUnmountedRef = useRef(false);

    const nextRecordingIndicatorState = () => {
        setRecordingIndicatorText(prev => {
            switch (prev) {
                case "Recording.":
                    return "Recording..";
                    break;
                case "Recording..":
                    return "Recording...";
                    break;
                default:
                    return "Recording.";
            }

        })
    }

    useEffect(() => {
        if (isModalOpen) {

        isUnmountedRef.current = false;
        navigator
            .mediaDevices
            .getUserMedia({audio: true}).then(stream => {
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;

            mediaRecorder.ondataavailable = e => {
                audioChunksRef.current.push(e.data)
            }

            mediaRecorder.onstop = () => {
                if (isUnmountedRef.current) return;
                let recording = new Blob(audioChunksRef.current, { type: "audio/webm" })
                // recordingNow = Object.assign({}, recording);
                // setRecording(recording);
                audioChunksRef.current = [];

                console.log(window.URL.createObjectURL(recording));
                if (recording !== null) {
                    let fd = new FormData();
                    fd.append("file", recording, "task_recording.webm");
                    fetch(`/api/user/tasks/${task.id}/review`, {
                        method: "PUT",
                        headers: {
                            "Authorization": token ? token : "",
                            // "Content-Type": "application/json",
                        },
                        body: fd,
                    }).then(response => {
                        if(response.ok) {
                            return response.json();
                        } else {
                            console.error(response);
                            throw Error("Something went wrong!");
                        }
                    }).then(data => {
                        setSpeechResult(
                            {
                                isMarkedAsCompleted: data.isMarkedAsCompleted,
                                isOnTopic: data.isOnTopic,
                                advice: data.advice,
                                mistakesOverview: data.mistakesOverview,
                            }
                        );
                    }).catch(reason => console.error(reason));
                }
            }
            mediaRecorder.start();
            timeoutRef.current = setTimeout(() => mediaRecorder.stop(), task.duration * 60000)
        });

        }

        return () => {
            isUnmountedRef.current = true;
            if (mediaRecorderRef.current) {
                mediaRecorderRef.current.onstop = () => null;
                mediaRecorderRef.current.stop();
            }
            timeoutRef.current && clearTimeout(timeoutRef.current);
        }

    }, [task.id]);

    useEffect(() => {
        const recordingTextUpdateInterval = setInterval(nextRecordingIndicatorState, 500);
        return () => {
            clearInterval(recordingTextUpdateInterval);
        }
    }, [])

    useEffect(() => {
        const timer = setInterval(() => setSeconds(prev => prev + 1), 1000);
        return () => {
            clearInterval(timer)
        }
    }, [])


    return (
        <NewStyle.Spacer x="1rem" y="1rem">
            {speechResult ?
                <>
                    <NewStyle.Row>
                        <p><b>Overview: </b>{speechResult.mistakesOverview}</p>
                    </NewStyle.Row>
                    <NewStyle.Row>
                        <p><b>Advice: </b>{speechResult.advice}</p>
                    </NewStyle.Row>
                </>
                : <>
            <NewStyle.Row>
                <p>{taskText}</p>
            </NewStyle.Row>
            <NewStyle.Row>
                <NewStyle.Spacer x="0" y="2rem"><div style={{color: "red", fontSize: "1.5rem"}}>{recordingIndicatorText}</div></NewStyle.Spacer>
            </NewStyle.Row>
            <NewStyle.Row>
                <NewStyle.Column cols={1}>
                    {`${Math.floor(seconds / 60)}:${Math.floor(seconds % 60 / 10)}${Math.floor(seconds % 10)}`}
                </NewStyle.Column>
                <NewStyle.Column cols={10}>
                    <NewStyle.AbsoluteCenter>
                       Out Of
                    </NewStyle.AbsoluteCenter>
                </NewStyle.Column>
                <NewStyle.Column cols={1}>
                    {`${task.duration}:00`}
                </NewStyle.Column>
            </NewStyle.Row></>}
        </NewStyle.Spacer>
    );
}

export default RecordingTaskModalContent;
