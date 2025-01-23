import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TeacherSubjects = () => {
  const { teacherName } = useParams(); // Get teacher name from URL
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    // Example: Fetch data from an API endpoint
    fetch(`http://localhost:5000/api/teacher-subjects/${teacherName}`)
      .then((response) => response.json())
      .then((data) => setSubjects(data))
      .catch((error) => console.error("Error fetching teacher subjects:", error));
  }, [teacherName]);

  return (
    <div>
      <h1>Subjects taught by {teacherName.replace("-", " ")}</h1>
      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index}>
              <td>{subject.class}</td>
              <td>{subject.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherSubjects;