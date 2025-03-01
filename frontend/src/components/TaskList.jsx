import React from 'react';
import { useNavigate } from 'react-router-dom';
import './tasklist.css'

function TaskList({ tasks }) {
  const navigate = useNavigate();

  const taskform = () => {
    navigate('/taskform')
  }

  return (
    <div className='tasklist-container'>
      <div className="add-task">
        <button onClick={taskform}> Add new Task</button>
      </div>

      <div className='tasks'>
        <h2>Tasks</h2>
      </div>

      <div className='task-table'>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>

          {/* <tr> */}
          {tasks && tasks.length > 0 ? (
            <tbody>
              <ul>
                {tasks.map((task) => (
                  <li key={task._id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>Status: {task.status}</p>
                  </li>
                ))}
              </ul>
            </tbody>
          ) : (
            <tbody>
              <tr>
                {/* <li> */}
                <td>Coding</td>
                <td>Frontend needed to be done</td>
                <td>Ongoing</td>
                {/* </li> */}
              </tr>
              
              <tr>
              <td>Coding</td>
              <td>Backend needed to be done</td>
              <td>Ongoing</td>
              </tr>
              <tr><p>No tasks available.</p></tr>
            </tbody>
          )}
          {/* </tr> */}

        </table>
      </div>
    </div>
  );
}

export default TaskList;
