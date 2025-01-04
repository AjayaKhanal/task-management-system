import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../actions/taskActions';
import TaskList from '../components/TaskList';

function Dashboard() {
  // const dispatch = useDispatch();
  // const { tasks } = useSelector((state) => state.tasks);

  // useEffect(() => {
  //   dispatch(getTasks());
  // }, [dispatch]);

  return (
    <div>
      <h1>Dashboard</h1>
      {/* <TaskList tasks={tasks} /> */}
    </div>
  );
}

export default Dashboard;
