import { ADD_TASK } from "./types";

export const addTask = (data) => dispatch => {
    console.log(data)

    dispatch({
        type: ADD_TASK,
        payload: data
    });
}