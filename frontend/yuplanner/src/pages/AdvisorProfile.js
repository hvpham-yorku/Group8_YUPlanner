import React from 'react';
import Sidebar from '../components/Sidebar';
import AdvisorSidebar from '../components/AdvisorSidebar';

function AdvisorProfile() {
  return (
    <div style={{ display: 'flex' }}>
      <AdvisorSidebar />
      <div style={{ marginLeft: '200xp', padding: '20xp', flexGrow: 1 }}>
        {/* Other content can go here */}
        <h1>Welcome to your Advisors' YUPlanner</h1>
        <p>Select options from the Services menu.</p>
      </div>
    </div>
  );
}

export default AdvisorProfile;