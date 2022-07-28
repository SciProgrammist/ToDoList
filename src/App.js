import React from 'react';
import TaskList from './TaskList.js';
import NewTask from './NewTask.js';

function App() {
  const tasks = [
    {id: 0, description: 'do this', done: false},
    {id: 1, description: 'do that', done: false},
  ];
  return (
    <div className = "container">
      <div className = "row">
        <div className = "col">
          <div className = "jumbotron">
            <h1 className="display-4">Todo App</h1>
          </div>
          <NewTask/>
          <br/>
          <TaskList tasks = {tasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
