import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [classSelected, setClassSelected] = useState('jss1');

  const handleClassChange = (e) => {
    setClassSelected(e.target.value);
  };

  // Simulate fetching students based on class selection
  useEffect(() => {
    const fetchStudents = () => {
      // For now, we use dummy data. Replace with API call if needed.
      const dummyData = {
        jss1: [{ name: 'John Doe', age: 13 }, { name: 'Jane Smith', age: 14 }],
        jss2: [{ name: 'Alice Johnson', age: 15 }],
        jss3: [{ name: 'Bob Brown', age: 16 }],
        sss1: [{ name: 'Charlie White', age: 17 }],
        sss2: [{ name: 'David Green', age: 18 }],
        sss3: [{ name: 'Emma Blue', age: 19 }],
      };
      setStudents(dummyData[classSelected] || []);
    };

    fetchStudents();
  }, [classSelected]);

  return (
    <div>
      <h2>Students in Class: {classSelected.toUpperCase()}</h2>
      <select onChange={handleClassChange} value={classSelected}>
        <option value="jss1">JSS1</option>
        <option value="jss2">JSS2</option>
        <option value="jss3">JSS3</option>
        <option value="sss1">SSS1</option>
        <option value="sss2">SSS2</option>
        <option value="sss3">SSS3</option>
      </select>

      <div>
        <h3>Student List</h3>
        <ul>
          {students.length > 0 ? (
            students.map((student, index) => (
              <li key={index}>{student.name}, Age: {student.age}</li>
            ))
          ) : (
            <p>No students found for this class.</p>
          )}
        </ul>
      </div>
      
      <Link to="/admin/add-student">
        <button>Add New Student</button>
      </Link>
    </div>
  );
}

export default StudentList;