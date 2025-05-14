// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import JobDetails from "./pages/jobs/JobDetails";
import JobList from "./pages/jobs/JobList";
import PostJob from "./pages/employer/PostJob";
import EditJob from "./pages/employer/EditJob";
import EmployerDashboard from "./pages/employer/EmployerDashboard";
import Account from "./pages/user/Account"; // ✅ Added
import ChangePassword from "./pages/user/ChangePassword"; // ✅ Added
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/jobs/:id" element={<JobDetails />} />

          {/* Protected Routes */}
          <Route
            path="/employer/post-job"
            element={
              <ProtectedRoute allowedRoles={["employer"]}>
                <PostJob />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employer/edit-job/:id"
            element={
              <ProtectedRoute allowedRoles={["employer"]}>
                <EditJob />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employer/dashboard"
            element={
              <ProtectedRoute allowedRoles={["employer"]}>
                <EmployerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account"
            element={
              <ProtectedRoute allowedRoles={["employer", "jobseeker"]}>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route
            path="/change-password"
            element={
              <ProtectedRoute allowedRoles={["employer", "jobseeker"]}>
                <ChangePassword />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
