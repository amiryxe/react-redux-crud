import { useEffect } from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

function TaskList() {
    const list = useSelector(state => state.tasks.taskList) || [];
    const currentShowMode = useSelector(state => state.tasks.showMode);

    // TODO: handle filter tasks by show mode
    return (
        <div className="tasks">
            {
                list.length > 0 ?
                    list.map(task => {
                        if (currentShowMode === 'done') {
                            if (task.isDone) {
                                return <TaskItem key={task.id} className="tasks__item" data={task} />
                            }
                        } else {
                            return <TaskItem key={task.id} className="tasks__item" data={task} />
                        }
                        return <TaskItem key={task.id} className="tasks__item" data={task} />
                    })
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