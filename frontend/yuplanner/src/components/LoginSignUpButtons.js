import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

// import Signup from '../pages/Signup';

export default function LoginSignUpButtons({ accountDetails }) {
  const navigate = useNavigate();

  const handleSignInClick = (e) => {
    e.preventDefault();
    const { username, password } = accountDetails;
    console.log('Account Details:', accountDetails);
    fetch("http://localhost:8080/student/find", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
      .then(response => response.json())  // Parse the JSON response
      .then(data => {
        if (data) {
          // If the login is successful, navigate to the student profile page
          navigate('/student-profile');
        } else {
          // Handle login failure, e.g., show an error message
          console.log('Login failed');
        }
      })
      .catch(error => {
        console.error('Error:', error);  // Handle any errors from the fetch request
      });
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={handleSignInClick}>Sign In</Button>
      <Button variant="contained" onClick={handleSignUpClick}>Sign Up</Button>
    </Stack>
  );
}