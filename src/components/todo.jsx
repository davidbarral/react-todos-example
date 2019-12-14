import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./todo.module.css";

const DefaultChangeStateButton = ({ pending, onClick }) => (
  <input type="checkbox" checked={!pending} onChange={onClick} />
);

const DefaultRemoveButton = ({ onClick }) => (
  <button className={styles.RemoveTodo} onClick={onClick}>
    x
  </button>
);

const Todo = ({
  todo: { id, text, pending },
  changeStateButton = <DefaultChangeStateButton />,
  removeButton = <DefaultRemoveButton />,
  onUpdateTodo,
  onRemoveTodo,
}) => {
  const handleChange = () => onUpdateTodo(id, !pending);
  const handleRemove = () => onRemoveTodo(id);

  return (
    <div className={styles.Todo}>
      <span className={cn({ [styles.Todo___done]: !pending })}>{text}</span>
      <span>
        {cloneElement(changeStateButton, {
          pending,
          onClick: () => {
            changeStateButton.props.onClick && changeStateButton.props.onClick();
            handleChange();
          },
        })}
        {cloneElement(removeButton, {
          onClick: () => {
            removeButton.props.onClick && removeButton.props.onClick();
            handleRemove();
          },
        })}
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
  changeStateButton: PropTypes.element,
  removeButton: PropTypes.element,
  onUpdateTodo: PropTypes.func.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default Todo;
