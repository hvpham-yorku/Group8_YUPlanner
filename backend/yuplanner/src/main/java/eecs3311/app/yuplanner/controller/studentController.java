package eecs3311.app.yuplanner.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import eecs3311.app.yuplanner.model.student;
import eecs3311.app.yuplanner.service.studentService;



@RestController
@RequestMapping("/student")
@CrossOrigin
public class studentController {
    @Autowired
    private studentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody student student) {
        studentService.saveStudent(student);
        return "New student is added";
    }

    @GetMapping("/getAll")
    public List<student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @PostMapping("/find")
    public student findStudent(@RequestBody student student) {
        student foundStudent = studentService.findStudent(student);
        if (foundStudent != null) {
            return foundStudent;
        } else {
            // Return a custom error or response indicating the student was not found
            return null;  // Or you can throw an exception or return an error message
        }
    }
    
    

}