import React from 'react'

const Todo=({todos,todo,setTodosHandler})=>{
    const DeleteHandler=()=>{
        setTodosHandler(todos.filter(el=>el.id!==todo.id));
    }
    const StatusHandler=(e)=>{
        e.preventDefault();
        console.log(e.target);
    }
    return(
        <div>
            <li>
                <p>{todo.text}</p>
                <button className="btn" onClick={StatusHandler}><i className="fas fa-check"></i></button>
                <button className="btn" onClick={DeleteHandler}><i className="fas fa-trash"></i></button>
            </li>
        </div>
    );
}
export default Todo;