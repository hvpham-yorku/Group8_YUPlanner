import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

const ProfessorSidebar = () => {
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
            Dr. Jane Smith
            </Link>
            </h2>
          <p className="professor-id">987654321</p>
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
    <Link to="/login" style={{ textDecoration: 'none', marginTop: '10px' }}>
        <Button variant="contained" className="signout-btn">Sign Out</Button>
    </Link>
    </div>
  );
}

export default ProfessorSidebar;