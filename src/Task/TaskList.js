import { useSelector } from "react-redux";

function TaskList() {
    const list = useSelector(state => state.tasks.taskList);

    console.log(list)

    return (
        list.length > 0 ?
            list.map(task => (
                <ul key={task.id}>
                    <li>{task.title}</li>
                    <li>{task.date}</li>
                    <li>{task.description}</li>
                </ul>
            ))
            : 'not found'
    )
}

export default TaskList;