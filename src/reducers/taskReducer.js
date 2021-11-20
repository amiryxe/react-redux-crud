import { ADD_TASK } from "../actions/types";

const initialState = {
    tasks: []
};

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: action.payload
            };
        default:
            return state;
    }
}