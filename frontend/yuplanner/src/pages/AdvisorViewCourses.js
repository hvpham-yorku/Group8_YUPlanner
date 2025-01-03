import React, { useState, useEffect } from 'react';
import { TextField, Box, MenuItem, Select, InputLabel, FormControl, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import AdvisorSidebar from '../components/AdvisorSidebar';
import { Link } from 'react-router-dom';

function AdvisorViewCourses() {
    const [session, setSession] = useState('');
    const [department, setDepartment] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [courses, setCourses] = useState([]); // Store all courses fetched from the backend

    // const courses = [
    //     { course_code: 'EECS 2101', course_title: 'Fundamentals of Data Structures', department: 'EECS' },
    //     { course_code: 'EECS 3451', course_title: 'Signals and Systems', department: 'EECS' },
    //     { course_code: 'ENG 2003', course_title: 'Effective Engineering Communication', department: 'ENG' },
    //     { course_code: 'ENG 3000', course_title: 'Professional Engineering Practice', department: 'ENG' },
    // ];

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

    const handleDepartmentChange = (event) => {
        const selectedDepartment = event.target.value;
        console.log("Selected Department:", selectedDepartment); 
        setDepartment(selectedDepartment);
      
        // Filter courses by dept field
        const departmentCourses = courses.filter(
          (course) => course.dept && course.dept.toLowerCase() === selectedDepartment.toLowerCase()
        );
        console.log("Filtered Courses by Department:", departmentCourses); 
        setFilteredCourses(departmentCourses);
        setSearchQuery(""); 
      };
      

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

    const departmentCourses = courses.filter((course) => course.dept === department);
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
        if (department) {
            const departmentCourses = courses.filter((course) => course.dept === department);
            console.log("Filtered Courses:", departmentCourses); 
            setFilteredCourses(departmentCourses);
        }
    }, [department]);

    return (
        <Box sx={{ display: 'flex' }}>
            <AdvisorSidebar />

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
                        <Select value={department} onChange={handleDepartmentChange} label="Session" sx={{ width: '200px' }}>
                            <MenuItem value="ENG">ENG</MenuItem>
                            <MenuItem value="EECS">EECS</MenuItem>
                            <MenuItem value="PHIL">PHIL</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* Physical Search Bar
                <TextField label="Search Course" variant="outlined" fullWidth value={searchQuery} onChange={handleSearchChange} sx={{ width: '500px' }}/>

                {/* Search Button 
                <Button variant="contained" color="error" sx={{ width: '100px', marginTop: 2 }} onClick={handleSearch}>
                    Search
                </Button>*/}
            {/* </Box>  */}

            {/* Filtering courses
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
            {filteredCourses.map((course) => (
                <TableRow key={course.id}>
                    <TableCell>
                        <Link to={`/student-profile/course-details/${course.id}`}>{course.coursecode}</Link>
                    </TableCell>
                    <TableCell>{course.coursename}</TableCell>
                </TableRow>
                ))}
            </TableBody>
         </Table>
        </TableContainer>
        )} */}

        {/* If no courses are found
        {filteredCourses.length === 0 && searchQuery && (
             <Typography variant="body1" color="textSecondary" sx={{ marginTop: 2 }}>
                 No courses found
            </Typography>
            )}
        </Box>
    </Box>
    ); */}

        <TextField
            label="Search Course"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{ width: "500px" }}
          />
        </Box>

        {/* Display courses */}
        {filteredCourses.length > 0 ? (
          <TableContainer sx={{ marginTop: 2, width: "500px", marginX: "auto" }}>
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
                    <TableCell>{String(course.coursecode)}</TableCell>
                    <TableCell>{course.coursename}</TableCell>
                    <TableCell>{course.courseinstructor}</TableCell>
                    <TableCell>{course.courseterm}</TableCell>
                </TableRow>
                ))}
                </TableBody>
            </Table>
          </TableContainer>
        ) : (
          searchQuery && (
            <Typography variant="body1" color="textSecondary" sx={{ marginTop: 2 }}>
              No courses found
            </Typography>
          )
        )}
      </Box>
    </Box>
  );
    

}
   
export default AdvisorViewCourses;