import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import Sidebar from '../components/Sidebar';

const DropCourse = ({ enrolledCourses = [], setEnrolledCourses }) => {
    const dropCourse = (courseId) => {
        // Remove the course with the specified id from the enrolledCourses
        setEnrolledCourses(enrolledCourses.filter(course => course.id !== courseId));
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <Box sx={{ flex: 1, padding: 2 }}>
                <Typography variant="h2" gutterBottom>
                    Drop Courses
                </Typography>
                {Array.isArray(enrolledCourses) && enrolledCourses.length === 0 ? (
                    <Typography>No courses enrolled.</Typography>
                ) : (
                    <TableContainer sx={{ marginTop: 2, width: '500px', marginX: 'auto' }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Course Name</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Array.isArray(enrolledCourses) && enrolledCourses.map((course) => (
                                    <TableRow key={course.id}>
                                        <TableCell>{course.name}</TableCell>
                                        <TableCell>
                                            <Button onClick={() => dropCourse(course.id)}>Drop</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Box>
        </Box>
    );
};

export default DropCourse;
