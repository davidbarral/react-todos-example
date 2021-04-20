import React, { useEffect } from "react";
import cn from "classnames";
import { fetchTodos as fetchTodosAction } from "../actions/todos";
import { useSelector, useDispatch } from "./state-provider";
import useTitle from "../hooks/use-page-title.js";
import styles from "./page.module.css";

const delay = (n) => new Promise((resolve) => setTimeout(resolve, n));

const fetchTodosPromise = () =>
  delay(1000).then(() =>
    Array.from(Array(10), (_, i) => ({
      id: i,
      text: `Todo ${i}`,
      pending: true,
    })),
  );

const Page = ({ title, children }) => {
  useTitle(title);

  const { loading, error, data: todos } = useSelector((state) => state.todos);
  const fetchTodos = useDispatch((dispatch) => dispatch(fetchTodosAction(fetchTodosPromise)));

  useEffect(() => {
    fetchTodos();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
};

export default Page;
