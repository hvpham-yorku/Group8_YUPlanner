import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

const AdvisorSidebar = () => {
  return (
    <div className="sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Professor Profile Section */}
      <div className="profile-section">
        <Link to="/advisor-profile" style={{ textDecoration: 'none' }}>
        <Avatar src="/path-to-profile-pic.jpg" alt="D" sx={{ width: 80, height: 80 }} />
        </Link>
        <div className="profile-details">
          <h2 className="advisor-name">
            <Link to="/advisor-profile" style={{ color: 'white', textDecoration: 'none' }}>
            Darlen J.
            </Link>
            </h2>
          <p className="advisor-id">132143154</p>
          {/* <Link to="/professor-profile" style={{ textDecoration: 'none' }}>
            <Button variant="contained" size="small" className="view-profile-btn">
              View Profile
            </Button>
          </Link> */}
        </div>
      </div>
      <ul className="sidebar-menu">
        {/* <li><Link to="/profile" className="sidebar-link">Profile</Link></li> */}
        <li><Link to="/view-students" className="sidebar-link">View Students</Link></li>
        <li><Link to="/advisor-profile/view-courses" className="sidebar-link">Search Courses</Link></li>
      </ul>

    {/* Sign Out Button */}
    <Link to="/login" style={{ textDecoration: 'none', marginTop: '10px' }}>
        <Button variant="contained" className="signout-btn">Sign Out</Button>
    </Link>
    </div>
  );
}

export default AdvisorSidebar;