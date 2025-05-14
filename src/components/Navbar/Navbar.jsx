import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import UserMenu from "../UserMenu/UserMenu"; // Import the UserMenu component

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand Logo or Name */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-blue-600 tracking-tight"
        >
          JobNest
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 flex items-center">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Home
          </Link>
          <Link
            to="/jobs"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Browse Jobs
          </Link>

          {/* Conditional rendering for logged-in users */}
          {user ? (
            <>
              {/* Employer-specific link */}
              {user.role === "employer" && (
                <Link
                  to="/employer/dashboard"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Dashboard
                </Link>
              )}
              {/* User Profile Menu */}
              <UserMenu />
            </>
          ) : (
            <>
              {/* Login and Register links for unauthenticated users */}
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
