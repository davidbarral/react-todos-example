import React, { Component } from "react";
import cn from "classnames";
import { fetchTodos } from "../actions/todos";
import { connect } from "./state-provider";
import withTitle from "../hocs/with-title";
import styles from "./page.module.css";

class Page extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { loading, error, todos, children } = this.props;

    if (loading) {
      return <div className={styles.Loader}>Loading...</div>;
    }

    if (error) {
      return <div className={cn(styles.Loader, styles.Loader__error)}>Something went wrong: {error.toString()}</div>;
    }

    if (todos === undefined) {
      return false;
    }

    return <div className={styles.Page}>{children}</div>;
  }
}

const delay = (n) => new Promise((resolve) => setTimeout(resolve, n));

const fetchTodosPromise = () =>
  delay(1000).then(() =>
    Array.from(Array(10), (_, i) => ({
      id: i,
      text: `Todo ${i}`,
      pending: true,
    })),
  );

export default connect(
  (state) => ({
    loading: state.todos.loading,
    error: state.todos.error,
    todos: state.todos.data,
  }),
  (dispatch) => ({
    fetchTodos: () => dispatch(fetchTodos(fetchTodosPromise)),
  }),
)(withTitle(Page));
