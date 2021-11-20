import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

function TaskList() {
    const list = useSelector(state => state.tasks.taskList);

    return (
        <div className="tasks">
            {
                list.length > 0 ?
                    list.map(task => (
                        <TaskItem key={task.id} className="tasks__item" data={task} />
                    ))
                    : 'not found'
            }
        </div>
    )
}

export default TaskList;