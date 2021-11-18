import { combineReducers } from "redux";
import taskReudcer from '../reducers/taskReudcer';

export default combineReducers({
    task: taskReudcer
});