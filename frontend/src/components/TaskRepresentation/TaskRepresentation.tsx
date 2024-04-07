import {Task} from "../../pages/TasksPage/types/tasks";
import TaskWrapperStyled from "./TaskWrapper/TaskWrapper.styled.tsx";
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import IconWrapperStyled from "../IconWrapper/IconWrapper.styled.tsx";
import {useTheme} from "styled-components";
import {
    ArrowDropDownOutlined, ArrowDropUpOutlined,
    SentimentDissatisfiedOutlined,
    SentimentSatisfiedOutlined,
    TaskAltOutlined
} from "@mui/icons-material";
import TaskActiveSectionStyled from "./TaskActiveSection/TaskActiveSection.styled.tsx";
import CompleteIconButtonStyled from "./CompleteIconButton/CompleteIconButton.styled.tsx";
import PayStyled from "./Pay/Pay.styled.tsx";
import TaskDescriptionStyled from "./TaskDescription/TaskDescription.styled.tsx";

type TaskProps = Task & {expandTask: (taskId : number) => void, selectedTask: number | null};

function TaskRepresentation({id, mainTaskPart, fillTaskPart, taskType, duration, pay, completed, expandTask, selectedTask}: TaskProps) {
    const theme = useTheme();
    let backgroundColor: string;
    let svgIcon: React.JSX.Element;
    switch (taskType) {
        case 'HARD':
            backgroundColor = theme.colors.tasks.hard;
            svgIcon = <SentimentDissatisfiedOutlined/>
            break;
        case 'MEDIUM':
            backgroundColor = theme.colors.tasks.medium;
            svgIcon = <SentimentSatisfiedOutlined/>
            break;
        case 'EASY':
            backgroundColor = theme.colors.tasks.easy;
            svgIcon = <SentimentVerySatisfiedOutlinedIcon/>
            break;
        default:
            backgroundColor = theme.colors.tasks.easy;
            svgIcon = <SentimentVerySatisfiedOutlinedIcon/>
    }

    if (completed === true) {
        backgroundColor = theme.colors.tasks.completed;
    }

    const taskParts = mainTaskPart.replace("%d", duration.toString()).split("%s");

    return (
        <TaskWrapperStyled onClick={() => expandTask(id)} bgColor={backgroundColor}>
            <IconWrapperStyled>
                {svgIcon}
            </IconWrapperStyled>

            <TaskActiveSectionStyled>
                <TaskDescriptionStyled>
                    <h3>{fillTaskPart.toUpperCase()}</h3>
                    <p>{taskParts[0]}<b>{fillTaskPart.toLowerCase()}</b>{taskParts[1]}</p>

                </TaskDescriptionStyled>


                    <IconWrapperStyled>
                        {selectedTask === id ? <ArrowDropUpOutlined/> : <ArrowDropDownOutlined/>}
                    </IconWrapperStyled>
                    <PayStyled>pay: {pay}</PayStyled>
                    {completed ? "" : <CompleteIconButtonStyled><TaskAltOutlined></TaskAltOutlined></CompleteIconButtonStyled>}
            </TaskActiveSectionStyled>
        </TaskWrapperStyled>
    );
}

export default TaskRepresentation;