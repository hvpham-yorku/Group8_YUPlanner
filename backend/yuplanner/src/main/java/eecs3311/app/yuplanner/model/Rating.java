package eecs3311.app.yuplanner.model;

import jakarta.persistence.*;

@Entity
public class Rating {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	@JoinColumn(name = "professor_id", nullable = false)
	private professor professor;

	private double rating; // Average rating score

	@Column(length = 500)
	private String review;

	@Column(nullable = false)
	private String studentName;

	public Rating() {
	}

	public Rating(professor professor, double rating, String review, String studentName) {
		this.professor = professor;
		this.rating = rating;
		this.review = review;
		this.studentName = studentName;
	}

	// Getters and Setters
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public professor getProfessor() {
		return professor;
	}

	public void setProfessor(professor professor) {
		this.professor = professor;
	}

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
}
