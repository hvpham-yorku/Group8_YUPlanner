import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Box, Typography, Button, Divider, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

//Hardcoded descriptions
const courses = [
    {
        id: 1,
        coursecode: 'EECS 2101',
        coursename: 'Fundamentals of Data Structures',
        dept: 'EECS',
        description: '',
        sections: [
            { coursetype: 'LECT', 
              courseday: 'M, W', 
              coursetime: '8:30', 
              courseduration: '90', 
              coursecampus: 'Keele', 
              courselocation: 'CLH G', 
              courseprerequisites: 'EECS 1090' ,
              courseinstructor: 'Dr. Jane Doe',
              courseterm: 'F',
              coursesection: 'Z',
              availability: 'Full'},

            { coursetype: 'LAB', 
              courseday: 'F', 
              coursetime: '9:00', 
              courseduration: '120', 
              coursecampus: 'Keele', 
              courselocation: 'LAS 303',
              courseinstructor: 'Dr. Jane Doe',
              courseterm: 'F',
              coursesection: 'Z',
              availability: 'Full'},
            {
              coursetype: 'LECT',
              courseday: 'Monday, Wednesday',
              courseduration: '90',
              courselocation: 'LSB 1002',
              coursetime: '7:00 PM',
              courseinstructor: 'Jenny Peel',
              courseterm: 'F',
              coursesection: 'M',
              availability: 'Seats Available',
              coursecampus: 'Keele',
              courseprerequisites: '',
          },
        ],
    },
    {
        id: 2,
        coursecode: 'EECS 3451',
        coursename: 'Signals and Systems',
        dept: 'EECS',
        description: '',
        courseinstructor: 'Dr. Jack Doe',
        courseterm: 'F',
        coursesection: 'Z',
        availability: 'Seats Availiable',
        sections: [
            { coursetype: 'LECT', courseday: 'T, R', coursetime: '17:00', courseduration: '90', coursecampus: 'Keele', courselocation: 'CLH H', courseprerequisites: 'EECS 1090' },
        ],
    },
];

function CourseDetails() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  // Find the course by id
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <Typography variant="h4">Course not found</Typography>;
  }

  return (
    <Box sx={{ display: 'flex' }}>
            <Sidebar />

    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom align="left">
        {course.coursecode} {course.coursename}
      </Typography>
      <Typography variant="h6" gutterBottom align="left"><strong>Description:</strong></Typography>
      <Typography variant="body1" gutterBottom>{course.description}</Typography>

      <Divider sx={{ marginY: 2 }} />

      {/* tables for the courses */}

      {course.sections.map((section, index) => (
          <Box key={index} sx={{ marginBottom: 4}}>
            <Typography variant="body1" gutterBottom align="left">
            <strong>Term:</strong> {section.courseterm}{"   "}
              <strong>Section:</strong> {section.coursesection}{"   "}
              <strong>Instructor:</strong> {section.courseinstructor}
            </Typography>
            <Typography variant="body1" gutterBottom align="left">
              <strong>Availability:</strong> {section.availability}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Table sx={{ width: '100%', border: '1px solid #ccc' }}>
            <TableHead>
            <TableRow>
            <TableCell><strong>Type</strong></TableCell>
            <TableCell><strong>Day</strong></TableCell>
            <TableCell><strong>Time</strong></TableCell>
            <TableCell><strong>Duration</strong></TableCell>
            <TableCell><strong>Campus</strong></TableCell>
            <TableCell><strong>Location</strong></TableCell>
            <TableCell><strong>Prerequisites</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell>{section.coursetype}</TableCell>
              <TableCell>{section.courseday}</TableCell>
              <TableCell>{section.coursetime}</TableCell>
              <TableCell>{section.courseduration}</TableCell>
              <TableCell>{section.coursecampus}</TableCell>
              <TableCell>{section.courselocation}</TableCell>
              <TableCell>{section.courseprerequisites}</TableCell>
            </TableRow>
        </TableBody>
      </Table>

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

      {/* Enroll Button */}
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
        onClick={() => console.log(`Enrolling in section ${section.section}`)}>
        Enroll
      </Button>
      </Box>
    </Box>
    ))}
    </Box>
    </Box>
  );
}

export default CourseDetails;