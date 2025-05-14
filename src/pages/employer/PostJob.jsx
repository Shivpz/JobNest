import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const PostJob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    location: "",
    description: "",
    skills: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      id: Date.now(),
      ...form,
      skills: form.skills.split(",").map((skill) => skill.trim()),
      postedBy: user?.email,
    };
    console.log("Job posted:", newJob); // In real app, send to backend
    alert("Job posted successfully!");
    navigate("/employer/dashboard");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 p-8 rounded-xl shadow-xl animate__animated animate__fadeIn">
      <h1 className="text-3xl font-semibold mb-6 text-center text-gray-700">
        Post a New Job
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
          value={form.location}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Job Description"
          className="w-full border border-gray-300 p-4 rounded-xl h-36 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
          value={form.description}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="text"
          name="skills"
          placeholder="Required Skills (comma separated)"
          className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
          value={form.skills}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full bg-teal-500 text-white px-6 py-3 rounded-xl hover:bg-teal-600 transform transition-transform duration-300"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJob;
