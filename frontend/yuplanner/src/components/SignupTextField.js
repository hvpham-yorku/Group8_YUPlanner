import React from 'react';
import { Box, TextField, MenuItem, Container, Paper } from '@mui/material';

import CreateAccountButton from './CreateAccountButton';

// const dayOfTheMonth = Array.from({ length: 31 }, (_, i) => ({
//   value: i + 1,
//   label: (i + 1).toString(),
// }));

// const months = [
//   { value: '01', label: 'January' },
//   { value: '02', label: 'February' },
//   { value: '03', label: 'March' },
//   { value: '04', label: 'April' },
//   { value: '05', label: 'May' },
//   { value: '06', label: 'June' },
//   { value: '07', label: 'July' },
//   { value: '08', label: 'August' },
//   { value: '09', label: 'September' },
//   { value: '10', label: 'October' },
//   { value: '11', label: 'November' },
//   { value: '12', label: 'December' },
// ];

// const currentYear = new Date().getFullYear();
// const years = Array.from({ length: 100 }, (_, i) => ({
//   value: currentYear - i,
//   label: (currentYear - i).toString(),
// }));

const accountTypes = [
  { value: 'student', label: 'Student' },
  { value: 'professor', label: 'Professor' },
  { value: 'advisor', label: 'Advisor' },
];

export default function SignupTextFields() {
  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '50px 20px', margin: '20px auto' }}>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > :not(style)': { m: 1, width: '75%' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="standard-basic" label="First Name" variant="standard" />
          <TextField id="standard-basic" label="Last Name" variant="standard" />
          {/* <TextField
            id="standard-select-day"
            select
            label="Day"
            defaultValue=""
            helperText="Please select your day of birth"
            variant="standard"
          >
            {dayOfTheMonth.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="standard-select-month"
            select
            label="Month"
            defaultValue=""
            helperText="Please select your month of birth"
            variant="standard"
          >
            {months.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="standard-select-year"
            select
            label="Year"
            defaultValue=""
            helperText="Please select your year of birth"
            variant="standard"
          >
            {years.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField> */}
          <TextField
            id="standard-select-account-type"
            select
            label="Account Type"
            defaultValue=""
            helperText="Please select your account type"
            variant="standard"
          >
            {accountTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField id="standard-basic" label="Email" variant="standard" />
          <TextField id="standard-basic" label="Password" variant="standard" />
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" mt={2} marginTop={5}>
          <CreateAccountButton />
        </Box>
      </Paper>
    </Container>
  );
}