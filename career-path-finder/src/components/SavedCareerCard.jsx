// src/components/SavedCareerCard.jsx
import React from "react";

const SavedCareerCard = ({ career }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg mb-4">
      <h4 className="text-lg font-bold">{career.title}</h4>
      <p className="text-gray-600">{career.description}</p>
    </div>
  );
};

export default SavedCareerCard;
