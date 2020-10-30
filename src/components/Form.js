import React from 'react'

const Form = ({inputText,setInputTextHandler,todos,setTodosHandler})=>{
    const handleChange=(e)=>{
        // console.log(e.target.value);
        e.preventDefault();
        setInputTextHandler(e.target.value);
    }
    const handleSubmit=(e)=>{
        // console.log(e.target.value);
        e.preventDefault();
        setTodosHandler([
            ...todos,{text:inputText,completed:false,id:Math.random()*100}
        ]);
        setInputTextHandler("");
        // console.log();
    }
    return (
        <form>
            <input onChange={handleChange} type="text"  className="form-control" value={inputText}/>
            <button className="btn btn-primary" onClick={handleSubmit}> <i className="fas fa-plus"></i></button>
            <select name="" id="" className="form-control">
                <option value="">All</option>
                <option value="">Completed</option>
                <option value="">Not Completed</option>
            </select>
        </form>
    );
}

export default Form