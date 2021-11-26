import AddTask from "../components/Task/AddTask";
import TaskList from "../components/Task/TaskList";
import Header from "../components/Header";
import Filter from "../components/Filter";

export default function Tasks() {
    return (
        <>
            <Header />
            <Filter />
            <AddTask />
            <TaskList />
        </>
    );
}