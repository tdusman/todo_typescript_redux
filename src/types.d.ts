interface todoInterface {
  id: string;
  todo: string;
}

type todoState = {
  // [x: string]: any;
  // todoReducer: any;
  todos: todoInterface[];
};

type todoAction = {
  type: string;
  payload: todoInterface;
};

type combReducer = {
  todoReducer: todoState;
  todoEditReducer: todoInterface;
};

type editStateType = {
  setEditBtnTrack: (value: boolean) => void;
};
