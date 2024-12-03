import React from 'react';
import './ManageCoursesTable.css';

const ManageCoursesTable = ({ courses, onEdit, onDelete }) => {
  if (courses.length === 0) {
    return <p>No courses available.</p>;  // Display a message when no courses are available.
  }

  return (
    <table className="courses-table">
      <thead>
        <tr>
          <th>Course Name</th>
          <th>Course Code</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => (
          <tr key={course.id}>
            <td>{course.name}</td>
            <td>{course.code}</td>
            <td>
              <button
                className="edit-btn"
                onClick={() => {
                  console.log(`Edit clicked for course: ${course.name}`);
                  onEdit(course);  // Call the onEdit callback function with the selected course
                }}
              >
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => {
                  console.log(`Delete clicked for course ID: ${course.id}`);
                  onDelete(course.id);  // Call the onDelete callback function with the selected course ID
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ManageCoursesTable;
