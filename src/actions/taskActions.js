import { ADD_TASK, DELETE_TASK, EDIT_TASK, IS_SHOW_ADD_TASK, IS_DONE_TASK } from "./types";

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

export const showAddTask = (status) => dispatch => {
    dispatch({
        type: IS_SHOW_ADD_TASK,
        payload: status
    });
};

export const isDoneTask = (id) => dispatch => {
    dispatch({
        type: IS_DONE_TASK,
        payload: id
    });
}