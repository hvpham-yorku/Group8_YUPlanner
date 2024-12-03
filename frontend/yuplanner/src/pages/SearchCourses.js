import React, { useState, useEffect } from 'react';
import { TextField, Box, MenuItem, Select, InputLabel, FormControl, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link } from '@mui/material';
import Sidebar from '../components/Sidebar';
import { Link as RouterLink } from 'react-router-dom';

function SearchCourses() {
    //Searching the courses
    const [session, setSession] = useState('');
    const [dept, setDepartment] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [courses, setCourses] = useState([]); 

    useEffect(() => {
        fetch("http://localhost:8080/course/getAll")
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            console.log("Fetched courses:", data); // Add this log
            setCourses(data);
            setFilteredCourses(data);
          })
          .catch((error) => console.error("Error fetching courses:", error));
      }, []);

    //filter the courses by department
    const handleDepartmentChange = (event) => {
        const selectedDepartment = event.target.value;
        setDepartment(selectedDepartment);
    

    const departmentCourses = courses.filter((course) => course.dept === selectedDepartment);
    setFilteredCourses(departmentCourses);
    setSearchQuery('');
};

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        const departmentCourses = courses.filter((course) => course.dept === dept);
        console.log("Department Courses:", departmentCourses); 
            setFilteredCourses(
              departmentCourses.filter(
                (course) => {
                    const courseCode = course.coursecode ? String(course.coursecode).toLowerCase() : ""; 
                    const courseName = course.coursename ? course.coursename.toLowerCase() : "";
                    return (
                        courseCode.includes(query.toLowerCase()) || 
                        courseName.includes(query.toLowerCase())
                    );
                }
                // course.coursename.toLowerCase().includes(query.toLowerCase()) ||
                // String(course.coursecode).toLowerCase().includes(query.toLowerCase())
              )
            );
            console.log("Filtered Courses after Search:", departmentCourses); 
          };
    
    //Changing session and deparemnet
    const handleSessionChange = (event) => {
        setSession(event.target.value);
    };

    useEffect(() => {
        if (dept) {
            const departmentCourses = courses.filter((course) => course.dept === dept);
            setFilteredCourses(departmentCourses);
        }
    }, [dept]);

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
                <Box sx={{ display: 'flex', gap: 2}}>
                    <FormControl fullWidth>
                        <InputLabel>Session</InputLabel>
                        <Select value={session} onChange={handleSessionChange} label="Session" sx={{ width: '200px' }}>
                            <MenuItem value="FW2025">FW2025</MenuItem>
                            <MenuItem value="FW2024">FW2024</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Department</InputLabel>
                        <Select value={dept} onChange={handleDepartmentChange} label="Session" sx={{ width: '200px' }}>
                            <MenuItem value="ENG">ENG</MenuItem>
                            <MenuItem value="EECS">EECS</MenuItem>
                            <MenuItem value="PHIL">PHIL</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* Physical Search Bar */}
                <TextField label="Search Course" variant="outlined" fullWidth value={searchQuery} onChange={handleSearchChange} sx={{ width: '500px' }}/>

                {/* Search Button 
                <Button variant="contained" color="error" sx={{ width: '100px', marginTop: 2 }} onClick={handleSearch}>
                    Search
                </Button>*/}
            </Box>

            {/* Filtering courses */}
            {filteredCourses.length > 0 && (
                <TableContainer sx={{ marginTop: 2, width: '500px', marginX: 'auto' }}>
                 <Table>
                     <TableHead>
                        <TableRow>
                         <TableCell>Course Code</TableCell>
                         <TableCell>Course Title</TableCell>
                         <TableCell>Instructor</TableCell>
                         <TableCell>Term</TableCell>
                     </TableRow>
                 </TableHead>
             <TableBody>
            {filteredCourses.map((course, index) => (
                <TableRow key={index}>
                    <TableCell>
                        <Link component={RouterLink} to={`/student-profile/course-details/${course.coursecode}`}>{course.coursecode}</Link>
                    </TableCell>
                    <TableCell>{course.coursename}</TableCell>
                    <TableCell>{course.courseinstructor}</TableCell>
                    <TableCell>{course.courseterm}</TableCell>
                </TableRow>
                ))}
            </TableBody>
         </Table>
        </TableContainer>
        )}

        {/* If no courses are found*/}
        {filteredCourses.length === 0 && searchQuery && (
             <Typography variant="body1" color="textSecondary" sx={{ marginTop: 2 }}>
                 No courses found
            </Typography>
            )}
        </Box>
    </Box>
    ); }

export default SearchCourses;