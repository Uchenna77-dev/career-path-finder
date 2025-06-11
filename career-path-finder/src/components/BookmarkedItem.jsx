// src/components/BookmarkedItem.jsx
import React from 'react';
import '../assets/styles/bookmarkedItem.css';

const BookmarkedItem = ({ item }) => {
  return (
    <div className="bookmark-card">
      <h4 className="bookmark-title">{item.title}</h4>
      <p className="bookmark-description">{item.description}</p>
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bookmark-link"
        >
          View More →
        </a>
      )}
    </div>
  );
};

export default BookmarkedItem;

