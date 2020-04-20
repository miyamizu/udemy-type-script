import React from 'react';

interface Task {title: string;}

interface TaskListProps {
  initialTasks: Task[];
}

interface TasksListState {
  tasks: Task[];
}

class TasksList extends React.Component<TaskListProps, TasksListState> {
  constructor(props: TaskListProps) {
    super(props);
    this.state = {
      tasks: props.initialTasks
    };

    this.onAddNewTaskClick = this.onAddNewTaskClick.bind(this);
  }

  onAddNewTaskClick() {
    this.setState({tasks: [...this.state.tasks, {title: 'New Title'}]});
  }

  render() {
    const { tasks } = this.state;

    return (
        <>
        <ul>
          {tasks.map((task, i) => {
            return <li key={i}>{task.title}</li>;
          })}
        </ul>
        <button onClick={this.onAddNewTaskClick}>Add new task</button>
      </>
    );
  }
}

const tasks = [
  {title: 'Task One'},
  {title: 'Task Two'}
];


export default () => <div><TasksList initialTasks={tasks} /></div>;