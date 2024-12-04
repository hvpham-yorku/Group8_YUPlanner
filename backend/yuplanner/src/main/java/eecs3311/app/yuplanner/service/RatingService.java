package eecs3311.app.yuplanner.service;

import java.util.List;

import eecs3311.app.yuplanner.model.Rating;
import eecs3311.app.yuplanner.model.professor;

public interface RatingService {
    Rating saveRating(Rating rating);
    List<Rating> getRatingsByProfessor(professor profesor);
    double getAverageRating(professor profesor);
}
