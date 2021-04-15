import React from "react";
import StateProvider from "./state-provider";
import Theme from "./theme";
import Page from "./page";
import Header from "./header";
import Content from "./content";
import TodoList from "./todo-list";
import reducer from "../reducers/app";

const initialTodos = Array.from(Array(10), (_, i) => ({
  id: i,
  text: `Todo ${i}`,
  pending: true,
}));

const App = () => (
  <StateProvider reducer={reducer} initialState={{ todos: initialTodos }}>
    <Theme>
      <Page title="Awesome todos!">
        <Header />
        <Content>
          <TodoList />
        </Content>
      </Page>
    </Theme>
  </StateProvider>
);

export default App;
