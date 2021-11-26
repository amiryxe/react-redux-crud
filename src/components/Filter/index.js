export default function Filter() {
    return (
        <>
            <span>
                <input type="checkbox" name="" id="all" />
                <label htmlFor="all">All tasks</label>
            </span>

            <span>
                <input type="checkbox" name="" id="done" />
                <label htmlFor="done">Done</label>
            </span>

            <span>
                <input type="checkbox" name="" id="all" />
                <label htmlFor="all">Undone</label>
            </span>
        </>
    )
}