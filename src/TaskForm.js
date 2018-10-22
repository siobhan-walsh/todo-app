import React, { Component } from 'react';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({taskName: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.taskName) {
      this.props.update(this.state.taskName);
      this.setState({taskName: ""});
    }
  }

  render() {
    return (
      <div className="task-form">
        <form onSubmit={this.handleSubmit}>
          <input
            name="taskName"
            type="text"
            value={this.state.taskName}
            onChange={this.handleChange}
            placeholder="New Task"
          />
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default TaskForm;
