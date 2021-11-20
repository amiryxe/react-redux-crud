import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

function TaskList() {
    const list = useSelector(state => state.tasks.taskList) || [];

    return (
        <div className="tasks">
            {
                list.length > 0 ?
                    list.map(task => (
                        <TaskItem key={task.id} className="tasks__item" data={task} />
                    ))
                    : <p style={{
                        padding: '3rem',
                        textAlign: 'center',
                        width: '100%'
                    }}>No tasks yet</p>
            }
        </div>
    )
}

export default TaskList;