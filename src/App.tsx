import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import TodoItemList from "./components/TodoItemList";

function App() {
  const [editBtnTrack, setEditBtnTrack] = useState(false);

  return (
    <div className="App">
      <Header />
      <InputTodo
        editBtnTrack={editBtnTrack}
        setEditBtnTrack={setEditBtnTrack}
      />
      <TodoItemList setEditBtnTrack={setEditBtnTrack} />
    </div>
  );
}

export default App;
