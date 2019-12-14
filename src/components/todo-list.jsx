import React from "react";
import PropTypes from "prop-types";
import Todo from "./todo";
import List from "./list";
import styles from "./todo-list.module.css";

const ChangeStateButton = ({ pending, onClick }) => (
  <button className={styles.ChangeStateButton} onClick={onClick}>
    {pending ? "mark as done" : "mark as pending"}
  </button>
);

const TodoList = ({ todos, onUpdateTodo, onRemoveTodo }) => (
  <List data={todos} fallback={<p className={styles.NoTodos}>No todos! well done!</p>}>
    {(todo) => (
      <Todo
        todo={todo}
        changeStateButton={<ChangeStateButton />}
        onUpdateTodo={onUpdateTodo}
        onRemoveTodo={onRemoveTodo}
      />
    )}
  </List>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(Todo.propTypes.todo).isRequired,
  onUpdateTodo: PropTypes.func.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoList;
