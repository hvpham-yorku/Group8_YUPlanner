import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { useUser } from '../UserContext';

const Sidebar = () => {
  const { user, setUser } = useUser();
  const [studentData, setStudentData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (user) {
      fetch('http://localhost:8080/student/find', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch student data');
          }
          return response.json();
        })
        .then((data) => {
          setStudentData(data);
        })
        .catch((error) => {
          console.error('Error fetching student data:', error);
        });
    } else {
      setStudentData(null);
    }
  }, [user]);

  return (
    <div className="sidebar">
      <div className="profile-section">
        <Link to="/student-profile" style={{ textDecoration: 'none' }}>
          <Avatar src="/path-to-profile-pic.jpg" alt="Profile" sx={{ width: 80, height: 80 }} />
        </Link>
        <div className="profile-details">
          <Link to="/student-profile" style={{ color: 'white', textDecoration: 'none' }}>
            <h2 className="student-name">{`${studentData?.firstname || ''} ${studentData?.lastname || ''}`}</h2>
          </Link>
          <p className="student-id">{studentData?.userid}</p>
        </div>
      </div>
      <ul className="sidebar-menu">
        <li className={location.pathname.includes('search-courses') ? 'active' : ''}>
          <Link to="/student-profile/search-courses" className="sidebar-link">Search Courses</Link>
        </li>
        <li className={location.pathname.includes('drop-course') ? 'active' : ''}>
          <Link to="/student-profile/drop-course" className="sidebar-link">Drop Course</Link>
        </li>
        <li className={location.pathname.includes('your-progress') ? 'active' : ''}>
          <Link to="/student-profile/your-progress" className="sidebar-link">Your Progress</Link>
        </li>
        <li className={location.pathname.includes('view-schedule') ? 'active' : ''}>
          <Link to="/student-profile/view-schedule" className="sidebar-link">View Full Schedule</Link>
        </li>
      </ul>
      <Link to="/login" style={{ textDecoration: 'none', marginTop: '10px' }}
        onClick={() => {
          setUser(null);
          setStudentData(null);
        }}>
        <Button variant="contained" className="signout-btn">
          Sign Out
        </Button>
      </Link>
    </div>
  );
};

export default Sidebar;
