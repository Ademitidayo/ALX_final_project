import React, { useState, useEffect } from "react";

function SubjectSelection() {
  const [grade, setGrade] = useState("junior");
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [subjects, setSubjects] = useState([]);

  const juniorSubjects = [
    "Mathematics",
    "English",
    "Science",
    "Social Studies",
    "Civic Education",
    "Computer Studies",
    "Physical Education",
  ];

  const seniorSubjects = [
    "Mathematics",
    "English",
    "Biology",
    "Chemistry",
    "Physics",
    "Economics",
    "Government",
    "Literature",
    "Geography",
    "Agriculture",
  ];

  useEffect(() => {
    if (grade === "junior") {
      setSubjects(juniorSubjects);
    } else if (grade === "senior") {
      setSubjects(seniorSubjects);
    }
  }, [grade]);

  const handleGradeChange = (newGrade) => {
    setGrade(newGrade);
    setSelectedSubjects([]);
  };

  const handleSubjectChange = (subject) => {
    setSelectedSubjects((prevSubjects) => {
      if (prevSubjects.includes(subject)) {
        return prevSubjects.filter((s) => s !== subject);
      } else {
        return [...prevSubjects, subject];
      }
    });
  };

  const handleSelectAllSubjects = () => {
    const allSubjects = grade === "junior" ? juniorSubjects : seniorSubjects;
    setSelectedSubjects(allSubjects);
  };

  return (
    <div>
      <h2>Subject Selection Form</h2>

      <div>
        <label>Select your Grade Level:</label>
        <select onChange={(e) => handleGradeChange(e.target.value)}>
          <option value="junior">Junior School (JSS1 - JSS3)</option>
          <option value="senior">Senior School (SSS1 - SSS3)</option>
        </select>
      </div>

      <button onClick={handleSelectAllSubjects}>Select All Subjects</button>

      <div>
        {grade === "junior"
          ? juniorSubjects.map((subject) => (
              <div key={subject}>
                <input
                  type="checkbox"
                  id={subject}
                  value={subject}
                  onChange={() => handleSubjectChange(subject)}
                />
                <label htmlFor={subject}>{subject}</label>
              </div>
            ))
          : seniorSubjects.map((subject) => (
              <div key={subject}>
                <input
                  type="checkbox"
                  id={subject}
                  value={subject}
                  onChange={() => handleSubjectChange(subject)}
                />
                <label htmlFor={subject}>{subject}</label>
              </div>
            ))}
      </div>

      <h3>Selected Subjects:</h3>
      <ul>
        {selectedSubjects.length > 0 ? (
          selectedSubjects.map((subject, index) => <li key={index}>{subject}</li>)
        ) : (
          <p>No subjects selected</p>
        )}
      </ul>
    </div>
  );
}

export default SubjectSelection;