import React, { useState } from 'react';
import './EditCourseModal.css'; // Optional for custom styles

const EditCourseModal = ({ course, onClose, onCourseUpdated }) => {
  const [name, setName] = useState(course.name);
  const [code, setCode] = useState(course.code);

  const handleUpdate = () => {
    // Assuming the backend accepts PUT requests to update a course
    fetch(`http://localhost:8080/course/update/${course.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, code }),
    })
      .then((response) => {
        if (response.ok) {
          onCourseUpdated({ ...course, name, code }); // Update in parent state
          onClose(); // Close the modal
        } else {
          console.error('Failed to update course');
        }
      })
      .catch((error) => console.error('Error updating course:', error));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Course</h2>
        <label>
          Course Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Course Code:
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </label>
        <div className="modal-actions">
          <button onClick={handleUpdate}>Update</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditCourseModal;
