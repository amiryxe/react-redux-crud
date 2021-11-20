import { ADD_TASK } from "./types";

export const addTask = () => dispatch => {
    dispatch({
        type: ADD_TASK,
        payload: {
            id: 1,
            title: "Learn React",
            description: "Learn React",
            status: "todo"
        }
    });
}