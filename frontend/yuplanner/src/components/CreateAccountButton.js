import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function CreateAccountButton() {
  const navigate = useNavigate();

  const handleCreateAccountClick = () => {
    navigate('/signup');
  };

  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={handleCreateAccountClick}>Create Account</Button>
    </Stack>
  );
}