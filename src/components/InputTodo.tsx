import React, { ChangeEvent, useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../store/Actions";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

function InputTodo({
  editBtnTrack,
  setEditBtnTrack,
}: {
  editBtnTrack: boolean;
  setEditBtnTrack: (value: boolean) => void;
}) {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<string>("");

  const todoToEdit = useSelector((state: combReducer) => state.todoEditReducer);

  // console.log("pppppppp", todoToEdit);

  useEffect(() => {
    setNewTodo(todoToEdit.todo);
  }, [todoToEdit]);

  const inputFieldValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const addTodoFunc = () => {
    let todoObj = {
      id: uuid(),
      todo: newTodo,
    };

    dispatch(addTodo(todoObj));
    setNewTodo("");
  };

  const updateTodoFunc = () => {
    let editedObject = {
      id: todoToEdit.id,
      todo: newTodo,
    };

    dispatch(updateTodo(editedObject));

    setNewTodo("");
    setEditBtnTrack(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        label="Enter Todo..."
        color="secondary"
        variant="outlined"
        value={newTodo}
        onChange={inputFieldValueChange}
      />

      <Button
        variant="contained"
        onClick={editBtnTrack ? updateTodoFunc : addTodoFunc}
        sx={{ ml: 1, p: 2 }}
      >
        {editBtnTrack ? "Update" : "Add"}
      </Button>
    </div>
  );
}
export default InputTodo;
