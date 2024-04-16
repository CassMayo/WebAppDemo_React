import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CompanyRegister.css';
import { BASE_API_URL } from '../../config';
import { LoginContext } from '../logic/LoginContext';


const RegisterPage = () => {
    const [userInfo, setUserInfo] = useState({
        userName: '',
        isSeller: false, // Seller OR Buyer
        logo: '',
        about: '',
        location: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { logIn } = useContext(LoginContext)

    async function handleRegister(e) {
        e.preventDefault();

        if (!userInfo.userName) {
            setError('All fields are required.');
            return;
        }
        try {
            const response = await fetch(`${BASE_API_URL}/users/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userInfo)
            })

            const data = await response.json()
            localStorage.setItem('userId', data._id) // store just ID in local storage. Use this to fetch more info about company from DB

            logIn(data._id)

        } catch {
            console.error("couldnt ")
        }

        if (userInfo.isSeller){
            navigate("/company")
        } else{
            navigate("/user");
        }
        
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prevUserInfo => ({ ...prevUserInfo, [name]: value }));
        setError('');
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setUserInfo(prevUserInfo => ({ ...prevUserInfo, isSeller: checked }));
        setError('');

    };



    return (
        <div className="register-page">
            <div className="register-container">
                <h2>Register Your Company</h2>
                {error && <p className="error">{error}</p>}

                <div>
                    <input type="checkbox" name="isSeller" id="1" checked={userInfo.isSeller} onChange={handleCheckboxChange} />
                    <label htmlFor=""> I am a seller </label>
                </div>


                <form className="register-form" onSubmit={handleRegister}>
                    <input
                        type="text"
                        name="userName"
                        placeholder="Company Name "
                        value={userInfo.userName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Company Location "
                        value={userInfo.location}
                        onChange={handleChange}
                    />
                    <textarea
                        name="about"
                        placeholder="About the Company "
                        value={userInfo.description}
                        onChange={handleChange}
                    />

                    <button type="submit" onClick={handleRegister}>Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
