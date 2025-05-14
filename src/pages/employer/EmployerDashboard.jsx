import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { mockJobs } from "../../data/JobsData";

const EmployerDashboard = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    if (user?.email) {
      const userJobs = mockJobs.filter((job) => job.postedBy === user.email);
      setJobs(userJobs);
    }
  }, [user]);

  const deleteJob = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this job?"
    );
    if (confirmed) {
      setJobs((prev) => prev.filter((job) => job.id !== id));
      alert("Job deleted (locally only).");
    }
  };

  const createJobRows = () => {
    const rows = [];
    for (let i = 0; i < jobs.length; i += 3) {
      rows.push(jobs.slice(i, i + 3));
    }
    return rows;
  };

  return (
    <div className="max-w-7xl mx-auto mt-8 px-4">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600 animate__animated animate__fadeIn">
          Your Posted Jobs
        </h1>
        <Link
          to="/employer/post-job"
          className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-teal-600 hover:to-blue-700 transition duration-300"
        >
          Post New Job
        </Link>
      </div>

      {/* No Jobs Posted Message */}
      {jobs.length === 0 ? (
        <p className="text-gray-500 text-lg animate__animated animate__fadeIn">
          You have not posted any jobs yet.
        </p>
      ) : (
        createJobRows().map((row, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6 bg-gradient-to-r from-gray-100 to-gray-300 p-6 rounded-xl shadow-lg"
          >
            {row.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl border-2 hover:border-blue-500 transform hover:scale-[1.05] transition-all duration-300 animate__animated animate__fadeIn"
              >
                <h2 className="text-xl font-semibold text-blue-700">
                  {job.title}
                </h2>
                <p className="text-sm text-gray-600">{job.location}</p>
                <p className="my-2 text-sm text-gray-700 line-clamp-3">
                  {job.description}
                </p>
                <div className="text-sm text-gray-700 mb-2">
                  <strong>Skills:</strong> {job.skills.join(", ")}
                </div>
                <div className="flex space-x-4 text-sm">
                  <Link
                    to={`/employer/edit-job/${job.id}`}
                    className="text-blue-600 hover:text-blue-800 hover:underline transition duration-300"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteJob(job.id)}
                    className="text-red-600 hover:text-red-800 hover:underline transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default EmployerDashboard;
