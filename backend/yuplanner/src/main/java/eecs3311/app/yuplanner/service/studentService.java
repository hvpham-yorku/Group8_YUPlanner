package eecs3311.app.yuplanner.service;

import eecs3311.app.yuplanner.model.*;
import java.util.List;

public interface studentService {
    public student saveStudent(student student);
    public List<student> getAllStudents();
    public student findStudent(student student);

}