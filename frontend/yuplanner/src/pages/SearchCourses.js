import React, { useState, useEffect } from 'react';
import { TextField, Box, MenuItem, Select, InputLabel, FormControl, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

function SearchCourses({ enrolledCourses, setEnrolledCourses }) {
    const [session, setSession] = useState('');
    const [dept, setDepartment] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCourses, setFilteredCourses] = useState([]);
    
    const courses = [
        { id: 1, coursecode: 'EECS 2101', coursename: 'Fundamentals of Data Structures', dept: 'EECS' },
        { id: 2, coursecode: 'EECS 3451', coursename: 'Signals and Systems', dept: 'EECS' },
        { id: 3, coursecode: 'ENG 2003', coursename: 'Effective Engineering Communication', dept: 'ENG' },
        { id: 4, coursecode: 'ENG 3000', coursename: 'Professional Engineering Practice', dept: 'ENG' },
    ];

    const handleDepartmentChange = (event) => {
        const selectedDepartment = event.target.value;
        setDepartment(selectedDepartment);
        setSearchQuery('');
        const departmentCourses = courses.filter((course) => course.dept === selectedDepartment);
        setFilteredCourses(departmentCourses);
    };

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        const departmentCourses = courses.filter((course) => course.dept === dept);
        setFilteredCourses(
            departmentCourses.filter(
                (course) =>
                    course.coursename.toLowerCase().includes(query.toLowerCase()) ||
                    course.coursecode.toLowerCase().includes(query.toLowerCase())
            )
        );
    };

    const handleSessionChange = (event) => {
        setSession(event.target.value);
    };

    useEffect(() => {
        if (dept) {
            const departmentCourses = courses.filter((course) => course.dept === dept);
            setFilteredCourses(departmentCourses);
        }
    }, [dept]);

    const handleEnroll = (course) => {
        // Check if the course is already enrolled
        if (!enrolledCourses.some(enrolled => enrolled.id === course.id)) {
            // Enroll in the course
            setEnrolledCourses([...enrolledCourses, course]);
            alert(`Enrolled in ${course.coursename}`);
        } else {
            alert("You are already enrolled in this course.");
        }
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <Box sx={{ flex: 1, padding: 2 }}>
                <Typography variant="h2" gutterBottom sx={{ marginBottom: 5 }}>
                    Search Courses
                </Typography>
                <Typography sx={{ fontSize: '18px',  marginBottom: 3 }}>
                    Choose your Session and Department
                </Typography>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '500px', margin: 'auto' }}>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <FormControl fullWidth>
                            <InputLabel>Session</InputLabel>
                            <Select value={session} onChange={handleSessionChange} label="Session" sx={{ width: '200px' }}>
                                <MenuItem value="FW2025">FW2025</MenuItem>
                                <MenuItem value="FW2024">FW2024</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel>Department</InputLabel>
                            <Select value={dept} onChange={handleDepartmentChange} label="Department" sx={{ width: '200px' }}>
                                <MenuItem value="ENG">ENG</MenuItem>
                                <MenuItem value="EECS">EECS</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <TextField label="Search Course" variant="outlined" fullWidth value={searchQuery} onChange={handleSearchChange} sx={{ width: '500px' }} />
                </Box>

                {filteredCourses.length > 0 && (
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
                                {filteredCourses.map((course) => (
                                    <TableRow key={course.id}>
                                        <TableCell>
                                            <Link to={`/student-profile/course-details/${course.id}`}>{course.coursecode}</Link>
                                        </TableCell>
                                        <TableCell>{course.coursename}</TableCell>
                                        <TableCell>
                                            <Button variant="contained" color="primary" onClick={() => handleEnroll(course)}>
                                                Enroll
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}

                {filteredCourses.length === 0 && searchQuery && (
                    <Typography variant="body1" color="textSecondary" sx={{ marginTop: 2 }}>
                        No courses found
                    </Typography>
                )}
            </Box>
        </Box>
    );
}

export default SearchCourses;
