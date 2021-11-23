import { useDispatch } from "react-redux";
import { showAddTask } from "../../actions/taskActions";

export default function Header() {
    const dispatch = useDispatch();

    return (
        <header className="header">
            <h1>React redux CRUD</h1>

            <button
                onClick={() => dispatch(showAddTask(true))}
                className="btn--success">+ Add Task</button>
        </header>
    )
}