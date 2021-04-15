import React from "react";
import PropTypes from "prop-types";
import { connect } from "./state-provider";

const count = (predicate) => (array) => array.filter(predicate).length;
const not = (pred) => (...args) => !pred(...args);
const pendingTodo = (todo) => todo.pending;
const doneTodo = not(pendingTodo);
const countPendingTodos = count(pendingTodo);
const countDoneTodos = count(doneTodo);

const Counters = ({ pending, done }) => (
  <div>
    Pending: {pending} Done: {done}
  </div>
);

Counters.propTypes = {
  pending: PropTypes.number.isRequired,
  done: PropTypes.number.isRequired,
};

export default connect((state) => ({
  pending: countPendingTodos(state.todos),
  done: countDoneTodos(state.todos),
}))(Counters);
