
import React from 'react';
import { Box, Typography, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Sidebar from '../components/Sidebar';

function YourProgress({ enrolledCourses }) {
  // Mock progress data for demonstration
  const mockProgressData = {
    ENG3000: 70,
    EECS2101: 50,
    EECS3213: 90,
    EECS3221: 100,
    ENG4000: 10,
    PHYS1470: 35

  };


  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flex: 1, padding: 2 }}>
        <Typography variant="h2" gutterBottom>
          Your Progress
        </Typography>
        <Typography variant="body1" gutterBottom>
          Below is the progress for each of your enrolled courses:
        </Typography>

        {enrolledCourses.length > 0 ? (
          <TableContainer component={Paper} sx={{ marginTop: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Course Code</TableCell>
                  <TableCell>Course Title</TableCell>
                  <TableCell>Progress</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {enrolledCourses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell>{course.coursecode}</TableCell>
                    <TableCell>{course.coursename}</TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <LinearProgress
                          variant="determinate"
                          value={mockProgressData[course.coursecode] || 0}
                          sx={{ flex: 1 }}
                        />
                        <Typography variant="body2">
                          {mockProgressData[course.coursecode] || 0}%
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Typography variant="body1" color="textSecondary" sx={{ marginTop: 2 }}>
            You are not enrolled in any courses yet.
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default YourProgress;

