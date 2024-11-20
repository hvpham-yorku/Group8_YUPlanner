import React from 'react';
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
          
            <Route path="/login" element={<Login/>} />
            

            <Route path="/signup" element={<Signup/>} />
            
          {/* Add other routes here */}
          <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/search-courses" element={<SearchCourses />} />
              <Route path="/services/drop-course" element={<DropCourse />} />
              <Route path="/services/your-progress" element={<YourProgress />} />
              <Route path="/services/view-schedule" element={<ViewSchedule />} />
            </Routes>
          </div>
    </Router>
  );
}

export default App;
