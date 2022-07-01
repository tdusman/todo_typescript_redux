import React from "react";
import { List, ListItem, Typography, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { delTodo, editTodo } from "../store/Actions";

const TodoItemList = ({
  setEditBtnTrack,
}: {
  setEditBtnTrack: (value: boolean) => void;
}) => {
  const myTodo = useSelector((state: combReducer) => state.todoReducer.todos);
  const dispatch = useDispatch();

  // console.log("pppppppp", myTodo);

  const editTodoFunc = (todoObj: todoInterface) => {
    dispatch(editTodo(todoObj));
    setEditBtnTrack(true);
  };

  return (
    <>
      <List sx={{ justifyContent: "center" }}>
        {myTodo &&
          myTodo.map((todoObj) => {
            return (
              <ListItem key={todoObj.id}>
                <Typography>{todoObj.todo}</Typography>
                <Button
                  variant="outlined"
                  onClick={() => editTodoFunc(todoObj)}
                  sx={{ mr: 1, ml: 1 }}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => dispatch(delTodo(todoObj))}
                >
                  Delete
                </Button>
              </ListItem>
            );
          })}
      </List>
    </>
  );
};

export default TodoItemList;
