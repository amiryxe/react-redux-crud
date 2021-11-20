import { connect, useDispatch } from "react-redux";
import { deleteTask } from "../actions/taskActions";

function TaskItem(props) {
    const { id, title, date, description } = props.data;
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }

    return (
        <div className="tasks__item">
            <h2>{title}</h2>
            <h3>{date}</h3>
            <p>{description}</p>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
    )
}

export default connect(null, { deleteTask })(TaskItem);