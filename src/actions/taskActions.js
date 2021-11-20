import { ADD_TASK, GET_TASK_LIST } from "./types";

export const addTask = (data) => dispatch => {
    dispatch({
        type: ADD_TASK,
        payload: data
    });
};