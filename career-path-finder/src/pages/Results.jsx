// src/pages/Results.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getCareerRecommendations } from "../services/openAI";

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

  if (loading) return <p className="text-center">Loading career suggestions...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Career Recommendations</h1>
      {recommendations?.careers?.map((career, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h2 className="text-xl font-semibold">{career.title}</h2>
          <p className="text-gray-700">{career.description}</p>
          <h3 className="mt-2 font-medium">Key Skills:</h3>
          <ul className="list-disc list-inside text-sm text-gray-600">
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
