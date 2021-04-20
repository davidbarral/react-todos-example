import React from "react";
import Todo from "./todo";
import List from "./list";
import { useSelector, useDispatch } from "./state-provider";
import * as actions from "../actions/todos";
import styles from "./todo-list.module.css";

const ChangeStateButton = ({ pending, onClick }) => (
  <button className={styles.ChangeStateButton} onClick={onClick}>
    {pending ? "mark as done" : "mark as pending"}
  </button>
);

const TodoList = () => {
  const todos = useSelector((state) => state.todos.data);
  const updateTodo = useDispatch((dispatch, id, pending) => dispatch(actions.updateTodo(id, { pending })));
  const removeTodo = useDispatch((dispatch, id) => dispatch(actions.removeTodo(id)));

  return (
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
  );
};

export default TodoList;
