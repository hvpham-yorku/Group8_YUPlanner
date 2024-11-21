import React from 'react';
import Sidebar from '../components/Sidebar';
import ProfessorSidebar from '../components/ProfessorSidebar';

function ProfessorProfile() {
  return (
    <div style={{ display: 'flex' }}>
      <ProfessorSidebar />
      <div style={{ marginLeft: '200xp', padding: '20xp', flexGrow: 1 }}>
        {/* Other content can go here */}
        <h1>Welcome to your Professors' YUPlanner</h1>
        <p>Select options from the Services menu.</p>
      </div>
    </div>
  );
}

export default ProfessorProfile;