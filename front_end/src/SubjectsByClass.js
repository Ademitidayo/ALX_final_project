import React from "react";
import { useParams } from "react-router-dom";

const SubjectsByClass = () => {
  const { classLevel } = useParams(); // Retrieve class level from URL

  return (
    <div>
      <h1>Subjects for {classLevel.toUpperCase()}</h1>
      {/* List all subjects for this class */}
      {/* Example: display subjects for JSS1 */}
    </div>
  );
};

export default SubjectsByClass;