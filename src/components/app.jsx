import React from "react";
import StateProvider from "./state-provider";
import Theme from "./theme";
import Page from "./page";
import Header from "./header";
import Content from "./content";
import TodoList from "./todo-list";
import reducer from "../reducers/app";
import thunk from "../middleware/thunk";
import log from "../middleware/log";

const App = () => (
  <Theme>
    <StateProvider reducer={reducer} middleware={[thunk, log]}>
      <Page title="Awesome todos!">
        <Header />
        <Content>
          <TodoList />
        </Content>
      </Page>
    </StateProvider>
  </Theme>
);

export default App;
