export default function Filter() {
    return (
        <div class="tasks__fitler">
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