import { useState } from 'react'

function TodoList () {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo([...todo, newTodo]);
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Write a To Do and Press Enter." 
        value={newTodo} onChange={handleChange} />

        <button type="submit">save</button>
      </form>

      <ul>
        {todo.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
    </div>
  );
  
}

export default function App() {
  return <TodoList />
}
