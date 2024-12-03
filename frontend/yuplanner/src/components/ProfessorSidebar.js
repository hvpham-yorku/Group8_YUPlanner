import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { useUser } from '../UserContext';


const ProfessorSidebar = () => {
  const { user, setUser } = useUser(); 
  const [professorData, setProfessorData] = useState(null);
  console.log('Account Details:', user);


  useEffect(() => {
    if (user) {
      // Fetch student data only if user exists
      fetch('http://localhost:8080/professor/find', {
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
          setProfessorData(data); 
        })
        .catch((error) => {
          console.error('Error fetching student data:', error);
        });
    } else {
      setProfessorData(null);
    }
  }, [user]); 
  return (
    <div className="sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Professor Profile Section */}
      <div className="profile-section">
        <Link to="/professor-profile" style={{ textDecoration: 'none' }}>
        <Avatar src="/path-to-profile-pic.jpg" alt="J" sx={{ width: 80, height: 80 }} />
        </Link>
        <div className="profile-details">
          <h2 className="professor-name">
            <Link to="/professor-profile" style={{ color: 'white', textDecoration: 'none' }}>
            {`${professorData?.firstname || ''} ${professorData?.lastname || ''}`}
            </Link>
            </h2>
          <p className="professor-id">{professorData?.userid}</p>
          {/* <Link to="/professor-profile" style={{ textDecoration: 'none' }}>
            <Button variant="contained" size="small" className="view-profile-btn">
              View Profile
            </Button>
          </Link> */}
        </div>
      </div>
      <ul className="sidebar-menu">
        {/* <li><Link to="/profile" className="sidebar-link">Profile</Link></li> */}
        <li><Link to="/manage-courses" className="sidebar-link">Manage Courses</Link></li>
        <li><Link to="/students-reviews" className="sidebar-link">Students Reviews</Link></li>
      </ul>

    {/* Sign Out Button */}
    <Link to="/login" style={{ textDecoration: 'none', marginTop: '10px' }}
    onClick={() => {
      setUser(null); 
      setProfessorData(null); 
    }}>
        <Button variant="contained" className="signout-btn">Sign Out</Button>
    </Link>
    </div>
  );
}

export default ProfessorSidebar;