import React from "react";
import Todo from "./todo";
import List from "./list";
import { WithState } from "./app-state.jsx";
import styles from "./todo-list.module.css";

const ChangeStateButton = ({ pending, onClick }) => (
  <button className={styles.ChangeStateButton} onClick={onClick}>
    {pending ? "mark as done" : "mark as pending"}
  </button>
);

const TodoList = () => (
  <WithState>
    {({ todos, updateTodo, removeTodo }) => (
      <List data={todos} fallback={<p className={styles.NoTodos}>No todos! well done!</p>}>
        {(todo) => (
          <Todo
            todo={todo}
            changeStateButton={<ChangeStateButton />}
            onUpdateTodo={updateTodo}
            onRemoveTodo={removeTodo}
          />
        )}
      </List>
    )}
  </WithState>
);

export default TodoList;
