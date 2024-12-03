import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfessorSidebar from "../components/ProfessorSidebar";
import "./StudentsReviews.css"; // Optional for additional styling
const StudentsReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(""); // State for error message
    const professorId = 1; // Replace with dynamic ID based on logged-in professor
  
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/rating/professor-reviews/${professorId}`);
                console.log("Reviews data:", response.data); 
                setReviews(response.data);
            } catch (error) {
                console.error("Error fetching reviews:", error);
                if (error.response) {
                    setError(`Error: ${error.response.data.message || "Something went wrong on the server."}`);
                } else if (error.request) {
                    setError("Cannot connect to the server. Check your connection.");
                } else {
                    setError("An unexpected error occurred.");
                }
            }
        };
        
          
  
      fetchReviews(); // Fetch reviews when component mounts
    }, [professorId]);
  
    return (
      <div style={{ display: "flex" }}>
        <ProfessorSidebar />
        <div style={{ marginLeft: "200px", padding: "20px", flexGrow: 1 }}>
          <h1>Students Reviews</h1>
  
          {/* Display error message if there is one */}
          {error ? (
            <p style={{ color: "red" }}>{error}</p>
          ) : reviews.length === 0 ? (
            <p>No reviews available.</p> // If no reviews are available
          ) : (
            <table className="reviews-table">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Rating</th>
                  <th>Review</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <tr key={review.id}>
                    <td>{review.studentName}</td>
                    <td>{review.rating.toFixed(1)}</td>
                    <td>{review.review}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
  };
  
  export default StudentsReviews;
  

 