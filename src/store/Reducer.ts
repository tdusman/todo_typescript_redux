import { combineReducers } from "redux";
import * as actionType from "./ActionTypes";

export const initialState: todoState = {
  todos: [],
};

const todoReducer = (
  state: todoState = initialState,
  action: todoAction
): todoState => {
  switch (action.type) {
    case actionType.Add_Todo: {
      return {
        todos: [...state.todos, action.payload],
      };
    }

    case actionType.Del_Todo: {
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    }

    case actionType.Update_Todo: {
      return {
        todos: state.todos.map((todoObject) =>
          todoObject.id === action.payload.id ? action.payload : todoObject
        ),
      };
    }

    default: {
      return state;
    }
  }
};

const initialState2: todoInterface = {
  id: "",
  todo: "",
};

const todoEditReducer = (
  state: todoInterface = initialState2,
  action: todoAction
): todoInterface => {
  switch (action.type) {
    case "EDITTODO": {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};

export const combReducer = combineReducers({
  todoReducer,
  todoEditReducer,
});
