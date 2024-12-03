import React from 'react';
import './ManageCoursesTable.css';

const ManageCoursesTable = ({ courses }) => {
  return (
    <div className="courses-table-container">
      <table className="courses-table">
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Department</th>
            <th>Day</th>
            <th>Time</th>
            <th>Duration</th>
            <th>Instructor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.coursecode}</td>
              <td>{course.coursename}</td>
              <td>{course.dept}</td>
              <td>{course.courseday}</td>
              <td>{course.coursetime}</td>
              <td>{course.courseduration}</td>
              <td>{course.courseinstructor}</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCoursesTable;
