# 🔍 Advanced Job Board Web Application

A fully-featured frontend job portal built with **ReactJS** and **Tailwind CSS**, designed with clean architecture, modular components, smooth animations, and a premium user experience.

---

## 🚀 Features

- **User Roles**
  - Employer: Post, edit, delete, and manage jobs
  - Job Seeker: Browse and filter jobs, view details
- **Authentication**
  - Register/Login with role-based routing
  - Protected routes for secure access
- **Job Management**
  - Create, edit, and delete job posts
  - Jobs include title, location, description, skills
- **Job Search**
  - Search by title, location, or skills
  - Clean filter UI and responsive layout
- **UI & UX**
  - Tailwind CSS styling
  - Animations via Framer Motion
  - Icons via Heroicons

---

## 📁 Project Structure

- **components/**
  - Navbar/
  - Footer/
  - JobCard/
  - UserMenu/
- **pages/**
  - Home/
  - Login/
  - Register/
  - Jobs/
  - Employer/
  - User/
- **context/**
  - AuthContext.js
- **services/**
  - jobService.js
- **hooks/**
  - useAuth.js
- **routes/**
  - AppRoutes.jsx
  - ProtectedRoute.jsx
- **styles/**
  - base.css
  - animations.css
  - buttons.css
  - gradients.css
- **App.jsx**
- **index.js**

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (>=14.x recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Shivpz/JobNest.git
   cd JobNest
