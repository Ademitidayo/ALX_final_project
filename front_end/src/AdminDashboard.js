import React, { useState } from "react";
import { Link } from "react-router-dom";
import './AdminDashboard.css'; // Custom styles for the Admin Dashboard

const AdminDashboard = () => {
  const [classesOpen, setClassesOpen] = useState(false);
  const [subjectsOpen, setSubjectsOpen] = useState(false);
  const [teachersOpen, setTeachersOpen] = useState(false);

  const toggleDropdown = (section) => {
    if (section === "classes") setClassesOpen(!classesOpen);
    if (section === "subjects") setSubjectsOpen(!subjectsOpen);
    if (section === "teachers") setTeachersOpen(!teachersOpen);
  };

  return (
    <div className="admin-dashboard">
      {/* Navbar */}
      <header className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <button onClick={() => toggleDropdown("classes")}>
              Classes <span>{classesOpen ? "▲" : "▼"}</span>
            </button>
            {classesOpen && (
              <ul className="dropdown-list">
                {["JSS1", "JSS2", "JSS3", "SSS1", "SSS2", "SSS3"].map((classLevel) => (
                  <li key={classLevel}>
                    <Link to={`/students/${classLevel.toLowerCase()}`}>{classLevel}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="navbar-item">
            <button onClick={() => toggleDropdown("teachers")}>
              Teachers <span>{teachersOpen ? "▲" : "▼"}</span>
            </button>
            {teachersOpen && (
              <ul className="dropdown-list">
                {["Mr Adeniji", "Mrs Smith", "Mr John"].map((teacher) => (
                  <li key={teacher}>
                    <Link to={`/teacher/${teacher.toLowerCase().replace(" ", "-")}`}>{teacher}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="navbar-item">
            <button onClick={() => toggleDropdown("subjects")}>
              Subjects <span>{subjectsOpen ? "▲" : "▼"}</span>
            </button>
            {subjectsOpen && (
              <ul className="dropdown-list">
                {["JSS1", "JSS2", "JSS3", "SSS1", "SSS2", "SSS3"].map((classLevel) => (
                  <li key={classLevel}>
                    <Link to={`/subjects/${classLevel.toLowerCase()}`}>{classLevel}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </header>

      {/* Main Content */}
      <div className="content">
        {/* Depending on the route, display either the students list, teachers list, or subjects list */}
      </div>
    </div>
  );
};

export default AdminDashboard;