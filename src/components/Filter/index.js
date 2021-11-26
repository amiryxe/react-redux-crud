import { useDispatch, useSelector } from "react-redux"

export default function Filter() {
    const dispatch = useDispatch();
    const currentShowMode = useSelector(state => state.tasks.showMode);

    console.log(currentShowMode)

    return (
        <div className="tasks__filter">
            <span>
                <input type="radio" name="tasks_show" id="all" />
                <label htmlFor="all">All tasks</label>
            </span>

            <span>
                <input type="radio" name="tasks_show" id="done" />
                <label htmlFor="done">Done</label>
            </span>

            <span>
                <input type="radio" name="tasks_show" id="undone" />
                <label htmlFor="undone">Undone</label>
            </span>
        </div>
    )
}