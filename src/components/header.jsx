import React from "react";
import PropTypes from "prop-types";
import Title from "./title";
import Counters from "./counters";
import TodoForm from "./todo-form";

const Header = ({ counters, onAddTodo }) => (
  <header>
    <Title text="My Todos" />
    <Counters counters={counters} />
    <TodoForm onAddTodo={onAddTodo} />
  </header>
);

Header.propTypes = {
  ...Counters.propTypes,
  onAddTodo: PropTypes.func.isRequired,
};

export default Header;
