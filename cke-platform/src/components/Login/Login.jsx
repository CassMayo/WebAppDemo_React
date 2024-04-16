import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import CustomLink from '../Navbar/CustomLink';
import { LoginContext } from '../logic/LoginContext';
import { BASE_API_URL} from '../../config/'

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();
  const [wrongCredentials, setWrongCredtials] = useState(false)

  const { logIn } = useContext(LoginContext)

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_API_URL}/users/getUser/${credentials.username}`)
      if (response.ok) {
        const userData = await response.json()
        
        logIn(userData._id)
        setWrongCredtials(false)

        if (userData.isSeller) {
          navigate("/company")
        }
        else { navigate("/portfolio") }

      }
    } catch (error) {
      setWrongCredtials(true)
      console.error("Error:", error)
    }


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

          {wrongCredentials && <p> Wrong Credentials!</p>}

          <button type="submit" onClick={handleLogin}>Login</button>
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
