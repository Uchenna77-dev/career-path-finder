import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- Step 1: Import useNavigate
import '../assets/styles/Quiz.css';

const questions = [
  { id: 1, question: "What type of tasks do you enjoy?", options: ["Problem-solving", "Creative work", "Helping people", "Working with data"] },
  { id: 2, question: "Which environment suits you best?", options: ["Startup", "Corporate", "Remote", "Outdoors"] },
  { id: 3, question: "What is most important to you in a job?", options: ["Salary", "Growth", "Impact", "Work-life balance"] },
];

export default function Quiz() {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate(); // <-- Step 2: Initialize navigate

  const handleSelect = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted answers:", answers);
    
    // Step 3: Navigate to Results page with answers
    navigate("/results", { state: { quizData: answers } });
  };

  return (
    <div className="quiz-container">
      <h2 className="quiz-title">Career Quiz</h2>
      <form onSubmit={handleSubmit} className="quiz-form">
        {questions.map(q => (
          <div key={q.id} className="question-block">
            <p className="question-text">{q.question}</p>
            <div className="options">
              {q.options.map(opt => (
                <label key={opt} className="option-label">
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={opt}
                    checked={answers[q.id] === opt}
                    onChange={() => handleSelect(q.id, opt)}
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button type="submit" className="submit-button">Submit Quiz</button>
      </form>
    </div>
  );
}
