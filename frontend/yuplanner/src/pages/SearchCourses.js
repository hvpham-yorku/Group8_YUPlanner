import React, { useState, useEffect } from 'react';
import { TextField, Box, MenuItem, Select, InputLabel, FormControl, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Sidebar from '../components/Sidebar';

function SearchCourses() {
    //Searching the courses
    const [session, setSession] = useState('');
    const [department, setDepartment] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCourses, setFilteredCourses] = useState([]);
    
    
    const courses = [
        { course_code: 'EECS 2101', course_title: 'Fundamentals of Data Structures', department: 'EECS' },
        { course_code: 'EECS 3451', course_title: 'Signals and Systems', department: 'EECS' },
        { course_code: 'ENG 2003', course_title: 'Effective Engineering Communication', department: 'ENG' },
        { course_code: 'ENG 3000', course_title: 'Professional Engineering Practice', department: 'ENG' },
    ];

    //filter the courses by department
    const handleDepartmentChange = (event) => {
        const selectedDepartment = event.target.value;
        setDepartment(selectedDepartment);
    

    const departmentCourses = courses.filter((course) => course.department === selectedDepartment);
    setFilteredCourses(departmentCourses);
    setSearchQuery('');
};

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

    const departmentCourses = courses.filter((course) => course.department === department); 
        setFilteredCourses(
          departmentCourses.filter(
            (course) =>
              course.course_title.toLowerCase().includes(query.toLowerCase()) ||
              course.course_code.toLowerCase().includes(query.toLowerCase())
          )
        );
      };
    
    //Changing session and deparemnet
    const handleSessionChange = (event) => {
        setSession(event.target.value);
    };

    useEffect(() => {
        if (department) {
            const departmentCourses = courses.filter((course) => course.department === department);
            setFilteredCourses(departmentCourses);
        }
    }, [department]);

    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar />

        <Box sx={{ flex: 1, padding: 2 }}>
            <Typography variant="h2" gutterBottom sx={{ marginBottom: 5 }}>
                Search Courses
            </Typography>
            <Typography sx={{ fontSize: '18px' }} sx={{ marginBottom: 3 }}>
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
                        <Select value={department} onChange={handleDepartmentChange} label="Session" sx={{ width: '200px' }}>
                            <MenuItem value="ENG">ENG</MenuItem>
                            <MenuItem value="EECS">EECS</MenuItem>
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
                     </TableRow>
                 </TableHead>
             <TableBody>
            {filteredCourses.map((course, index) => (
                <TableRow key={index}>
                    <TableCell>{course.course_code}</TableCell>
                    <TableCell>{course.course_title}</TableCell>
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
    );
}
   
export default SearchCourses;