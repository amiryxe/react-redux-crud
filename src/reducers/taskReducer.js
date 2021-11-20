import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "../actions/types";

const initialState = {
    taskList: [{
        id: 1,
        title: 'Task 1',
        date: '2020-01-01',
        description: 'Task 1 description',
    }],
};

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                taskList: [...state.taskList, action.payload],
            };

        case DELETE_TASK:
            return {
                ...state,
                taskList: state.taskList.filter(task => task.id !== action.payload),
            };

        case EDIT_TASK:
            return {
                ...state,
                taskList: state.taskList.map(task =>
                    task.id === action.payload.id ? action.payload : task),
            };

        default:
            return state;
    }
}
