import React from 'react';
import { Link } from 'react-router-dom';

function AdminNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/admin/students">Students</Link>
          <ul>
            <li><Link to="/admin/students/jss1">JSS1</Link></li>
            <li><Link to="/admin/students/jss2">JSS2</Link></li>
            <li><Link to="/admin/students/jss3">JSS3</Link></li>
            <li><Link to="/admin/students/sss1">SSS1</Link></li>
            <li><Link to="/admin/students/sss2">SSS2</Link></li>
            <li><Link to="/admin/students/sss3">SSS3</Link></li>
          </ul>
        </li>
        <li><Link to="/admin/teachers">Teachers</Link></li>
        <li><Link to="/admin/subjects">Subjects</Link></li>
      </ul>
    </nav>
  );
}

export default AdminNav;