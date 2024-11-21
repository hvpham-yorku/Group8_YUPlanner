import React from 'react';
import Sidebar from '../components/Sidebar';

function StudentProfile() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '200xp', padding: '', flexGrow: 1 }}>
        {/* Other content can go here */}
        <h1>Welcome to your Students' YUPlanner</h1>
        <p>Select options from the Services menu.</p>
      </div>
    </div>
  );
}

export default StudentProfile;