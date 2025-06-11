// src/components/SavedCareerCard.jsx
import React from 'react';
import '../assets/styles/savedCareerCard.css';

const SavedCareerCard = ({ career }) => {
  return (
    <div className="career-card">
      <h4 className="career-title">{career.title}</h4>
      <p className="career-description">{career.description}</p>

      <div className="career-skills">
        <strong>Skills:</strong>
        <ul>
          {career.skills?.map((skill, index) => (
            <li key={index} className="career-skill">{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SavedCareerCard;
