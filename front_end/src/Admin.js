import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import StudentList from './StudentList';
import AddStudentForm from './AddStudentForm';

function AdminPage() {
  return (
    <Router>
      <div className="admin-container">
        <nav>
          <ul>
            <li><Link to="/admin/students">Students</Link></li>
            <li><Link to="/admin/teachers">Teachers</Link></li>
            <li><Link to="/admin/subjects">Subjects</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/admin/students" component={StudentList} />
          <Route path="/admin/add-student" component={AddStudentForm} />
          {/* Other routes for teachers and subjects */}
        </Switch>
      </div>
    </Router>
  );
}

export default AdminPage;