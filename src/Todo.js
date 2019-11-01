import React from "react";

export default function Todo({ todo, handleCheckTodo }) {
  function handleClick() {
    handleCheckTodo(todo.id);
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleClick}
        ></input>
        {todo.name}
      </label>
    </div>
  );
}
