import React from 'react';

import LoginTextField from '../components/LoginTextField';

function Login() {
  return (
    <>
    <div style={{ 
        backgroundColor: '#E31837', 
        height: '100vh', 
        display: 'flow-root', 
        justifyContent: 'center', 
        alignItems: 'center' 
    }}>
      <h1 style={{
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
        fontSize: '75px'
        }}>YUPlanner</h1>
      <div style={{marginTop: '100px'}}>
        <LoginTextField />
      </div>
    </div>
    </>
  );
}

export default Login;