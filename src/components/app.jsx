import React from "react";
import Page from "./page";
import Header from "./header";
import Content from "./content";
import TodoList from "./todo-list";

const todos = Array.from(Array(10), (_, i) => ({ id: i, text: `Todo ${i}`, pending: true }));

const App = () => (
  <Page>
    <Header />
    <Content>
      <TodoList initialTodos={todos} />
    </Content>
  </Page>
);

export default App;
