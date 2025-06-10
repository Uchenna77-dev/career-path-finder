// src/components/BookmarkedItem.jsx
import React from "react";

const BookmarkedItem = ({ item }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg mb-4">
      <h4 className="text-lg font-bold">{item.title}</h4>
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
        View
      </a>
    </div>
  );
};

export default BookmarkedItem;
