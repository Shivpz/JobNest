// src/pages/user/ChangePassword.jsx
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const ChangePassword = () => {
  const { user, changePassword } = useAuth();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!oldPassword || !newPassword || !confirmPassword) {
      setMessage("Please fill out all fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setMessage("New passwords don't match.");
      return;
    }
    const result = changePassword(oldPassword, newPassword);
    setMessage(result);
    if (result.includes("success")) {
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }
  };

  if (!user)
    return <p className="p-8">Please log in to change your password.</p>;

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-gradient-card rounded-xl shadow-lg animate-fade-in">
      <h2 className="text-2xl font-bold mb-4 text-gradient">Change Password</h2>
      {message && <p className="mb-4 text-sm text-red-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          placeholder="Old Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
