import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

function TaskList() {
    const list = useSelector(state => state.tasks.taskList) || []
    const currentShowMode = useSelector(state => state.tasks.showMode);

    const renderList = (list) => {
        if (currentShowMode === "done") {
            return list.filter(item => item.isDone);
        } else if(currentShowMode === "undone") {
            return list.filter(item => !item.isDone);
        }
        return list;
    }

    return (
        <div className="tasks">
            {
                renderList(list).length > 0 ? 
                renderList(list).map(item => <TaskItem key={item.id} className="tasks__item" data={item} />)
                : <p style={{
                    padding: '3rem',
                    textAlign: 'center',
                    width: '100%'
                }}>No tasks yet</p>
            }
        </div>
    )
}

export default TaskList;