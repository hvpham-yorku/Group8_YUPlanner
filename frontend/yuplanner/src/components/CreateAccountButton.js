import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import SignupTextFields from './SignupTextField';

export default function CreateAccountButton({ accountDetails }) {
  const navigate = useNavigate();

  const handleCreateAccountClick = (e) => {
    e.preventDefault();
    const { firstname, lastname, type, userid, username, password } = accountDetails;
    console.log('Account Details:', accountDetails);
    console.log("Account Type:", type);
    let address;
    if(type === 'student'){
      address = String("http://localhost:8080/student/add");
    }
    else if(type === 'professor'){
      address = String("http://localhost:8080/professor/add");
    }
    console.log("Address selected:", address);
    fetch(address,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({ firstname, lastname, type, userid, username, password })
    }).then(() => navigate('/login'));
  };

  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={handleCreateAccountClick}>Create Account</Button>
    </Stack>
  );
}