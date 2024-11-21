import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

const Sidebar = () => {
    return (
        <div className ="sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Student Profile Section */}
            <div className="profile-section">
            <Avatar src="/path-to-profile-pic.jpg" alt="Student Profile" sx={{ width: 60, height: 60 }} /> 
            <div className="profile-details">
          <h2 className="student-name">John Doe</h2>
          <p className="student-id">123456789</p>
          <Link to="/profile" style={{ textDecoration: 'none' }}>
            <Button variant="contained" size="small" className="view-profile-btn">
              View Profile
            </Button>
          </Link>
        </div>
      </div>  
            <ul className ="sidebar-menu">
                <li><Link to="/search-courses"className="sidebar-link">Search Courses</Link></li>
                <li><Link to="/drop--course"className="sidebar-link">Drop Course</Link></li>
                <li><Link to="/progress"className="sidebar-link">Your Progress</Link></li>
                <li><Link to="/view-schedule"className="sidebar-link">View Full Schedule</Link></li>
            </ul>
             {/* Sign Out Button */}
          <Link to="/signout-btn" style={{ textDecoration: 'none', marginTop: '10px' }}>
            <Button variant="contained" className="signout-btn">
              Sign Out
            </Button>
          </Link>
        </div>
    );
};

export default Sidebar;