import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';

function DropCourses({ enrolledCourses, setEnrolledCourses }) {
    const handleDrop = (course) => {
        // Filter out the course to drop
        const updatedCourses = enrolledCourses.filter(enrolled => enrolled.id !== course.id);
        setEnrolledCourses(updatedCourses);
        alert(`Dropped ${course.coursename}`);
    };

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h2" gutterBottom sx={{ marginBottom: 5 }}>
                Drop Courses
            </Typography>

            {enrolledCourses.length > 0 ? (
                <TableContainer sx={{ marginTop: 2, width: '500px', marginX: 'auto' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Course Code</TableCell>
                                <TableCell>Course Title</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {enrolledCourses.map((course) => (
                                <TableRow key={course.id}>
                                    <TableCell>{course.coursecode}</TableCell>
                                    <TableCell>{course.coursename}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="secondary" onClick={() => handleDrop(course)}>
                                            Drop
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <Typography variant="body1" color="textSecondary" sx={{ marginTop: 2 }}>
                    No courses enrolled.
                </Typography>
            )}
        </Box>
    );
}

export default DropCourses;
