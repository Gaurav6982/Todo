// import logo from './logo.svg';
import React, { useState,useEffect } from "react";
import Form from "./components/Form";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputTextHandler] = useState("");
  const [todos, setTodosHandler] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredTodo, setFilteredTodo] = useState([]);
  useEffect(()=>{
    getFromLocal();
  },[]);
  useEffect(()=>{
    filterTodoHandler();
    saveToLocal();
  },[todos,filter]);

  const filterTodoHandler=()=>{
    switch(filter)
    {
        case 'completed': setFilteredTodo(todos.filter(el=>el.completed===true)); break;
        case 'uncompleted': setFilteredTodo(todos.filter(el=>el.completed===false)); break;
        default: setFilteredTodo(todos); break;
    }
  }
  const saveToLocal=()=>localStorage.setItem('todos',JSON.stringify(todos));
  const getFromLocal=()=>{
    if(localStorage.getItem('todos')===null)
    {
      localStorage.setItem('todos',JSON.stringify([]));
    }
    else
    {
      let localSave=JSON.parse(localStorage.getItem('todos'));
      setTodosHandler(localSave);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>TO DO LIST</h1>
        <Form inputText={inputText} setInputTextHandler={setInputTextHandler} todos={todos} setTodosHandler={setTodosHandler} setFilter={setFilter} setFilteredTodo={setFilteredTodo} filter={filter} />
        <TodoList todos={todos} filteredTodo={filteredTodo} setTodosHandler={setTodosHandler}/>
      </header>
    </div>
  );
}

export default App;
