// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import JobDetails from "../pages/jobs/JobDetails";
import PostJob from "../pages/employer/PostJob";
import EditJob from "../pages/employer/EditJob";
import EmployerDashboard from "../pages/employer/EmployerDashboard";
import JobList from "../pages/jobs/JobList";
import Account from "../pages/user/Account";
import ChangePassword from "../pages/user/ChangePassword";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/employer/post-job" element={<PostJob />} />
      <Route path="/employer/edit-job/:id" element={<EditJob />} />
      <Route path="/employer/dashboard" element={<EmployerDashboard />} />
      <Route path="/account" element={<Account />} /> {/* Account Page */}
      <Route path="/change-password" element={<ChangePassword />} />{" "}
      {/* Change Password Page */}
    </Routes>
  );
};

export default AppRoutes;
