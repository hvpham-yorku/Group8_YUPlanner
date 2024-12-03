
package eecs3311.app.yuplanner.service;

import java.util.List;

import eecs3311.app.yuplanner.model.course;

public interface courseService {
    public course saveCourse(course course);
    public List<course> getAllCourses();
    public boolean existsById(Integer id); // Check if a course exists by its ID
    public void deleteCourse(Integer id);
    
}
