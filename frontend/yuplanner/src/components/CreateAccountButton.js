import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import SignupTextFields from './SignupTextField';

export default function CreateAccountButton({ accountDetails }) {
  const navigate = useNavigate();

  const handleCreateAccountClick = (e) => {
    e.preventDefault();
    const endpoint = accountDetails.type === 'student' ? 'student' : 'professor';
    fetch(`http://localhost:8080/${endpoint}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(accountDetails)
    })
    .then(() => navigate('/login'));
  };

  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={handleCreateAccountClick}>Create Account</Button>
    </Stack>
  );
}