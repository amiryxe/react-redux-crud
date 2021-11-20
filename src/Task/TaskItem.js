export default function TaskItem(props) {
    const { title, date, description } = props.data;

    return (
        <div className="tasks__item">
            <h1>{title}</h1>
            <h3>{date}</h3>
            <p>{description}</p>
        </div>
    )
}