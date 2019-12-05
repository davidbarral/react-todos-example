import React from "react";
import PropTypes from "prop-types";
import Todo from "./todo";

const TodoList = ({ todos, onUpdateTodo, onRemoveTodo }) =>
  todos.length === 0 ? (
    <p className="no-todos">No todos! well done!</p>
  ) : (
    <ul>
      {todos.map((todo, i) => (
        <li key={i}>
          <Todo todo={todo} onUpdateTodo={onUpdateTodo} onRemoveTodo={onRemoveTodo} />
        </li>
      ))}
    </ul>
  );

TodoList.propTypes = {
  todos: PropTypes.arrayOf(Todo.propTypes.todo).isRequired,
  onUpdateTodo: PropTypes.func.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoList;
