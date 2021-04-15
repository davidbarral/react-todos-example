import React from "react";
import Todo from "./todo";
import List from "./list";
import { Connect } from "./state-provider";
import { updateTodo, removeTodo } from "../actions/todos";
import styles from "./todo-list.module.css";

const ChangeStateButton = ({ pending, onClick }) => (
  <button className={styles.ChangeStateButton} onClick={onClick}>
    {pending ? "mark as done" : "mark as pending"}
  </button>
);

const TodoList = () => (
  <Connect
    mapStateToProps={(state) => ({
      todos: state.todos,
    })}
    mapDispatchToProps={(dispatch) => ({
      updateTodo: (id, pending) => dispatch(updateTodo(id, { pending })),
      removeTodo: (id) => dispatch(removeTodo(id)),
    })}
  >
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
  </Connect>
);

export default TodoList;
