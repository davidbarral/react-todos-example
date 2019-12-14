import { Component } from "react";

const initialTodos = Array.from(Array(10), (_, i) => ({
  id: i,
  text: `Todo ${i}`,
  pending: true,
}));

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

    return this.props.children(api);
  }
}

export default AppState;
