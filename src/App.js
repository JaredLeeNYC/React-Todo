import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import uuidv4 from "uuid/v4";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  const LOCAL_STORAGE_KEY = "todoAPP.todos";

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function handleCheckTodo(id) {
    const newTodos = [...todos];
    const newTodo = newTodos.find(todo => todo.id === id);
    newTodo.complete = !newTodo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;

    // console.log(...todos);
    // setTodos([
    //   ...todos,
    //   { id: uuidv4(), name: todoNameRef.current.value, complete: false }
    // ]);
  }

  return (
    <>
      <TodoList todos={todos} handleCheckTodo={handleCheckTodo} />
      <input ref={todoNameRef} type="text"></input>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Complete</button>
      <p>0 left to do {todos.length}</p>
    </>
  );
}

export default App;
