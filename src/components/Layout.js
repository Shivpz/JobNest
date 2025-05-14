import React from "react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            JobBoard
          </Link>
          <nav className="space-x-4">
            <Link to="/jobs" className="hover:text-blue-500">
              Browse Jobs
            </Link>
            <Link to="/employer/dashboard" className="hover:text-blue-500">
              Employer
            </Link>
            <Link to="/login" className="hover:text-blue-500">
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow p-4 animate-fadeIn">{children}</main>
      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-500">
        © 2025 JobBoard Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
