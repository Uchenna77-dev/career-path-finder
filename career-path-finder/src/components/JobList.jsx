// src/components/JobList.jsx
import React from "react";

const JobList = ({ jobs }) => {
  if (!jobs.length) return <p>No jobs found.</p>;

  return (
    <div className="space-y-4 mt-6">
      {jobs.map((job) => (
        <div key={job.id} className="border p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">{job.title}</h3>
          <p className="text-gray-700">{job.company.display_name}</p>
          <p>{job.location.display_name}</p>
          <p>Salary: {job.salary_min ? `£${job.salary_min.toLocaleString()}` : "N/A"}</p>
          <a
            href={job.redirect_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline mt-2 inline-block"
          >
            View Job
          </a>
        </div>
      ))}
    </div>
  );
};

export default JobList;
