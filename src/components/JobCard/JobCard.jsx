// src/components/JobCard/JobCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { MapPinIcon } from "@heroicons/react/24/outline";
import styles from "./JobCard.module.css";

const JobCard = ({ job }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{job.title}</h3>

      <div className={styles.location}>
        <MapPinIcon className="h-4 w-4 mr-1" />
        {job.location}
      </div>

      <p className={styles.description}>{job.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.skills.map((skill, index) => (
          <span key={index} className={styles.skillTag}>
            {skill}
          </span>
        ))}
      </div>

      <Link to={`/jobs/${job.id}`} className={styles.detailsLink}>
        View Details →
      </Link>
    </div>
  );
};

export default JobCard;
