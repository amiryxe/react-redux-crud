import { connect, useDispatch } from "react-redux";
import { addTask } from "../actions/taskActions";

function AddTask() {
    const dispatch = useDispatch();

    const handleSubmitTask = (e) => {
        e.preventDefault();

        const data = {
            title: e.target.title.value,
            date: e.target.date.value,
            description: e.target.description.value,
        }

        dispatch(addTask(data));
    }

    return (
        <form className="tasks__add" onSubmit={handleSubmitTask}>
            <input type="text" name="title" />
            <input type="date" name="date" />
            <textarea name="description" cols="30" rows="3"></textarea>

            <button>Save</button>
        </form>
    )
}

export default connect(null, { addTask })(AddTask)