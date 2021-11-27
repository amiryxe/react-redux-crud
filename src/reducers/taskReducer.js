import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  IS_SHOW_ADD_TASK,
  IS_DONE_TASK,
  SHOW_MODE,
} from "../actions/types";

const initialState = {
  taskList: [
    {
      id: 1,
      title: "Task 1",
      date: "2020-01-01",
      description: "Task 1 description",
      isDone: false,
    },
  ],
  isShowAddTask: false,
  showMode: "all",
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
        taskList: state.taskList.filter((task) => task.id !== action.payload),
      };

    case EDIT_TASK:
      return {
        ...state,
        taskList: state.taskList.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };

    case IS_SHOW_ADD_TASK:
      return {
        ...state,
        isShowAddTask: action.payload,
      };

    case IS_DONE_TASK:
      return {
        ...state,
        taskList: state.taskList.map((task) =>
          task.id === action.payload
            ? {
                ...task,
                isDone: !task.isDone,
              }
            : task
        ),
      };

    case SHOW_MODE:
      return {
        ...state,
        showMode: action.payload,
      };

    default:
      return state;
  }
}
