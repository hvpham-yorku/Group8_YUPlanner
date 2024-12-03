import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './DropCourse.css';

const DropCourse = () => { // Changed from DropCourses to DropCourse
    // Example list of enrolled courses with unique ids
    const [courses, setCourses] = useState([
        { id: 1, name: "EECS3201" },
        { id: 2, name: "EECS2101" },
        { id: 3, name: "EECS3214" },
        { id: 4, name: "EECS4214" },
        { id: 5, name: "EECS4312" },
        { id: 6, name: "ENG4000" },
    ]);

    // Function to handle dropping a course
    const dropCourse = (courseId) => {
        setCourses(courses.filter(course => course.id !== courseId));
    };

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div className="drop-courses" style={{ flex: 1, padding: '20px' }}>
                <h1 className="title">Drop Courses</h1>
                <ul className="course-list">
                    {courses.map(course => (
                        <li key={course.id} className="course-item">
                            <span className="course-name">{course.name}</span>
                            <button
                                className="drop-button"
                                onClick={() => dropCourse(course.id)}
                            >
                                Drop
                            </button>
                        </li>
                    ))}
                </ul>
                {courses.length === 0 && (
                    <p className="no-courses">You have no courses enrolled.</p>
                )}
            </div>
        </div>
    );
};

export default DropCourse;