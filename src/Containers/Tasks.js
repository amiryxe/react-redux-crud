import AddTask from "../components/Task/AddTask";
import TaskList from "../components/Task/TaskList";
import Header from "../components/Header";

export default function Tasks() {
    return (
        <>
            <Header />
            <AddTask />
            <TaskList />
        </>
    );
}