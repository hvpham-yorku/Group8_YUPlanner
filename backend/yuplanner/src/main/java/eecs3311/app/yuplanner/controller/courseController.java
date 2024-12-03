package eecs3311.app.yuplanner.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import eecs3311.app.yuplanner.model.course;
import eecs3311.app.yuplanner.service.courseService;
import eecs3311.app.yuplanner.repository.courseRepository;

import java.util.Map;




@RestController
@RequestMapping("/course")
@CrossOrigin(origins = "http://localhost:3000")
public class courseController {
    @Autowired
    private courseService courseService;
    private courseRepository courseRepository;

    @PostMapping("/add")
    public String add(@RequestBody course course) {
        courseService.saveCourse(course);
        return "New course is added";
    }

    @GetMapping("/getAll")
    public List<course> getAllCourses() {
        return courseService.getAllCourses();
    }

    // @PostMapping("/find")
    // public course findCourse(@RequestBody course course) {
    //     course foundCourse = courseService.findCourse(course);
    //     if (foundCourse != null) {
    //         return foundCourse;
    //     } else {
    //         // Return a custom error or response indicating the student was not found
    //         return null;  // Or you can throw an exception or return an error message
    //     }
        
    // }
    // @PostMapping("/find")
    // public ResponseEntity<course> findCourse(@RequestBody Map<String, Object> request) {
    //     // Parse the course code from the request
    //     int courseCode = (Integer) request.get("coursecode");
    //     System.out.println("Received courseCode: " + courseCode); // Debug log
    //     course course = courseRepository.findByCourseCode(courseCode);
    //     if (course == null) {
    //         System.out.println("Course not found in database"); // Debug log
    //         return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    //     }
    //     return ResponseEntity.ok(course);
    // }

    @GetMapping("/get/{courseCode}")
    public course getCourseByCode(@PathVariable int courseCode) {
        return courseService.findCourseByCourseCode(courseCode); // Call the service method
    }
   

}