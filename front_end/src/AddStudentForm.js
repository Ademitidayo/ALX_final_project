import React, { useState } from 'react';

function AddStudentForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [classSelected, setClassSelected] = useState('jss1');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would typically make an API request to save the student
    console.log('Student added:', { name, age, classSelected });

    // For now, we just simulate adding the student
    alert(`Student ${name} added to ${classSelected.toUpperCase()}`);

    // Reset form after submission
    setName('');
    setAge('');
    setClassSelected('jss1');
  };

  return (
    <div>
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <br />
        <label>Class:</label>
        <select
          onChange={(e) => setClassSelected(e.target.value)}
          value={classSelected}
        >
          <option value="jss1">JSS1</option>
          <option value="jss2">JSS2</option>
          <option value="jss3">JSS3</option>
          <option value="sss1">SSS1</option>
          <option value="sss2">SSS2</option>
          <option value="sss3">SSS3</option>
        </select>
        <br />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudentForm;