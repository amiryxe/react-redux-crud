import { ADD_TASK, DELETE_TASK } from "../actions/types";

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

        default:
            return state;
    }
}
