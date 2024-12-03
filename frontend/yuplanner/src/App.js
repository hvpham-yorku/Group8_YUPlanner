import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { UserProvider } from './UserContext';

//import AppBar from './components/AppBar';

//import LoginSignUpButtons from './components/LoginSignUpButtons';
//import Sidebar from './components/Sidebar';
import StudentProfile from './pages/StudentProfile';
import ProfessorProfile from './pages/ProfessorProfile';
import SearchCourses from './pages/SearchCourses';
import DropCourse from './pages/DropCourse';
import YourProgress from './pages/YourProgress';
import ViewSchedule from './pages/ViewSchedule';
import CourseDetails from './pages/CourseDetails.js';
function App() {

  return (
    <UserProvider>
    <Router>
          <div className="App">
            <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
          
            <Route path="/login" element={<Login/>} />
            

            <Route path="/signup" element={<Signup/>}>
            </Route>

            <Route path="/professor-profile" element={<ProfessorProfile />}>
            </Route>

            <Route path="/student-profile" element={<StudentProfile />}>
            </Route>
            <Route path="/student-profile/search-courses" element={<SearchCourses />} />
            <Route path="/student-profile/drop-course" element={<DropCourse />} />
            <Route path="/student-profile/course-details/:coursecode" element={<CourseDetails />} />
            </Routes>
          </div>
        </Router>
        </UserProvider>


            // element={
            //   <div style={{ display: 'flex' }}>
            //     <Sidebar />
            //     <div style={{ marginLeft: '200px', padding: '20px', flexGrow: 1 }}>
            //     {/* Other content can go here */}
            //      <h1 style={{ fontSize: '60px' }}>Welcome to your YUPlanner</h1>
            //       <h3>Select options from the Services menu.</h3>
            //      </div>
            //     <div style={{ marginLeft: '200px', padding: '20px', flexGrow: 1 }}>
            //       <Routes>
            //         <Route path="/search-courses" element={<SearchCourses />} />
            //         <Route path="/drop-course" element={<DropCourse />} />
            //         <Route path="/your-progress" element={<YourProgress />} />
            //         <Route path="/view-schedule" element={<ViewSchedule />} />
            //       </Routes>
            //       </div>
            //     </div>
            // }
            // />
            // </Routes>
    //   </div>
    // </Router>
  );
}

export default App;