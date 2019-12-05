import React, { Component } from "react";
import Todo from "./todo";

class TodoList extends Component {
  state = {
    todos: this.props.initialTodos,
  };

  handleUpdateTodo = (id, pending) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => (todo.id === id ? { ...todo, pending } : todo)),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            <Todo todo={todo} onUpdateTodo={this.handleUpdateTodo} />
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
