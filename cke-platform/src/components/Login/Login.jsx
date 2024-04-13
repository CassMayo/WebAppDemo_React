import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import CustomLink from '../Navbar/CustomLink';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('username', credentials.username);
    //satt userRole til user så at det er default for alle som logger inn
    localStorage.setItem('userRole', 'user');  
    //navigate kan byttes utfra use-case scenario
    navigate('/portfolio');  
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevCredentials => ({ ...prevCredentials, [name]: value }));
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login to Your Account</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
          <div className="login-links">
            <a href="/forgot-password">Forgot Password?</a>
            <CustomLink to="/register">Register as provider</CustomLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
