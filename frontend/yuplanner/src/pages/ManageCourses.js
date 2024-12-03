import React, { useState, useEffect } from 'react';
import ProfessorSidebar from '../components/ProfessorSidebar';
import ManageCoursesTable from '../components/ManageCoursesTable';
import AddCourseModal from '../components/AddCourseModal';
import EditCourseModal from '../components/EditCourseModal';
import './ManageCourses.css';

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Fetch courses from backend
  useEffect(() => {
    fetch('http://localhost:8080/course/getAll')
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error('Error fetching courses:', error));
  }, []);

  // Add a new course
  const addCourse = (newCourse) => {
    fetch('http://localhost:8080/course/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCourse),
    })
      .then((response) => response.json())
      .then((data) => {
        setCourses((prevCourses) => [...prevCourses, data]);
        setShowAddModal(false); // Close the modal after adding the course
      })
      .catch((error) => console.error('Error adding course:', error));
  };

  // Update an existing course
  const updateCourse = (updatedCourse) => {
    fetch(`http://localhost:8080/course/update/${updatedCourse.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedCourse),
    })
      .then((response) => response.json())
      .then(() => {
        setCourses((prevCourses) =>
          prevCourses.map((course) =>
            course.id === updatedCourse.id ? updatedCourse : course
          )
        );
        setShowEditModal(false); // Close the modal after updating the course
      })
      .catch((error) => console.error('Error updating course:', error));
  };

  // Delete a course
  const deleteCourse = (courseId) => {
    fetch(`http://localhost:8080/course/delete/${courseId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setCourses((prevCourses) =>
            prevCourses.filter((course) => course.id !== courseId)
          );
        } else {
          console.error('Failed to delete course');
        }
      })
      .catch((error) => console.error('Error deleting course:', error));
  };

  return (
    <div className="manage-courses-container">
      <ProfessorSidebar />
      <div className="content">
        <h1>Manage Courses</h1>
        <button className="add-course-btn" onClick={() => setShowAddModal(true)}>
          Add New Course
        </button>
        <ManageCoursesTable
          courses={courses}
          onEdit={(course) => {
            console.log(`Editing course: ${course.name}`);
            setSelectedCourse(course);
            setShowEditModal(true);
          }}
          onDelete={(id) => {
            console.log(`Attempting to delete course with ID: ${id}`);
            deleteCourse(id);
          }}
        />
        {showAddModal && (
          <AddCourseModal
            onClose={() => setShowAddModal(false)}
            onCourseAdded={addCourse}
          />
        )}
        {showEditModal && selectedCourse && (
          <EditCourseModal
            course={selectedCourse}
            onClose={() => {
              console.log('Closing edit modal');
              setShowEditModal(false);
            }}
            onCourseUpdated={(updatedCourse) => {
              console.log('Course updated:', updatedCourse);
              updateCourse(updatedCourse);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ManageCourses;
