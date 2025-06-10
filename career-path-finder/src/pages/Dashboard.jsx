// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import SavedCareerCard from "../components/SavedCareerCard";
import BookmarkedItem from "../components/BookmarkedItem";

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
    <div className="max-w-4xl mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">Your Dashboard</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Saved Careers</h3>
        {savedCareers.length === 0 ? (
          <p className="text-gray-500">No saved careers yet.</p>
        ) : (
          savedCareers.map((career, index) => (
            <SavedCareerCard key={index} career={career} />
          ))
        )}
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Bookmarked Jobs & Courses</h3>
        {bookmarks.length === 0 ? (
          <p className="text-gray-500">No bookmarks yet.</p>
        ) : (
          bookmarks.map((item, index) => (
            <BookmarkedItem key={index} item={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
