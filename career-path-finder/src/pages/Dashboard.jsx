// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import SavedCareerCard from "../components/SavedCareerCard";
import BookmarkedItem from "../components/BookmarkedItem";
import '../assets/styles/dashboard.css'; // External CSS

const Dashboard = () => {
  const [savedCareers, setSavedCareers] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const careers = JSON.parse(localStorage.getItem("savedCareers")) || [];
    const marked = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setSavedCareers(careers);
    setBookmarks(marked);
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Your Dashboard</h2>

      <section className="dashboard-section">
        <h3 className="section-heading">Saved Careers</h3>
        {savedCareers.length === 0 ? (
          <p className="empty-message">No saved careers yet.</p>
        ) : (
          savedCareers.map((career, index) => (
            <SavedCareerCard key={index} career={career} />
          ))
        )}
      </section>

      <section className="dashboard-section">
        <h3 className="section-heading">Bookmarked Jobs & Courses</h3>
        {bookmarks.length === 0 ? (
          <p className="empty-message">No bookmarks yet.</p>
        ) : (
          bookmarks.map((item, index) => (
            <BookmarkedItem key={index} item={item} />
          ))
        )}
      </section>
    </div>
  );
};

export default Dashboard;
