import React, { Component } from 'react';
import Task from './Task.js';
import TaskForm from './TaskForm.js';
import './App.css';

class App extends Component {

  /* TODO:
    - improve overall styling
    - add drag/drop functionality
    - allow for viewing completed items
   */

  constructor(props) {
    super(props);
    this.updateTasks = this.updateTasks.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.state = {
       tasks : [],
       count: 0
    }
  }

  updateTasks(taskName) {
    let task = {
      taskName: taskName,
      id:  this.generateId(taskName),
      completed: false
    };
    let taskList = this.state.tasks;
    taskList.push(task);
    this.setState({tasks: taskList});
  }

  removeTask(taskId) {
    let tasksArr = this.state.tasks;
    let index;
    for (let i = 0; i < tasksArr.length; i++) {
      if (tasksArr[i].id === taskId) {
        index = i;
        break;
      }
    }
    tasksArr.splice(index, 1);
    this.setState({tasks: tasksArr});
  }

  generateId(taskName) {
    let tmpCount = this.state.count + 1;
    this.setState({count: tmpCount});
    return tmpCount + taskName;
  }

  render() {
    return (
      <div className="wrap">
        <div className="content">
          <h1>To Do</h1>

          <ul>
            {this.state.tasks.map((task) => {
              return (
                <Task key={task.id}
                  taskName={task.taskName}
                  completed={task.completed}
                  id={task.id}
                  removeTask={this.removeTask}
                />
              )
            })}
          </ul>

          <TaskForm update={this.updateTasks}/>
        </div>
      </div>
    );
  }
}

export default App;
