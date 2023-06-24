import React,{useState} from "react";

function TodoList() { 
    const [todo,setTodo] = useState([]);
    const [text,setText] = useState('');

    const handleInput = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodo([...todo,text]);
        setText('');
        
    }
    
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="" id="" value={text} onChange={handleInput}/>
                    <button type="submit">add</button>
                </form>
            </div>
            <h2>Todo List</h2>
            <ul>
                {
                    todo.map((item,index)=>{
                        <li key={index}>{item}</li>
                    })
                }
            </ul>
        </>
    )
}

export default TodoList;