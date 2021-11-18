import { createStore } from "redux";
import rootReducer from "./reducers";

const initialState = null;

const middleware = ['thunk'];

const store = createStore(
    rootReducer,
    initialState,
    middleware
);

export default store;