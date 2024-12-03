import React, { useState } from 'react';
import './AddCourseModal.css';

const AddCourseModal = ({ onClose, onCourseAdded }) => {
  const [courseData, setCourseData] = useState({
    coursecode: '',
    dept: '',
    coursename: '',
    courseday: '',
    coursetime: '',
    courseduration: '',
    courselocation: '',
    coursecampus: '',
    courseprerequisites: '',
    courseinstructor: '',
    courseterm: '',
    coursesection: '',
    coursetype: '',
  });

  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/course/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(courseData),
      });
      if (response.ok) {
        const newCourse = await response.json();
        onCourseAdded(newCourse);
        setConfirmationMessage('Course added successfully!');
        setTimeout(() => setConfirmationMessage(''), 3000); // Hide message after 3 seconds
        onClose();
      } else {
        console.error('Failed to add course');
      }
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Course</h2>
        {confirmationMessage && <div className="confirmation-message">{confirmationMessage}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="coursecode"
            placeholder="Course Code"
            value={courseData.coursecode}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="dept"
            placeholder="Department"
            value={courseData.dept}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="coursename"
            placeholder="Course Name"
            value={courseData.coursename}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="courseday"
            placeholder="Course Day"
            value={courseData.courseday}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="coursetime"
            placeholder="Course Time"
            value={courseData.coursetime}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="courseduration"
            placeholder="Course Duration"
            value={courseData.courseduration}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="courselocation"
            placeholder="Course Location"
            value={courseData.courselocation}
            onChange={handleChange}
          />
          <input
            type="text"
            name="coursecampus"
            placeholder="Course Campus"
            value={courseData.coursecampus}
            onChange={handleChange}
          />
          <input
            type="text"
            name="courseprerequisites"
            placeholder="Prerequisites"
            value={courseData.courseprerequisites}
            onChange={handleChange}
          />
          <input
            type="text"
            name="courseinstructor"
            placeholder="Instructor Name"
            value={courseData.courseinstructor}
            onChange={handleChange}
          />
          <input
            type="text"
            name="courseterm"
            placeholder="Course Term"
            value={courseData.courseterm}
            onChange={handleChange}
          />
          <input
            type="text"
            name="coursesection"
            placeholder="Section"
            value={courseData.coursesection}
            onChange={handleChange}
          />
          <input
            type="text"
            name="coursetype"
            placeholder="Course Type"
            value={courseData.coursetype}
            onChange={handleChange}
          />
          <div className="modal-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Add Course</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourseModal;
