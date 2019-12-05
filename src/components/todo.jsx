import React from "react";

const Todo = ({ todo: { id, text, pending }, onUpdateTodo, onRemoveTodo }) => {
  const handleChange = () => onUpdateTodo(id, !pending);
  const handleRemove = () => onRemoveTodo(id);

  return (
    <div className="todo">
      <span className={pending ? "todo___pending" : "todo___done"}>{text}</span>
      <span>
        <input type="checkbox" checked={!pending} onChange={handleChange} />
        <button className="remove-todo" onClick={handleRemove}>
          x
        </button>
      </span>
    </div>
  );
};

export default Todo;
