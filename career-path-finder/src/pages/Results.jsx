// src/pages/Results.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getCareerRecommendations } from "../services/openAI";
import '../assets/styles/results.css'; // External CSS styling

const Results = () => {
  const location = useLocation();
  const quizData = location.state?.quizData || {};
  const [loading, setLoading] = useState(true);
  const [recommendations, setRecommendations] = useState(null);

  useEffect(() => {
    async function fetchRecommendations() {
      const response = await getCareerRecommendations(quizData);
      setRecommendations(response);
      setLoading(false);
    }
    fetchRecommendations();
  }, [quizData]);

  if (loading) return <p className="loading">Loading career suggestions...</p>;

  return (
    <div className="results-container">
      <h1 className="results-title">Career Recommendations</h1>
      {recommendations?.careers?.map((career, index) => (
        <div key={index} className="career-card">
          <h2 className="career-title">{career.title}</h2>
          <p className="career-description">{career.description}</p>
          <h3 className="skills-heading">Key Skills:</h3>
          <ul className="skills-list">
            {career.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Results;
