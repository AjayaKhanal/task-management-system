import React from 'react';
import {Link} from 'react-router-dom';

function TaskList({ tasks }) {
  return (
    <div>
      <div className="add-task">
        <Link to='/taskform'>Add new Task</Link>
      </div>
      <h2>Tasks</h2>
      {tasks && tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Status: {task.status}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
}

export default TaskList;
