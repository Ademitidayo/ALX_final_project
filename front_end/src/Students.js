import React from "react";
import { useParams } from "react-router-dom";

const Students = () => {
  const { classLevel } = useParams(); // Retrieve class level from URL parameter

  return (
    <div>
      <h1>Students in {classLevel.toUpperCase()}</h1>
      {/* Fetch and display students based on class level */}
      {/* Display list of students in the selected class */}
    </div>
  );
};

export default Students;