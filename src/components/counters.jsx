import React from "react";
import { useSelector } from "./state-provider";

const count = (predicate) => (array) => array.filter(predicate).length;
const not = (pred) => (...args) => !pred(...args);
const pendingTodo = (todo) => todo.pending;
const doneTodo = not(pendingTodo);
const countPendingTodos = count(pendingTodo);
const countDoneTodos = count(doneTodo);

const Counters = () => {
  const pending = useSelector((state) => countPendingTodos(state.todos.data));
  const done = useSelector((state) => countDoneTodos(state.todos.data));

  return (
    <div>
      Pending: {pending} Done: {done}
    </div>
  );
};

export default Counters;
