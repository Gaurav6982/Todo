import React from 'react'
import Todo from './Todo'
const TodoList=({todos,setTodosHandler})=>{
    return (
        <div>
            <ul>
                {
                    todos.map((todo)=>(
                        <Todo todo={todo} todos={todos} setTodosHandler={setTodosHandler} key={todo.id}></Todo>
                        ))
                }
            </ul>
        </div>
    );
}

export default TodoList