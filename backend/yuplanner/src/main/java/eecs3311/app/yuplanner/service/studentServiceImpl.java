package eecs3311.app.yuplanner.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eecs3311.app.yuplanner.model.*;
import eecs3311.app.yuplanner.repository.studentRepository;

import java.util.List;


@Service
public class studentServiceImpl implements studentService {

    @Autowired
    private studentRepository studentRepository;
    
    @Override
    public student saveStudent(student student){
        return studentRepository.save(student);
    }

    @Override
    public List<student> getAllStudents(){
        return studentRepository.findAll();
    }

    public student findStudent(student student){
        return studentRepository.findByUsernameAndPassword(student.getUsername(), student.getPassword());
    }

}