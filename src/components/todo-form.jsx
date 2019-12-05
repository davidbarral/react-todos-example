import React, { Component } from "react";

class TodoForm extends Component {
  state = {
    task: "",
    pending: true,
  };

  handleTaskChange = e => {
    this.setState({
      task: e.target.value,
    });
  };

  handlePendingChange = () => {
    this.setState(prevState => ({
      pending: !prevState.pending,
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddTodo({ text: this.state.task, pending: this.state.pending });
    this.setState({
      task: "",
      pending: true,
    });
  };

  render() {
    const { task, pending } = this.state;
    return (
      <form className="todo-form">
        <input type="text" value={task} placeholder="Task" onChange={this.handleTaskChange} />
        <label>
          <input type="checkbox" checked={!pending} onChange={this.handlePendingChange} /> done
        </label>
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}

export default TodoForm;
