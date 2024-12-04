import React, { useState, useEffect } from 'react';
import {
  TextField,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import AdvisorSidebar from '../components/AdvisorSidebar';

function AdvisorViewStudents() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/student/getAll')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Process the fetched data
        const processedData = data.map((student) => ({
          name: `${student.firstname} ${student.lastname}`, // Combine first and last name
          studentNumber: student.userid, // Use userid as the student number
          courses: student.courses || [], // Default to empty array if no courses
        }));
        setStudents(processedData);
        setFilteredStudents(processedData);
      })
      .catch((error) => console.error('Error fetching students:', error));
  }, []);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    setFilteredStudents(
      students.filter(
        (student) =>
          student.name.toLowerCase().includes(query.toLowerCase()) ||
          String(student.studentNumber).includes(query)
      )
    );
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AdvisorSidebar />

      <Box sx={{ flex: 1, padding: 2 }}>
        <Typography variant="h2" gutterBottom sx={{ marginBottom: 5 }}>
          Search Students
        </Typography>
        <Typography sx={{ fontSize: '18px', marginBottom: 3 }}>
          Search by Name or Student Number
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: '500px',
            margin: 'auto',
          }}
        >
          <TextField
            label="Search Student"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{ width: '500px' }}
          />
        </Box>

        {/* Display students */}
        {filteredStudents.length > 0 ? (
          <TableContainer
            sx={{ marginTop: 2, width: '500px', marginX: 'auto' }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Student Name</TableCell>
                  <TableCell>Student Number</TableCell>
                  <TableCell>Courses</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredStudents.map((student, index) => (
                  <TableRow key={index}>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.studentNumber}</TableCell>
                    <TableCell>
                      {student.courses.length > 0
                        ? student.courses.map((course, idx) => (
                            <div key={idx}>{course}</div>
                          ))
                        : 'No courses'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          searchQuery && (
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{ marginTop: 2 }}
            >
              No students found
            </Typography>
          )
        )}
      </Box>
    </Box>
  );
}

export default AdvisorViewStudents;