package eecs3311.app.yuplanner.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eecs3311.app.yuplanner.model.course;
import eecs3311.app.yuplanner.repository.courseRepository;

@Service
public class courseServiceImpl implements courseService{

    @Autowired
    private courseRepository courseRepository;
    
    @Override
    public course saveCourse(course course){
        return courseRepository.save(course);
    }

    @Override
    public List<course> getAllCourses(){
        return courseRepository.findAll();
    }
    @Override
    public boolean existsById(Integer id) {
        return courseRepository.existsById(id); // Check if the course exists by its ID
    }

    @Override
    public void deleteCourse(Integer id) {
        courseRepository.deleteById(id); // Delete the course by ID
    }
     
}
