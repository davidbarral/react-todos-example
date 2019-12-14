import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./todo.module.css";

const Todo = ({ todo: { id, text, pending }, onUpdateTodo, onRemoveTodo }) => {
  const handleChange = () => onUpdateTodo(id, !pending);
  const handleRemove = () => onRemoveTodo(id);

  return (
    <div className={styles.Todo}>
      <span className={cn({ [styles.Todo___done]: !pending })}>{text}</span>
      <span>
        <input type="checkbox" checked={!pending} onChange={handleChange} />
        <button className={styles.RemoveTodo} onClick={handleRemove}>
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
