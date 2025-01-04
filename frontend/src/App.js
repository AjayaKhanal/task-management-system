import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
const location = useLocation();

//list of route where navbar should be hidden
const hideNavbarRoutes = ['/login', '/register']

  return (
    <div>
    {!hideNavbarRoutes.includes(location.pathname) && <Navbar/>}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route
  path="/dashboard"
  element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
/> */}

        <Route path="/taskform" element={<TaskForm />} />
        <Route path="/tasklist" element={<TaskList />} />
      </Routes>
    </div>
  );
}

const wrappedApp =()=>{
  return(
  <Router>
    <App/>
  </Router>
  )
}

export default wrappedApp;
