import React from "react";

const JobFilter = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow p-5 mb-6 border border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <input
        type="text"
        name="keyword"
        placeholder="Search by keyword"
        value={filters.keyword}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={filters.location}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        name="skill"
        placeholder="Skill (e.g. React)"
        value={filters.skill}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default JobFilter;
