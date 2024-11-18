package eecs3311.app.yuplanner.controller;

import eecs3311.app.yuplanner.model.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import eecs3311.app.yuplanner.service.studentService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping("/student")
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
    
    

}