import { connect, useDispatch, useSelector } from "react-redux";
import { addTask } from "../actions/taskActions";

function AddTask() {
    const dispatch = useDispatch();
    const lastID = useSelector(state => state.tasks.taskList[state.tasks.taskList.length - 1].id);

    const handleSubmitTask = (e) => {
        e.preventDefault();

        const data = {
            id: lastID + 1,
            title: e.target.title.value,
            date: e.target.date.value,
            description: e.target.description.value,
        }

        dispatch(addTask(data));

        e.target.reset();
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