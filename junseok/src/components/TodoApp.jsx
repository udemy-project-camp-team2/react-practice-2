import React, { useCallback, useState } from "react";
import styles from "./TodoApp.module.css";

function TodoWrapper({ children }) {
  return <div className={styles.todo__wrapper}>{children}</div>;
}

const TodoForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={styles.todo__form}>
      <input type="text" name="todo" placeholder="할 일 목록 작성하기" />
      <button type="submit">등록</button>
    </form>
  );
};

const TodoList = ({ todos }) => {
  return (
    <ul className={styles.todo__list}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

const TodoItem = ({ todo }) => {
  return <li className={styles.todo__item}>{todo.text}</li>;
};

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const submitTodoHandler = useCallback((e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const inputValue = formData.get("todo");
    if (!inputValue || inputValue.trim().length === 0) {
      alert(`한 글자 이상 입력해주세요!`);
      return;
    }

    const todo = {
      id: Date.now(),
      text: inputValue,
    };

    setTodos((prev) => [...prev, todo]);
    document.querySelector('input[name="todo"]').value = "";
  }, []);

  return (
    <main className={styles.main}>
      <TodoWrapper>
        <TodoForm onSubmit={submitTodoHandler} />
        <TodoList todos={todos} />
      </TodoWrapper>
    </main>
  );
};

export default TodoApp;
