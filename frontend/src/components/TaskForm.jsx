import React from 'react'
import './taskform.css'
import { useNavigate } from 'react-router-dom'

function TaskForm() {
  const navigate = useNavigate();
  
  const cancelBtn=()=>{
    // window.location.assign('/tasklist')
    navigate('/tasklist')
  }

  return (
    <div className='task-container'>
      <div className="task-title">
        <h2>Create new Task</h2>
      </div>

      <div className='task-card'>
        <form className='task-form'>
          <input type="text" placeholder='Title' className="title" />
          <input type="text" placeholder='Description' className='descr' />

          <div>
            <label>Status</label>
            <select name='status' id='status'>
              <option>To Do</option>
              <option>Ongoing</option>
              <option>Completed</option>
            </select>
          </div>

          <div>
            <label>Priority</label>
            <select name='priority' id='priority'>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <input type="date" className="due-date" />
          <input type="text" placeholder='Assigned to' className="assigned-to" />
          <div className='taskform-button'>
            <button type='button' className='create-task'>Add</button>
            <button type='button' className='cancel' onClick={cancelBtn}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TaskForm