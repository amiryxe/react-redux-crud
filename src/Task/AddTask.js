import { connect, useDispatch, useSelector } from "react-redux";
import { addTask } from "../actions/taskActions";

function AddTask() {
    const dispatch = useDispatch();
    const lastID =
        useSelector(state => {
            if (state.tasks.taskList.length > 0) {
                return state.tasks.taskList[state.tasks.taskList.length - 1].id
            }
            return 0
        });

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
            <h3>Add new task</h3>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" />

            <label htmlFor="date">Date:</label>
            <input type="date" name="date" id="date" />

            <label htmlFor="description">Description:</label>
            <textarea name="description" id="description" cols="30" rows="3"></textarea>

            <button>Save</button>
        </form>
    )
}

export default connect(null, { addTask })(AddTask)