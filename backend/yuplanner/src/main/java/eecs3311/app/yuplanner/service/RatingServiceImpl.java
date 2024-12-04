package eecs3311.app.yuplanner.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eecs3311.app.yuplanner.model.Rating;
import eecs3311.app.yuplanner.model.professor;
import eecs3311.app.yuplanner.repository.RatingRepository;

@Service
public class RatingServiceImpl implements RatingService {

	@Autowired
	private RatingRepository ratingRepository;

	@Override
	public Rating saveRating(Rating rating) {
		return ratingRepository.save(rating);
	}

	@Override
	public List<Rating> getRatingsByProfessor(professor profesor) {
		return ratingRepository.findByProfessor(profesor);
	}

	@Override
	public double getAverageRating(professor professor) {
		List<Rating> ratings = ratingRepository.findByProfessor(professor);
		return ratings.stream().mapToDouble(Rating::getRating).average().orElse(0.0);
	}
}
