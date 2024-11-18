import React from 'react';

import SignupTextField from '../components/SignupTextField';
import CreateAccountButton from '../components/CreateAccountButton';

function Signup() {
  return (
    <div style={{
        backgroundColor: '#E31837', 
        height: '120vh', 
        display: 'flow-root', 
        justifyContent: 'center', 
        alignItems: 'center'
    }}>
      <h1 style={{
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        padding: '',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
        fontSize: '75px'
      }}>YUPlanner</h1>
      <p style={{
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        padding: '',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
        fontSize: '15px'
      }}>Welcome to the signup page. Please sign up to continue.</p>
      <SignupTextField />
    </div>
  );
}

export default Signup;