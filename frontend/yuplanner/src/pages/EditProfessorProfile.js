import React, { useState, useEffect } from 'react';
import { TextField, Button, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditProfessorProfile() {
  const [professorData, setProfessorData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    courses: ''
  });
  const navigate = useNavigate();
  
  // Assume you have professor id or session data to fetch the current professor info
  useEffect(() => {
    // Replace this URL with the correct one to fetch the professor's current data
    axios.get('/professor/getAll') 
      .then(response => {
        // Assuming you have the professor data in the first index of the response
        const professor = response.data[0]; 
        setProfessorData({
          firstname: professor.firstname,
          lastname: professor.lastname,
          username: professor.username,
          password: professor.password,
          courses: professor.courses
        });
      })
      .catch(err => {
        console.log('Error fetching professor data', err);
      });
  }, []);

  const handleChange = (e) => {
    setProfessorData({
      ...professorData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send updated data to the backend
    axios.put('/professor/update', professorData) 
      .then(response => {
        console.log('Profile updated successfully', response);
        navigate('/professor-profile'); // Redirect to the profile page after successful update
      })
      .catch(err => {
        console.log('Error updating profile', err);
      });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <Avatar src="/path-to-profile-pic.jpg" alt="Profile Picture" sx={{ width: 80, height: 80, marginBottom: '20px' }} />
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
        <TextField
          label="First Name"
          name="firstname"
          value={professorData.firstname}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Last Name"
          name="lastname"
          value={professorData.lastname}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Username"
          name="username"
          value={professorData.username}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={professorData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Courses"
          name="courses"
          value={professorData.courses}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" fullWidth style={{ marginTop: '20px' }}>
          Update Profile
        </Button>
      </form>
    </div>
  );
}

export default EditProfessorProfile;