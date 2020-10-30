import React from 'react'

const Todo=({todos,todo,setTodosHandler})=>{
    const DeleteHandler=()=>{
        setTodosHandler(todos.filter(el=>el.id!==todo.id));
    }
    const StatusHandler=(e)=>{
        e.preventDefault();
        setTodosHandler(todos.map(el=>{
            if(el.id===todo.id)
            {
                el.completed=!todo.completed;
            }
            return el;
            }));
    }
    return(
        <div>
            <li>
                <p  className={`${todo.completed?"check":""}`} >{todo.text}</p>
                <button className="btn" onClick={StatusHandler}><i className="fas fa-check"></i></button>
                <button className="btn" onClick={DeleteHandler}><i className="fas fa-trash"></i></button>
            </li>
        </div>
    );
}
export default Todo;