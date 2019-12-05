import React from "react";
import Todo from "./todo";

const TodoList = ({ todos, onUpdateTodo }) => (
  <ul>
    {todos.map((todo, i) => (
      <li key={i}>
        <Todo todo={todo} onUpdateTodo={onUpdateTodo} />
      </li>
    ))}
  </ul>
);

export default TodoList;
