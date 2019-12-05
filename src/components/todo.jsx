import React from "react";

const Todo = ({ todo: { id, text, pending }, onUpdateTodo }) => {
  const handleChange = () => onUpdateTodo(id, !pending);

  return (
    <div className="todo">
      <span className={pending ? "todo___pending" : "todo___done"}>{text}</span>
      <input type="checkbox" checked={!pending} onChange={handleChange} />
    </div>
  );
};

export default Todo;
