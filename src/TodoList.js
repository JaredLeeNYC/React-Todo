import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, handleCheckTodo }) {
  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} handleCheckTodo={handleCheckTodo} />
      ))}
    </div>
  );
}
