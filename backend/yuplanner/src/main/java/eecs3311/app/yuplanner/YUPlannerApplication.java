package eecs3311.app.yuplanner;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class YUPlannerApplication {

	public static void main(String[] args) {
		SpringApplication app = new SpringApplication(YUPlannerApplication.class);
		app.setDefaultProperties(java.util.Collections.singletonMap("server.port", "8080"));
		ConfigurableApplicationContext context = app.run(args);
	}


}
