import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "./types";

export const addTask = (data) => dispatch => {
    dispatch({
        type: ADD_TASK,
        payload: data
    });
};

export const deleteTask = (id) => dispatch => {
    dispatch({
        type: DELETE_TASK,
        payload: id
    });
};

export const editTask = (data) => dispatch => {
    dispatch({
        type: EDIT_TASK,
        payload: data
    });
};