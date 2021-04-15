import React from "react";
import cn from "classnames";
import StateProvider from "./state-provider";
import Theme from "./theme";
import Page from "./page";
import Header from "./header";
import Content from "./content";
import TodoList from "./todo-list";
import RemoteData from "./remote-data";
import reducer from "../reducers/app";
import styles from "./app.module.css";

const delay = (n) => new Promise((resolve) => setTimeout(resolve, n));

const fetchTodos = () =>
  delay(1000).then(() =>
    Array.from(Array(10), (_, i) => ({
      id: i,
      text: `Todo ${i}`,
      pending: true,
    })),
  );

const App = () => (
  <Theme>
    <RemoteData promise={fetchTodos}>
      {({ data: todos, loading, error }) => {
        if (loading) {
          return <div className={styles.Loader}>Loading...</div>;
        }

        if (error) {
          return (
            <div className={cn(styles.Loader, styles.Loader__error)}>Something went wrong: {error.toString()}</div>
          );
        }

        return (
          <StateProvider reducer={reducer} initialState={{ todos }}>
            <Page title="Awesome todos!">
              <Header />
              <Content>
                <TodoList />
              </Content>
            </Page>
          </StateProvider>
        );
      }}
    </RemoteData>
  </Theme>
);

export default App;
