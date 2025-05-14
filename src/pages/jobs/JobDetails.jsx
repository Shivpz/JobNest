// src/pages/jobs/JobDetails.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import { mockJobs } from "../../data/JobsData";

const JobDetails = () => {
  const { id } = useParams();
  const job = mockJobs.find((job) => job.id.toString() === id);

  if (!job) {
    return (
      <div className="max-w-3xl mx-auto mt-10 text-center">
        <p className="text-xl text-red-600">Job not found.</p>
        <Link to="/jobs" className="text-blue-600 hover:underline block mt-4">
          ← Back to Jobs
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 animate__animated animate__fadeIn">
      {/* Job details card */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-300 p-6 rounded-2xl shadow-lg">
        {/* Job Title */}
        <h1 className="text-3xl font-extrabold text-blue-700">{job.title}</h1>
        <p className="text-xl text-gray-500 mt-1">{job.location}</p>

        {/* Job Description */}
        <p className="mt-4 text-lg text-gray-700">{job.description}</p>

        {/* Skills */}
        <div className="mt-4 text-sm">
          <strong className="text-lg">Skills Required:</strong>{" "}
          <div className="mt-2 flex flex-wrap gap-2">
            {job.skills.map((s, i) => (
              <span
                key={i}
                className="inline-block bg-blue-200 text-blue-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-300 transition duration-300"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Back to job listings link */}
        <Link
          to="/jobs"
          className="inline-block mt-6 text-blue-600 hover:underline text-lg font-medium"
        >
          ← Back to Job Listings
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
