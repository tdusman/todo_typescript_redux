import * as actionType from "./ActionTypes";

export const addTodo = (todoObj: todoInterface): todoAction => {
  return {
    type: actionType.Add_Todo,
    payload: todoObj,
  };
};

export const delTodo = (todoObj: todoInterface): todoAction => {
  return {
    type: actionType.Del_Todo,
    payload: todoObj,
  };
};

export const editTodo = (todoObj: todoInterface): todoAction => {
  return {
    type: actionType.Edit_Todo,
    payload: todoObj,
  };
};

export const updateTodo = (todoObj: todoInterface): todoAction => {
  return {
    type: actionType.Update_Todo,
    payload: todoObj,
  };
};
