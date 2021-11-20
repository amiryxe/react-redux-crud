import { combineReducers } from "redux";
import taskReudcer from './taskReducer';

export default combineReducers({
    tasks: taskReudcer
});