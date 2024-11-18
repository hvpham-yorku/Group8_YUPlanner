
package eecs3311.app.yuplanner.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import eecs3311.app.yuplanner.model.course;
import eecs3311.app.yuplanner.service.courseService;

@RestController
@RequestMapping("/course")
public class courseController {
    @Autowired
    private courseService courseService;

    @PostMapping("/add")
    public String add(@RequestBody course course) {
        courseService.saveCourse(course);
        return "New course is added";
    }

    @GetMapping("/getAll")
    public List<course> getAllCourses() {
        return courseService.getAllCourses();
    }
}
