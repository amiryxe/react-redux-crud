import { useState } from 'react';
import { connect, useDispatch } from "react-redux";
import { deleteTask, editTask } from "../actions/taskActions";

function TaskItem(props) {
    const { id, title, date, description } = props.data;
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();

        const newData = {
            id: id,
            title: e.target.title.value,
            date: e.target.date.value,
            description: e.target.description.value
        }

        dispatch(editTask(newData))
        setIsEditing(false);
    }

    return <div className="tasks__item">
        {
            isEditing ?
                <form onSubmit={handleEditSubmit}>
                    <input type="text" defaultValue={title} name="title" />
                    <input type="date" defaultValue={date} name="date" />
                    <textarea defaultValue={description} name="description" />

                    <br />
                    <br />

                    <button className="btn--success">Apply</button>
                    <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
                :
                <>
                    <h2>{title}</h2>
                    <h3>{date}</h3>
                    <p>{description}</p>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </>
        }
    </div>
}

export default connect(null, { deleteTask })(TaskItem);