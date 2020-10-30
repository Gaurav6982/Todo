// import logo from './logo.svg';
import React, { useState } from "react";
import Form from "./components/Form";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputTextHandler] = useState("");
  const [todos, setTodosHandler] = useState([]);
  const [filter, setFilter] = useState("all");
  return (
    <div className="App">
      <header className="App-header">
        <h1>TO DO LIST</h1>
        <Form inputText={inputText} setInputTextHandler={setInputTextHandler} todos={todos} setTodosHandler={setTodosHandler}  />
        <TodoList todos={todos} setTodosHandler={setTodosHandler}/>
      </header>
    </div>
  );
}

export default App;
