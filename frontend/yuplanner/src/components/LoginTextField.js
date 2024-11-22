import * as React from 'react';
import { useState } from 'react'; 

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import LoginSignUpButtons from './LoginSignUpButtons';

export default function LoginTextField() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }

  const handleChange = (event) => {
    setPassword(event.target.value);
  }

  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto'}
  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1>Login</h1>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1} }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth
      name="username"
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
      />
      <TextField
            id="outlined-password-input"
            label="Password"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            name="password"
            value={password}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
    </Box>
    <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
      <LoginSignUpButtons 
      accountDetails={{ username, password }}
      />
    </Box>
    </Paper>
    </Container>
  );
}
