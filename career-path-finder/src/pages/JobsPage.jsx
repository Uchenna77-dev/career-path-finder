// src/pages/JobsPage.jsx
import React, { useState, useEffect } from "react";
import { fetchJobs } from "../services/adzuna";
import JobList from "../components/JobList";

const JobsPage = ({ keyword = "software engineer" }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadJobs = async () => {
      setLoading(true);
      const jobResults = await fetchJobs(keyword);
      setJobs(jobResults);
      setLoading(false);
    };

    loadJobs();
  }, [keyword]);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Job Listings for: {keyword}</h2>
      {loading ? <p>Loading jobs...</p> : <JobList jobs={jobs} />}
    </div>
  );
};

export default JobsPage;
