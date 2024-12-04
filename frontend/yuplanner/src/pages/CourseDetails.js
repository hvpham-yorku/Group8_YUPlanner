import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Box, Typography, Button, Divider, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

function CourseDetails() {
  const { coursecode } = useParams();  // Get the courseCode from the URL parameter
  const [course, setCourse] = useState(null);  // Course data from API
  const navigate = useNavigate();
  console.log("Course Code:", coursecode);

  // Fetch the course data when the component is mounted
  useEffect(() => {
    fetch(`http://localhost:8080/course/get/${coursecode}`)
      .then((response) => response.json())  // Parse the JSON response
      .then((data) => {
        console.log(data);
        setCourse(data);  // Set the course data to state
      })
      .catch((error) => {
        console.error('Error fetching course:', error);
      });
  }, [coursecode]);  // Dependency array ensures the effect runs when courseCode changes

  // Show loading message if course data is still being fetched
  if (!course) {
    return <Typography variant="h4">Course not found</Typography>;
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />  {/* Sidebar component */}

      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom align="left">
          {course.coursecode} {course.coursename}
        </Typography>

        {/* Display course description or a message if it's null */}
        <Typography variant="h6" gutterBottom align="left"><strong>Description:</strong></Typography>
        <Typography variant="body1" gutterBottom>
          {course.coursedescription ? course.coursedescription : 'No description available.'}
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        {/* Course Details Table with Fields in X-axis (horizontal) */}
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Table sx={{ width: '100%', border: '1px solid #ccc' }}>
      {/* <Table sx={{ minWidth: 650 }} aria-label="course details table"> */}
        <TableHead>
            <TableRow>
              {/* Define each field as a column header */}
              <TableCell><strong>Course Name</strong></TableCell>
              <TableCell><strong>Course Code</strong></TableCell>
              <TableCell><strong>Instructor</strong></TableCell>
              <TableCell><strong>Term</strong></TableCell>
              <TableCell><strong>Day</strong></TableCell>
              <TableCell><strong>Time</strong></TableCell>
              <TableCell><strong>Duration</strong></TableCell>
              <TableCell><strong>Location</strong></TableCell>
              <TableCell><strong>Campus</strong></TableCell>
              <TableCell><strong>Prerequisites</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {/* Corresponding details for each field */}
              <TableCell>{course.coursename}</TableCell>
              <TableCell>{course.coursecode}</TableCell>
              <TableCell>{course.courseinstructor}</TableCell>
              <TableCell>{course.courseterm}</TableCell>
              <TableCell>{course.courseday}</TableCell>
              <TableCell>{course.coursetime}</TableCell>
              <TableCell>{course.courseduration} minutes</TableCell>
              <TableCell>{course.courselocation}</TableCell>
              <TableCell>{course.coursecampus}</TableCell>
              <TableCell>{course.courseprerequisites}</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Divider sx={{ marginY: 2 }} />

        {/* Back button */}
        <Button
          variant="contained"
          color="error"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
          }}
          onClick={() => window.history.back()}
        >
          Back
        </Button>

        {/* Enroll button */}
        <Button
          variant="contained"
          color="error"
          sx={{
            alignSelf: 'center',
            padding: '10px 20px',
            minWidth: '120px',
            height: '50px',
            fontSize: '16px',
          }}
          onClick={() => console.log(`Enrolling in course ${course.coursecode}`)}
        >
          Enroll
          </Button>
    </Box>
  </Box>
  </Box>
);
}

export default CourseDetails;
