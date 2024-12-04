import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext'; 


// import Signup from '../pages/Signup';

export default function LoginSignUpButtons({ accountDetails }) {
  const navigate = useNavigate();
  const { setUser } = useUser(); 


  const handleSignInClick = (e) => {
    e.preventDefault();
    const { username, password } = accountDetails;
    console.log('Account Details:', accountDetails);
    console.log("Account Type:", username);
    let address;
    if(username.includes('@my.yorku.ca')){
      address = String("http://localhost:8080/student/find");
    }
    else if(username.includes('@yorku.ca')){
      address = String("http://localhost:8080/professor/find");
    }
    console.log("Address selected:", address);
    fetch(address,{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })

    })
    // fetch("http://localhost:8080/student/find", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ username, password })

    // })
      .then(response => response.json())  // Parse the JSON response
      .then(data => {
        console.log('Parsed Data:', data);

        if (data) {
          setUser(data)
          // If the login is successful, navigate to the student profile page
          //navigate('/student-profile');
          if(username.includes('@my.yorku.ca')){
            navigate('/student-profile');
          }
          else if(username.includes('@yorku.ca')){
            navigate('/professor-profile');
          }
        } else {
          // Handle login failure, e.g., show an error message
          console.log('Login failed');
        }
      })

      // .then(response => response.json())
      // .then(data => {
      //   console.log('Parsed Data from Student API:', data);

      //   if (data) {
      //     // If the login is successful for student, navigate to the student profile page
      //     navigate('/student-profile');
      //   } else {
      //     // If no student data is found, attempt professor login
      //     console.log('No student found, checking professor endpoint...');
      //     return fetch("http://localhost:8080/professor/find", {
      //       method: "POST",
      //       headers: { "Content-Type": "application/json" },
      //       body: JSON.stringify({ username, password })
      //     })
      //       .then(response => response.json())
      //       .then(professorData => {
      //         console.log('Parsed Data from Professor API:', professorData);

      //         if (professorData) {
      //           // If the login is successful for professor, navigate to the professor profile page
      //           navigate('/professor-profile');
      //         } else {
      //           console.log('Login failed for both student and professor.');
      //         }
      //       });
      //   }
      // })

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