import React from "react";
import AppState from "./app-state";
import Theme from "./theme";
import Page from "./page";
import Header from "./header";
import Content from "./content";
import TodoList from "./todo-list";

const App = () => (
  <AppState>
    <Theme>
      <Page title="Awesome todos!">
        <Header />
        <Content>
          <TodoList />
        </Content>
      </Page>
    </Theme>
  </AppState>
);

export default App;
