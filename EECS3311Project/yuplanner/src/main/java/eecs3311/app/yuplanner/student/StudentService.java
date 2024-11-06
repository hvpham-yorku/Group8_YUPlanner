package eecs3311.app.yuplanner.student;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Service
public class StudentService {

    public List<Student> getStudents() {
        return List.of(
                new Student(
                        1L,
                        "Salwan",
                        "salwan99@my.yorku.ca",
                        LocalDate.of(1999, Month.AUGUST, 5),
                        25
                )
        );
    }
}
