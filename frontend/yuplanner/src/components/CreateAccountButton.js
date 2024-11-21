import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import SignupTextFields from './SignupTextField';

export default function CreateAccountButton() {
  const navigate = useNavigate();

  const handleCreateAccountClick = () => {
    e.preventDefault()
    const student={name,address}
    console.log(student)
    fetch("http://localhost:8080/student/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)

    })
    navigate('/login');
  };

  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={handleCreateAccountClick}>Create Account</Button>
    </Stack>
  );
}