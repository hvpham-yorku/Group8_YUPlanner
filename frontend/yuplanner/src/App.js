import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';

import AppBar from './components/AppBar';

import LoginSignUpButtons from './components/LoginSignUpButtons';
import Sidebar from './components/Sidebar';
import ServicesPage from './pages/ServicesPage';
import SearchCourses from './pages/SearchCourses';
import DropCourse from './pages/DropCourse';
import YourProgress from './pages/YourProgress';
import ViewSchedule from './pages/ViewSchedule';

function App() {

  return (
    <Router>
          <div className="App">
            <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
          
            <Route path="/login" element={<Login/>}>
            </Route>

            <Route path="/signup" element={<Signup/>}>
            </Route>
          {/* Add other routes here */}
          <Route
            path="/services"
            element={
              <div style={{ display: 'flex' }}>
                <Sidebar />
                <div style={{ marginLeft: '200px', padding: '20px', flexGrow: 1 }}>
                {/* Other content can go here */}
                 <h1 style={{ fontSize: '60px' }}>Welcome to your YUPlanner</h1>
                  <h3>Select options from the Services menu.</h3>
                 </div>
                <div style={{ marginLeft: '200px', padding: '20px', flexGrow: 1 }}>
                  <Routes>
                    <Route path="/search-courses" element={<SearchCourses />} />
                    <Route path="/drop-course" element={<DropCourse />} />
                    <Route path="/your-progress" element={<YourProgress />} />
                    <Route path="/view-schedule" element={<ViewSchedule />} />
                  </Routes>
                  </div>
                </div>
            }
            />
            </Routes>
      </div>
    </Router>
  );
}

export default App;
