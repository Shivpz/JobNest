import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("jobboard_user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [usersDB, setUsersDB] = useState(() => {
    const savedUsers = localStorage.getItem("jobboard_users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  useEffect(() => {
    localStorage.setItem("jobboard_users", JSON.stringify(usersDB));
  }, [usersDB]);

  const login = (email, password) => {
    const storedUsers =
      JSON.parse(localStorage.getItem("jobboard_users")) || [];
    const foundUser = storedUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (foundUser) {
      localStorage.setItem("jobboard_user", JSON.stringify(foundUser));
      setUser(foundUser);
      navigate(foundUser.role === "employer" ? "/employer/dashboard" : "/jobs");
    } else {
      alert("Invalid email or password");
    }
  };

  const register = (email, password, confirmPassword, role) => {
    const storedUsers =
      JSON.parse(localStorage.getItem("jobboard_users")) || [];
    const userExists = storedUsers.some((u) => u.email === email);
    if (userExists) {
      alert("User already exists");
      return;
    }
    const newUser = {
      email,
      password,
      role,
      registeredAt: new Date().toISOString(),
    };
    const updatedUsers = [...storedUsers, newUser];
    localStorage.setItem("jobboard_users", JSON.stringify(updatedUsers));
    setUsersDB(updatedUsers);
    login(email, password);
  };

  const logout = () => {
    localStorage.removeItem("jobboard_user");
    setUser(null);
    navigate("/");
  };

  const changePassword = (oldPassword, newPassword) => {
    if (!user || user.password !== oldPassword) {
      return "Old password is incorrect.";
    }
    const updatedUser = { ...user, password: newPassword };
    const updatedUsers = usersDB.map((u) =>
      u.email === user.email ? updatedUser : u
    );
    setUsersDB(updatedUsers);
    localStorage.setItem("jobboard_user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    return "Password updated successfully!";
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, changePassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
