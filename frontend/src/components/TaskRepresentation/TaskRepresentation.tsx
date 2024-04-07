import {Task} from "../../pages/TasksPage/types/tasks";

type TaskProps = Task;

function TaskRepresentation({id, mainTaskPart, fillTaskPart, taskType, duration, pay, completed}: TaskProps) {
    return (
        <div>Task</div>
    );
}

export default TaskRepresentation;