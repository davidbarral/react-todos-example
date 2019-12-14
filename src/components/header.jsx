import React from "react";
import PropTypes from "prop-types";
import Title from "./title";
import Counters from "./counters";
import TodoForm from "./todo-form";
import styles from "./header.module.css";

const Header = ({ todos, onAddTodo }) => (
  <header className={styles.Header}>
    <Title text="My Todos" />
    <Counters todos={todos} />
    <TodoForm onAddTodo={onAddTodo} />
  </header>
);

Header.propTypes = {
  ...Counters.propTypes,
  onAddTodo: PropTypes.func.isRequired,
};

export default Header;
