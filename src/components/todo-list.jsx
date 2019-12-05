import React from "react";
import Todo from "./todo";

const TodoList = ({ todos }) => (
  <ul>
    {todos.map((todo, i) => (
      <li key={i}>
        <Todo todo={todo} />
      </li>
    ))}
  </ul>
);

export default TodoList;
