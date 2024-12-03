import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import StudentProfile from './pages/StudentProfile';
import ProfessorProfile from './pages/ProfessorProfile';
import SearchCourses from './pages/SearchCourses';
import DropCourse from './pages/DropCourse';
import YourProgress from './pages/YourProgress';
import ViewFullSchedule from './pages/ViewFullSchedule';
import CourseDetails from './pages/CourseDetails';

function App() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/professor-profile" element={<ProfessorProfile />} />
          <Route path="/student-profile" element={<StudentProfile />} />
          <Route path="/student-profile/search-courses" 
                 element={<SearchCourses enrolledCourses={enrolledCourses} setEnrolledCourses={setEnrolledCourses} />} />
          <Route path="/student-profile/drop-course" 
                 element={<DropCourse enrolledCourses={enrolledCourses} setEnrolledCourses={setEnrolledCourses} />} />
          <Route path="/student-profile/your-progress" element={<YourProgress />} />
          <Route path="/student-profile/view-schedule" 
                 element={<ViewFullSchedule enrolledCourses={enrolledCourses} />} />
          <Route path="/student-profile/course-details/:id" element={<CourseDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
