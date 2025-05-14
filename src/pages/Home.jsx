import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Hero Section with Background Image */}
      <section className={`${styles.heroSection}`}>
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="JobNest Hero"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative z-10 bg-black bg-opacity-10 backdrop-blur-sm p-10 rounded-xl">
          <h1 className="text-5xl font-extrabold mb-6 animate__animated animate__fadeIn animate__delay-1s drop-shadow-md">
            Welcome to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-300 font-serif font-extrabold drop-shadow-lg">
              JobNest
            </span>
          </h1>
          <p className="text-xl font-semibold mb-6 animate__animated animate__fadeIn animate__delay-2s drop-shadow">
            Your gateway to a brighter career.
          </p>
          <Link to="/register">
            <button className="bg-yellow-400 text-gray-800 hover:bg-yellow-500 py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-110">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Company Description */}
      <section className={`${styles.aboutSection}`}>
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">
          About JobNest
        </h2>
        <p className="text-gray-700 text-lg slide-in-left">
          JobNest is your ultimate career platform designed to connect job
          seekers with their dream jobs. Whether you're looking for your first
          job or advancing in your career, JobNest provides personalized job
          recommendations and an easy-to-use interface. Employers benefit from
          our streamlined job posting process and advanced candidate filtering
          tools, ensuring a fast and efficient hiring experience. Our platform
          is here to help you discover the right opportunities and find the
          perfect match for your skills and aspirations. Join JobNest today to
          unlock a brighter career future.
        </p>
      </section>

      {/* Platform Imagery with Animation */}
      <section className={`${styles.exploreSection}`}>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold text-white mb-8">
            Explore Our Platform
          </h2>
          <div className="relative w-full max-w-5xl h-96 overflow-hidden rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
            <img
              src="https://images.pexels.com/photos/1181405/pexels-photo-1181405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="JobSeekers and Employers"
              className="object-cover w-full h-full opacity-90 transition-opacity duration-700 ease-in-out hover:opacity-100"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-8">
              <h3 className="text-4xl font-semibold mb-4">
                Job Seekers & Employers
              </h3>
              <p className="text-lg mb-6">
                A seamless platform for job seekers and employers to connect and
                grow together.
              </p>
              <Link
                to="/jobs"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-110"
              >
                Explore Job Listings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`${styles.featuresSection}`}>
        <div className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h3>
          <p className="text-gray-700">
            To empower individuals by connecting them with opportunities that
            align with their skills and aspirations.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">
            Why Choose Us?
          </h3>
          <p className="text-gray-700">
            We offer personalized job recommendations, real-time application
            tracking, and a user-friendly interface to enhance your job search
            experience.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`${styles.testimonialSection}`}>
        <h2 className="text-3xl font-semibold mb-4">
          What Our Users Are Saying
        </h2>
        <p className="text-lg font-light">
          "JobNest helped me land my dream job! The platform is intuitive, and I
          found a position that matched my skills perfectly. Highly recommend!"
          - John D.
        </p>
      </section>
    </div>
  );
};

export default Home;
