import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const loginA = async (username, password) => {
  try {
    const response = await fetch('http://localhost:5000/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (data.token) {
      // Store the token in localStorage
      localStorage.setItem('adminToken', data.token);
      // Return success so we can handle redirection in the component
      return true;
    } else {
      alert('Login failed');
      return false;
    }
  } catch (error) {
    console.error('Error logging in:', error);
    alert('Error logging in. Please try again later.');
    return false;
  }
};

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading when submitting form
    const success = await loginA(username, password);
    setLoading(false);
  if (success) {
    navigate('/admin/dashboard'); // Use react-router's navigate to avoid full reload
  }
};
return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;