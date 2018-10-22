import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.target.checked) {
      this.props.removeTask(this.props.id);
    }
  }

  render() {
    return (
      <li className="task">
        <input
          type="checkbox"
          onChange={this.handleChange}
        />
        {this.props.taskName}
      </li>
    );
  }
}

export default Task;
