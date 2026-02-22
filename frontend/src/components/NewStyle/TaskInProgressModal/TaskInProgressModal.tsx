import {PropsWithChildren} from "react";
import {useTheme} from "styled-components";
import * as NewStyle from "../NewStyle.tsx";

type TaskInProgressModalProprs = {
    task: string;
    close: () => void;
};

function TaskInProgressModal({children} : TaskInProgressModalProprs) {
    let chunks = []

    navigator.mediaDevices && navigator.mediaDevices.getUserMedia({ audio: true
    })
        .then((stream) => {
            let recorder = new MediaRecorder(stream);

            recorder.ondataavailable = e => {
                chunks.push(e.data);
            }

            recorder.onstop = e => {
                const blob = new Blob(chunks, {type: "audio/mp3"})
                let fd = new FormData()
            }
        })

    return (
        <NewStyle.ModalWindow>
            <NewStyle.Row>This is your task actually</NewStyle.Row>
            <NewStyle.Row>Start recording!</NewStyle.Row>
            <NewStyle.Row></NewStyle.Row>
        </NewStyle.ModalWindow>
    );
}

export default TaskInProgressModal;
