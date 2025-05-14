import React from "react";
import { useParams } from "react-router-dom";

const EditJob = () => {
  const { id } = useParams();

  return (
    <div className="max-w-xl mx-auto mt-10 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 p-8 rounded-xl shadow-xl animate__animated animate__fadeIn">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-700">
        Edit Job #{id}
      </h2>
      <p className="text-gray-600 text-lg text-center">
        This is just a placeholder. Edit functionality can be wired later with
        real data store.
      </p>
      <div className="mt-6">
        <button className="w-full bg-teal-500 text-white px-6 py-3 rounded-xl hover:bg-teal-600 transform transition-transform duration-300">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditJob;
