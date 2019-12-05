import React from "react";
import PropTypes from "prop-types";

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

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    pending: PropTypes.bool.isRequired,
  }),
  onUpdateTodo: PropTypes.func.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default Todo;
