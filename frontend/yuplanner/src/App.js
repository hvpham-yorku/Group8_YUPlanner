import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { UserProvider } from './UserContext';
import StudentProfile from './pages/StudentProfile';
import ProfessorProfile from './pages/ProfessorProfile';
import SearchCourses from './pages/SearchCourses';
import DropCourse from './pages/DropCourse';
import YourProgress from './pages/YourProgress';
import ViewFullSchedule from './pages/ViewFullSchedule';
import CourseDetails from './pages/CourseDetails';
import AIHelper from './pages/AIHelper'; // Import the new AIHelper component

function App() {
  // State to manage enrolled courses
  const [enrolledCourses, setEnrolledCourses] = useState([
    { id: 1, coursecode: 'ENG3000', coursename: 'Professional Engineering Practice', dept: 'ENG' },
    { id: 2, coursecode: 'EECS2101', coursename: 'Fundamentals of Data Structures', dept: 'EECS' },
    { id: 3, coursecode: 'EECS3213', coursename: 'Communication Networks', dept: 'EECS' },
    { id: 4, coursecode: 'EECS3221', coursename: 'Operating System Fundamentals', dept: 'EECS' },
    { id: 5, coursecode: 'ENG4000', coursename: 'Engineering Project', dept: 'ENG' },
    { id: 6, coursecode: 'PHYS1470', coursename: 'Highlights of Astronomy', dept: 'PHYS' },
  ]);

  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/professor-profile" element={<ProfessorProfile />} />
            <Route path="/student-profile" element={<StudentProfile />} />
            <Route 
              path="/student-profile/search-courses" 
              element={
                <SearchCourses 
                  enrolledCourses={enrolledCourses} 
                  setEnrolledCourses={setEnrolledCourses} 
                />
              } 
            />
            <Route 
              path="/student-profile/drop-course" 
              element={
                <DropCourse 
                  enrolledCourses={enrolledCourses} 
                  setEnrolledCourses={setEnrolledCourses} 
                />
              } 
            />
            <Route 
              path="/student-profile/your-progress" 
              element={
                <YourProgress 
                  enrolledCourses={enrolledCourses} 
                />
              } 
            />
            <Route 
              path="/student-profile/view-schedule" 
              element={
                <ViewFullSchedule 
                  enrolledCourses={enrolledCourses} 
                />
              } 
            />
            <Route path="/student-profile/course-details/:id" element={<CourseDetails />} />
            <Route path="/student-profile/ai-helper" element={<AIHelper />} /> {/* New AI Helper Route */}
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
