import { connect, useDispatch, useSelector } from "react-redux";
import { addTask, showAddTask } from "../../actions/taskActions";

function AddTask() {
    const dispatch = useDispatch();
    const lastID =
        useSelector(state => {
            if (state.tasks.taskList.length > 0) {
                return state.tasks.taskList[state.tasks.taskList.length - 1].id
            }
            return 0
        });

    const isShow = useSelector(state => state.tasks.isShowAddTask);
    const errText = useSelector(state => state.tasks.errText);

    const handleSubmitTask = (e) => {
        e.preventDefault();

        const data = {
            id: lastID + 1,
            title: e.target.title.value,
            date: e.target.date.value,
            description: e.target.description.value,
            isDone: false
        }

        if (data.title) {
            dispatch(addTask(data));
            dispatch(showAddTask(false));

            e.target.reset();
        }
    }

    return isShow ? (
        <form className="tasks__add" onSubmit={handleSubmitTask}>
            <h3>Add new task</h3>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" />

            <label htmlFor="date">Date:</label>
            <input type="datetime-local" name="date" id="date" />

            <label htmlFor="description">Description:</label>
            <textarea name="description" id="description" cols="30" rows="3"></textarea>

            <p className="tasks__error">{errText}</p>

            <div>
                <button className="btn--success" style={{ marginRight: '.5rem' }}>Save</button>
                <button type="button" onClick={() => dispatch(showAddTask(false))}>Cancel</button>
            </div>
        </form>
    ) : ''
}

export default connect(null, { addTask })(AddTask)