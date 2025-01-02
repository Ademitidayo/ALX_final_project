import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import SubjectSelection from "./SubjectSelection";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to the Student Portal</h1>
        <Routes>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/subjects" component={SubjectSelection} />
          {/* Add a default route for the homepage */}
          <Route exact path="/" render={() => <h2>Please sign up or log in</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;