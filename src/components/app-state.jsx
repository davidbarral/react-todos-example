import React, { Component, createContext } from "react";

const initialTodos = Array.from(Array(10), (_, i) => ({
  id: i,
  text: `Todo ${i}`,
  pending: true,
}));

const StateContext = createContext({});

class AppState extends Component {
  state = {
    todos: initialTodos,
  };

  addTodo = (todo) => {
    this.setState((prevState) => ({
      todos: [{ id: new Date().getTime(), ...todo }, ...prevState.todos],
    }));
  };

  updateTodo = (id, pending) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => (todo.id === id ? { ...todo, pending } : todo)),
    }));
  };

  removeTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  render() {
    const api = {
      todos: this.state.todos,
      addTodo: this.addTodo,
      updateTodo: this.updateTodo,
      removeTodo: this.removeTodo,
    };

    return <StateContext.Provider value={api}>{this.props.children}</StateContext.Provider>;
  }
}

export const WithState = ({ children }) => <StateContext.Consumer>{(api) => children(api)}</StateContext.Consumer>;

export const withState = (Comp) => {
  const Wrapper = (props) => <WithState>{(api) => <Comp {...api} {...props} />}</WithState>;
  Wrapper.displayName = `withState(${Comp.displayName || Comp.name || "Component"})`;
  return Wrapper;
};

export default AppState;
