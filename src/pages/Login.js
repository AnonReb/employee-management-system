// src/pages/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      setLoading(false);
      // Assuming the response contains a user object and token
      const { user, token } = response.data;

       console.log('API Response:', response.data); // Add this to check the response

      setLoading(false);

      // Check if the response contains user and token
      if (response.data && response.data.user && response.data.token) {
        const { user, token } = response.data;

         // Store user data and token
         localStorage.setItem('user', JSON.stringify(user));
         localStorage.setItem('token', token);
   
         // Redirect to home page
         navigate('/');
      } else {
         setMessage('Invalid response from server');
      }
    } catch (error) {
      setLoading(false);
      setMessage('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Login</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default Login;
