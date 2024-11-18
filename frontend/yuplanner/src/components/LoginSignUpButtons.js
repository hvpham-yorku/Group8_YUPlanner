import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

// import Signup from '../pages/Signup';

export default function LoginSignUpButtons() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">Sign In</Button>
      <Button variant="contained" onClick={handleSignUpClick}>Sign Up</Button>
    </Stack>
  );
}