import React, { useState, useEffect } from 'react';
import { TextField, Box, MenuItem, Select, InputLabel, FormControl, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Link } from '@mui/material';
import Sidebar from '../components/Sidebar';
import { Link as RouterLink } from 'react-router-dom';

function SearchCourses({ enrolledCourses, setEnrolledCourses }) {
    const [session, setSession] = useState('');
    const [dept, setDepartment] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [courses, setCourses] = useState([]);

    // Hardcoded sample courses
    const sampleCourses = [
        { id: 1, coursecode: 'ENG3000', coursename: 'Professional Engineering Practice', dept: 'ENG' },
        { id: 2, coursecode: 'EECS2101', coursename: 'Fundamentals of Data Structures', dept: 'EECS' },
        { id: 3, coursecode: 'EECS3213', coursename: 'Communication Networks', dept: 'EECS' },
        { id: 4, coursecode: 'EECS3221', coursename: 'Operating System Fundamentals', dept: 'EECS' },
        { id: 5, coursecode: 'ENG4000', coursename: 'Engineering Project', dept: 'ENG' },
        { id: 6, coursecode: 'PHYS1470', coursename: 'Highlights of Astronomy', dept: 'PHYS' },
    ];

    useEffect(() => {
        // Set hardcoded courses instead of fetching from the API
        setCourses(sampleCourses);
        setFilteredCourses(sampleCourses); // Show all courses initially
    }, []);

    // Update filtered courses based on department and search query
    useEffect(() => {
        let filtered = courses;

        // Filter by department if selected
        if (dept) {
            filtered = filtered.filter((course) => course.dept === dept);
        }

        // Filter by search query
        if (searchQuery) {
            filtered = filtered.filter((course) => {
                const courseCode = course.coursecode ? String(course.coursecode).toLowerCase() : ""; 
                const courseName = course.coursename ? course.coursename.toLowerCase() : "";
                return (
                    courseCode.includes(searchQuery.toLowerCase()) || 
                    courseName.includes(searchQuery.toLowerCase())
                );
            });
        }

        setFilteredCourses(filtered);
    }, [dept, searchQuery, courses]);

    const handleEnroll = (course) => {
        if (!enrolledCourses.some(enrolled => enrolled.id === course.id)) {
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
                <Typography sx={{ fontSize: '18px', marginBottom: 3 }}>
                    Choose your Session and Department
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '500px', margin: 'auto' }}>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <FormControl fullWidth>
                            <InputLabel>Session</InputLabel>
                            <Select value={session} onChange={(e) => setSession(e.target.value)} label="Session" sx={{ width: '200px' }}>
                                <MenuItem value="FW2025">FW2025</MenuItem>
                                <MenuItem value="FW2024">FW2024</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel>Department</InputLabel>
                            <Select value={dept} onChange={(e) => setDepartment(e.target.value)} label="Department" sx={{ width: '200px' }}>
                                <MenuItem value="ENG">ENG</MenuItem>
                                <MenuItem value="EECS">EECS</MenuItem>
                                <MenuItem value="PHIL">PHIL</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <TextField label="Search Course" variant="outlined" fullWidth value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} sx={{ width: '500px' }} />
                    
                    {filteredCourses.length > 0 ? (
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
                                                <Link component={RouterLink} to={`/student-profile/course-details/${course.id}`}>{course.coursecode}</Link>
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
                    ) : (
                        <Typography variant="body1" color="textSecondary" sx={{ marginTop: 2 }}>
                            No courses found
                        </Typography>
                    )}
                </Box>
            </Box>
        </Box>
    );
}

export default SearchCourses;