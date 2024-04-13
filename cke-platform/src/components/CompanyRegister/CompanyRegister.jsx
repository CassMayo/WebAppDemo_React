import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CompanyRegister.css';

const RegisterPage = () => {
  const [companyInfo, setCompanyInfo] = useState({
      companyName: '',
      companyLocation: '',
      companyAbout: '',
      username: '',
      password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
      e.preventDefault();

      if (!companyInfo.username || !companyInfo.password || !companyInfo.companyName) {
          setError('All fields are required.'); 
          return;
      }

      localStorage.setItem('companyInfo', JSON.stringify(companyInfo));
      localStorage.setItem('username', companyInfo.username);
      localStorage.setItem('userRole', 'provider');
      navigate('/Company');
  };

  const handleChange = (e) => {
      const { name, value } = e.target;
      setCompanyInfo(prevCompanyInfo => ({ ...prevCompanyInfo, [name]: value }));
      setError(''); 
  };

  return (
      <div className="register-page">
          <div className="register-container">
              <h2>Register Your Company</h2>
              {error && <p className="error">{error}</p>}
              <form className="register-form" onSubmit={handleRegister}>
                  <input
                      type="text"
                      name="companyName"
                      placeholder="Company Name "
                      value={companyInfo.companyName}
                      onChange={handleChange}
                  />
                  <input
                      type="text"
                      name="companyLocation"
                      placeholder="Company Location "
                      value={companyInfo.companyLocation}
                      onChange={handleChange}
                  />
                  <textarea
                      name="companyAbout"
                      placeholder="About the Company "
                      value={companyInfo.companyAbout}
                      onChange={handleChange}
                  />
                  <input
                      type="text"
                      name="username"
                      placeholder="Username "
                      value={companyInfo.username}
                      onChange={handleChange}
                  />
                  <input
                      type="password"
                      name="password"
                      placeholder="Password "
                      value={companyInfo.password}
                      onChange={handleChange}
                  />
                  <button type="submit">Register</button>
              </form>
          </div>
      </div>
  );
};

export default RegisterPage;
