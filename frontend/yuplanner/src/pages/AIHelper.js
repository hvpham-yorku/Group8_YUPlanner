import React, { useState } from 'react';
import './AIHelper.css';

const AIHelper = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('Ask away!'); // Set default response here
  const [loading, setLoading] = useState(false);

  // Hardcoded questions and answers
  const qaMapping = {
    "What courses are offered this semester?": "This semester, we offer courses such as ENG3000 [Professional Engineering Practice], EECS2101 [Fundamentals of Data Structures], EECS3213 [Communication Networks], EECS3221 [Operating System Fundamentals], ENG4000 [Engineering Project], PHYS1470 [Highlights of Astronomy]",
    "Who teaches ENG3000?": "ENG3000 is taught by Professor James Smith.",
    "Who teaches EECS3311?": "EECS3311 is taught by Professor Hung Viet Pham.",
    "What is the schedule for PHYS1470?": "PHYS1470 is scheduled for Mondays and Wednesdays from 8:00 PM to 9:00 PM and tutorials are scheduled for Fridays from 6:00 PM to 7:00 PM.",
    "How do I contact Professor Hung Viet Pham?": "You can contact Professor Pham via email at jhvpham@yorku.ca or visit during office hours.",
    "What classes are available for the Computer Science major?": "For a Computer Science major, available classes include Software Engineering, Web Development, and Machine Learning.",
    "What is the final exam schedule?": "The final exam schedule will be posted on the university website by the end of the semester."
  };

  const handleAsk = () => {
    if (!question.trim()) {
      setResponse('Please enter a question.');
      return;
    }

    setLoading(true); // Start loading
    setResponse(''); // Clear previous response

    // Check if the question is in the mapping
    const answer = qaMapping[question] || "Sorry, I don't have an answer for that question.";
    setResponse(answer);
    
    setLoading(false); // Stop loading
  };

  return (
    <div className="ai-helper">
      <h1>AI Helper</h1>
      <div className="ai-helper-input">
        <input
          type="text"
          placeholder="Ask me anything about courses, classes, schedules, or professors..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button onClick={handleAsk} disabled={loading}>
          {loading ? 'Loading...' : 'Ask'}
        </button>
      </div>
      <div className="ai-helper-response">
        {response && <p>{response}</p>}
      </div>
      <div className="ai-helper-questions">
        <h3>Common Questions:</h3>
        <ul>
          {Object.keys(qaMapping).map((q, index) => (
            <li key={index}>{q}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AIHelper;
