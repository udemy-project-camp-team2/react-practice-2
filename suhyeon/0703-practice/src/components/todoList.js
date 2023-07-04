import { useDispatch, useSelector } from 'react-redux'
import {todoAdd, toggleTodo} from '../store/module/todoListStore'

const TodoList = () => {
    const todoStore = useSelector((state) => state.todo)
    const dispatch = useDispatch();

    const handleTodoAdd = (text) => {
        dispatch(
            todoAdd({
                id: Date.now() ,
                text,
                completed : false,
            })
        )
        document.getElementById('todoInput').value = '';
    }

    const handleTodoToggle = (id) => {
        dispatch(
            toggleTodo(id)
        )
    }

    return (
        <div>
            <h1>TodoList</h1>
            <ul>
                {
                    todoStore.map((todo) => (
                        <li key={todo.id} onClick={handleTodoToggle(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}>
                            {todo.text}
                        </li>
                    ))
                }
            </ul>
            <p><input type='text' id='todoInput'/></p>
            <button onClick={() => {
                handleTodoAdd(document.getElementById('todoInput').value)
            }}>추가</button>
        </div>
    )
}

export default TodoList;