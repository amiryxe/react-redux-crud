import { useSelector } from "react-redux";

function TaskList() {
    const list = useSelector(state => state.tasks.taskList);

    return (
        list.length > 0 ?
            list.map(task => (
                <ul key={task.id}>
                    <li>ID: {task.id}</li>
                    <li>Title: {task.title}</li>
                    <li>Date: {task.date}</li>
                    <li>Description: {task.description}</li>
                </ul>
            ))
            : 'not found'
    )
}

export default TaskList;