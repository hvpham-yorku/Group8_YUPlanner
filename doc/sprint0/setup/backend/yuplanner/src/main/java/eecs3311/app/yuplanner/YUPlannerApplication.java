package eecs3311.app.yuplanner;

import java.time.LocalDate;
import java.time.Month;
import java.util.*;

import eecs3311.app.yuplanner.student.*;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class YUPlannerApplication {

	public static void main(String[] args) {
		SpringApplication app = new SpringApplication(YUPlannerApplication.class);
		app.setDefaultProperties(java.util.Collections.singletonMap("server.port", "8081"));
		ConfigurableApplicationContext context = app.run(args);
	}

//	@GetMapping
//	public List<Student> hello() {
//		return List.of(
//				new Student(
//						1L,
//						"Salwan",
//						"salwan99@my.yorku.ca",
//						LocalDate.of(1999, Month.AUGUST, 5),
//						25
//				)
//		);
//	}
}
