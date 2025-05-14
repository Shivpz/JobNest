// src/pages/user/Account.jsx
import React from "react";
import { useAuth } from "../../context/AuthContext";
import { mockJobs } from "../../data/JobsData";

const Account = () => {
  const { user } = useAuth();

  if (!user) return <p className="p-8">Please log in to view your account.</p>;

  const jobsPosted = mockJobs.filter(
    (job) => job.postedBy === user.email
  ).length;
  const formattedDate = user.registeredAt
    ? new Date(user.registeredAt).toLocaleDateString()
    : "Unknown";

  const status = "Active"; // Mocked status for now
  const accountType =
    user.role === "employer" ? "Employer Account" : "Job Seeker Account";

  // Helper to capitalize first letter
  const capitalize = (str) => str && str[0].toUpperCase() + str.slice(1);

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-gradient-card rounded-xl shadow-lg animate-fade-in">
      <h2 className="text-2xl font-bold mb-4 text-gradient">
        Account Information
      </h2>
      <div className="space-y-4 text-gray-800">
        <div>
          <strong>Email:</strong> {user.email}
        </div>
        <div>
          <strong>Role:</strong> {capitalize(user.role)}
        </div>
        <div>
          <strong>Account Type:</strong> {accountType}
        </div>
        <div>
          <strong>Status:</strong>{" "}
          <span className="text-green-600 font-semibold">{status}</span>
        </div>
        <div>
          <strong>Jobs Posted:</strong> {jobsPosted}
        </div>
        <div>
          <strong>Registered On:</strong> {formattedDate}
        </div>
      </div>
    </div>
  );
};

export default Account;
