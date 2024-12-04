package eecs3311.app.yuplanner.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import eecs3311.app.yuplanner.model.Rating;
import eecs3311.app.yuplanner.model.professor;
import eecs3311.app.yuplanner.service.RatingService;
import eecs3311.app.yuplanner.service.professorService;

@RestController
@RequestMapping("/rating")
@CrossOrigin 
public class RatingController {

	@Autowired
	private RatingService ratingService;

	@Autowired
	private professorService professorService;

	@GetMapping("/professor-reviews/{professorId}")
	public List<Rating> getProfessorReviews(@PathVariable int professorId) {
	    professor profesor = professorService.findProfessorById(professorId)
	            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Professor not found!"));

	    List<Rating> ratings = ratingService.getRatingsByProfessor(profesor);
	    if (ratings.isEmpty()) {
	        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No reviews found for this professor.");
	    }
	    return ratings;
	}


	@PostMapping("/add")
	public String addRating(@RequestBody Rating rating) {
		ratingService.saveRating(rating);
		return "New rating is added";
	}

	@GetMapping("/average/{professorId}")
	public double getAverageRating(@PathVariable int professorId) {
		professor profesor = findProfessor(professorId);
		return ratingService.getAverageRating(profesor);
	}

	private professor findProfessor(int professorId) {
		return professorService.findProfessorById(professorId)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Professor not found!"));
	}

}
