// src/components/JobList.jsx
import React from "react";
import '../assets/styles/joblist.css';

const JobList = ({ jobs }) => {
  if (!jobs.length) return <p className="no-jobs">No jobs found.</p>;

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <div key={job.id} className="job-card">
          <h3 className="job-title">{job.title}</h3>
          <p className="job-company">{job.company.display_name}</p>
          <p className="job-location">{job.location.display_name}</p>
          <p className="job-salary">
            Salary: {job.salary_min ? `£${job.salary_min.toLocaleString()}` : "N/A"}
          </p>
          <a
            href={job.redirect_url}
            target="_blank"
            rel="noopener noreferrer"
            className="job-link"
          >
            View Job
          </a>
        </div>
      ))}
    </div>
  );
};

export default JobList;
