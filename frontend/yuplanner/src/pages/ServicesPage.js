import React from 'react';
import Sidebar from '../components/Sidebar';

function ServicesPage() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '200px', padding: '20px', flexGrow: 1 }}>
        {/* Other content can go here */}
        <h1>Welcome to your YUPlanner</h1>
        <p>Select options from the Services menu.</p>
      </div>
    </div>
  );
}

export default ServicesPage;
