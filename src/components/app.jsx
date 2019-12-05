import React, { Component } from "react";
import Page from "./page";
import Header from "./header";
import Content from "./content";
import TodoList from "./todo-list";

const initialTodos = Array.from(Array(10), (_, i) => ({
  id: i,
  text: `Todo ${i}`,
  pending: true,
}));

const count = predicate => array => array.filter(predicate).length;
const not = pred => (...args) => !pred(...args);
const pendingTodo = todo => todo.pending;
const doneTodo = not(pendingTodo);
const countPendingTodos = count(pendingTodo);
const countDoneTodos = count(doneTodo);

class App extends Component {
  state = {
    todos: initialTodos,
  };

  handleUpdateTodo = (id, pending) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => (todo.id === id ? { ...todo, pending } : todo)),
    }));
  };

  getCounters = () => ({
    pending: countPendingTodos(this.state.todos),
    done: countDoneTodos(this.state.todos),
  });

  render() {
    const { todos } = this.state;

    return (
      <Page>
        <Header counters={this.getCounters()} />
        <Content>
          <TodoList todos={todos} onUpdateTodo={this.handleUpdateTodo} />
        </Content>
      </Page>
    );
  }
}

export default App;
