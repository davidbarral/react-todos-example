import React from "react";
import Title from "./title";
import Counters from "./counters";
import TodoForm from "./todo-form";
import styles from "./header.module.css";

const Header = () => (
  <header className={styles.Header}>
    <Title text="My Todos" />
    <Counters />
    <TodoForm />
  </header>
);

export default Header;
