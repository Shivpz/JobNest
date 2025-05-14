// src/pages/jobs/JobList.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mockJobs } from "../../data/JobsData";
import styles from "./JobList.module.css";

const JobList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [skillFilter, setSkillFilter] = useState("");

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter
      ? job.location.toLowerCase().includes(locationFilter.toLowerCase())
      : true;
    const matchesSkills = skillFilter
      ? job.skills.some((skill) =>
          skill.toLowerCase().includes(skillFilter.toLowerCase())
        )
      : true;

    return matchesSearch && matchesLocation && matchesSkills;
  });

  const groupJobsInRows = (jobs) => {
    const rows = [];
    for (let i = 0; i < jobs.length; i += 3) {
      rows.push(jobs.slice(i, i + 3));
    }
    return rows;
  };

  const groupedJobs = groupJobsInRows(filteredJobs);

  return (
    <div className={styles.container}>
      <h1 className={`${styles.heading} animate__animated animate__fadeIn`}>
        Find Your Dream Job
      </h1>

      {/* Filters */}
      <div className={`${styles.filters} animate__animated animate__fadeIn`}>
        <input
          type="text"
          placeholder="Search by title or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Filter by location..."
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Filter by skills..."
          value={skillFilter}
          onChange={(e) => setSkillFilter(e.target.value)}
          className={styles.input}
        />
      </div>

      {/* Job Cards Grid */}
      {filteredJobs.length === 0 ? (
        <p className={`${styles.noResults} animate__animated animate__fadeIn`}>
          No jobs found.
        </p>
      ) : (
        <div>
          {groupedJobs.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`${styles.rowContainer} animate__animated animate__fadeIn`}
            >
              <div className={styles.cardGrid}>
                {row.map((job) => (
                  <div
                    key={job.id}
                    className={`${styles.jobCard} animate__animated animate__fadeIn`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="text-xl font-semibold text-gray-800">
                        {job.title}
                      </h2>
                      <span className="text-sm text-gray-500">
                        {job.location}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2 line-clamp-2">
                      {job.description}
                    </p>
                    <div className="text-sm text-gray-600 mb-3">
                      <strong>Skills:</strong> {job.skills.join(", ")}
                    </div>
                    <Link
                      to={`/jobs/${job.id}`}
                      className="inline-block text-blue-600 hover:underline text-sm font-medium"
                    >
                      View Details →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;
