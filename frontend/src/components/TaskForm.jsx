import React from 'react'

function TaskForm() {
  return (
    <div className='task-container'>
        <div className='task-card'>
            <h2>Create new Task</h2>
            <form className='task-form'>
                <input type="text" placeholder='Title' className="title" />
                <input type="text" placeholder='Description' className='descr' />
                <input type="text" className="status" />
                <input type="text" className="priority" />
                <input type="date" className="due-date" />
                <input type="text" className="assigned-to" />
                <button type='button' className='create-task'>Add</button>
            </form>
        </div>
    </div>
  )
}

export default TaskForm