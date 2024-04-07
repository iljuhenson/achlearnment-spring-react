import {Task} from "../../pages/TasksPage/types/tasks";
import TaskWrapperStyled from "./TaskWrapper/TaskWrapper.styled.tsx";
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import IconWrapperStyled from "../IconWrapper/IconWrapper.styled.tsx";
import {useTheme} from "styled-components";
import {
    ArrowDropDownOutlined,
    SentimentDissatisfiedOutlined,
    SentimentSatisfiedOutlined,
    TaskAltOutlined
} from "@mui/icons-material";
import TaskActiveSectionStyled from "./TaskActiveSection/TaskActiveSection.styled.tsx";
import TaskColumnWrapperStyled from "./TaskColumnWrapper/TaskColumnWrapper.styled.tsx";
import TaskButtonsColumnWrapperStyled from "./TaskButtonsColumnWrapper/TaskButtonsColumnWrapper.styled.tsx";
import CompleteIconButtonStyledJsx from "./CompleteIconButton/CompleteIconButton.styled.jsx.tsx";

type TaskProps = Task;

function TaskRepresentation({id, mainTaskPart, fillTaskPart, taskType, duration, pay, completed}: TaskProps) {
    const theme = useTheme();
    let backgroundColor: string;
    let svgIcon: React.JSX.Element;
    switch (taskType) {
        case 'HARD':
            backgroundColor = theme.colors.tasks.hard;
            svgIcon = <SentimentDissatisfiedOutlined />
            break;
        case 'MEDIUM':
            backgroundColor = theme.colors.tasks.medium;
            svgIcon = <SentimentSatisfiedOutlined />
            break;
        case 'EASY':
            backgroundColor = theme.colors.tasks.easy;
            svgIcon = <SentimentVerySatisfiedOutlinedIcon />
            break;
        default:
            backgroundColor = theme.colors.tasks.easy;
            svgIcon = <SentimentVerySatisfiedOutlinedIcon />
    }

    if (completed === true) {
        backgroundColor = theme.colors.tasks.completed;
    }


    return (
        <TaskWrapperStyled bgColor={backgroundColor}>
            <IconWrapperStyled>
                {svgIcon}
            </IconWrapperStyled>

            <TaskActiveSectionStyled>
                <TaskColumnWrapperStyled>
                    <h3>{fillTaskPart.toUpperCase()}</h3>
                    <p>{mainTaskPart.replace("%d", duration.toString()).replace("%s", fillTaskPart.toLowerCase())}</p>
                    <p>pay: {pay}</p>
                </TaskColumnWrapperStyled>
                <TaskButtonsColumnWrapperStyled>
                    <IconWrapperStyled>
                        <ArrowDropDownOutlined />
                    </IconWrapperStyled>
                    <CompleteIconButtonStyledJsx>
                        <TaskAltOutlined></TaskAltOutlined>
                    </CompleteIconButtonStyledJsx>
                </TaskButtonsColumnWrapperStyled>
            </TaskActiveSectionStyled>
        </TaskWrapperStyled>
    );
}

export default TaskRepresentation;