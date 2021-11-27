import { useDispatch, useSelector } from "react-redux";
import { showMode } from "../../actions/taskActions";

export default function Filter() {
    const dispatch = useDispatch();
    const currentShowMode = useSelector(state => state.tasks.showMode);

    return (
        <div className="tasks__filter">
            <span>
                <input type="radio" name="tasks_show" id="all"
                    onChange={() => dispatch(showMode('all'))}
                    defaultChecked={currentShowMode === 'all'} />
                <label htmlFor="all">All tasks</label>
            </span>

            <span>
                <input type="radio" name="tasks_show" id="done"
                    onChange={() => dispatch(showMode('done'))}
                    defaultChecked={currentShowMode === 'done'} />
                <label htmlFor="done">Done</label>
            </span>

            <span>
                <input type="radio" name="tasks_show" id="undone"
                    onChange={() => dispatch(showMode('undone'))}
                    defaultChecked={currentShowMode === 'undone'} />
                <label htmlFor="undone">Undone</label>
            </span>
        </div>
    )
}