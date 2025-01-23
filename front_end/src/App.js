import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import './App.css';
import Signup from "./Signup";
import Login from "./Login";
import AdminDashboard from "./AdminDashboard";
import Students from "./Students";
import TeacherSubjects from "./Teacher";
import SubjectsByClass from "./SubjectsByClass";
import Adminlogin from "./Adminlogin";

function App() {
  return (
    <Router>
      <div className="landing-page">
        {/* Header with Navigation Links */}
        <header>
          <nav>
            <ul className="nav-left">
              <li><Link to="/" className="nav-button">Home</Link></li>
              <li><Link to="Admin" className="nav-button">Admin</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/students/:classLevel" element={<Students />} />
          <Route path="/teacher/:teacherName" element={<TeacherSubjects />} />
          <Route path="/subjects/:classLevel" element={<SubjectsByClass />} />
          <Route path="/Admin" element={<Adminlogin/>} />
        </Routes>

        {/* Footer */}
        <footer>
          <p>&copy; 2025 Student Portal. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;