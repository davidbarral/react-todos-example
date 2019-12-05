import React from "react";
import Page from "./page";
import Header from "./header";
import Content from "./content";
import TodoList from "./todo-list";

const todos = Array.from(Array(10), (_, i) => ({ id: i, text: `Todo ${i}` }));

const App = () => (
  <Page>
    <Header />
    <Content>
      <TodoList todos={todos} />
    </Content>
  </Page>
);

export default App;
