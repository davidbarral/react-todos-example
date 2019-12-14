import React from "react";
import PropTypes from "prop-types";

const count = (predicate) => (array) => array.filter(predicate).length;
const not = (pred) => (...args) => !pred(...args);
const pendingTodo = (todo) => todo.pending;
const doneTodo = not(pendingTodo);
const countPendingTodos = count(pendingTodo);
const countDoneTodos = count(doneTodo);

const Counters = ({ todos }) => (
  <div>
    Pending: {countPendingTodos(todos)} Done: {countDoneTodos(todos)}
  </div>
);

Counters.propTypes = {
  counters: PropTypes.exact({
    pending: PropTypes.number.isRequired,
    done: PropTypes.number.isRequired,
  }).isRequired,
};

export default Counters;
