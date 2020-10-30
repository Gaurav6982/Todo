import React,{useEffect} from 'react'

const Form = ({inputText,setInputTextHandler,todos,filter,setTodosHandler,setFilter,setFilteredTodo})=>{
   
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
    const handleFilter=(e)=>{
        setFilter(e.target.value);
    }
    

    return (
        <form>
            <input onChange={handleChange} type="text"  className="form-control" value={inputText}/>
            <button className="btn btn-primary" onClick={handleSubmit}> <i className="fas fa-plus"></i></button>
            <select onChange={handleFilter} className="form-control">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Not Completed</option>
            </select>
        </form>
    );
}

export default Form