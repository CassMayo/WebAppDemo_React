

import { useEffect, useState } from 'react'
import './UserSettings.css'
import { useNavigate } from 'react-router-dom';
import { BASE_API_URL } from '../../../config';
import CustomLink from '../../Navbar/CustomLink'

export default function UserSettings() {


    const [userInfo, setUserInfo] = useState({})
    const navigate = useNavigate()

    // get user info from DB using userId stored in browser.
    useEffect(() => {
        const fetchUserInfo = async () => {

            const userInfoResponse = await fetch(`${BASE_API_URL}/users/${localStorage.getItem('userId')}`)

            if (!userInfoResponse.ok) {
                const msg = `An error has occured: ${userInfoResponse.statusText}`
                console.error(msg)
                return
            }
            const userInfo = await userInfoResponse.json()
            if (!userInfo) {
                console.warn(`User with id: ${id} not found`)
                navigate("/")
                return
            }
            setUserInfo(userInfo)
        }
        fetchUserInfo()
    }, []);


    const updateUserSettings = async (e) => {
        e.preventDefault(); // Prevents the default form submission.

        try {
            const response = await fetch(`${BASE_API_URL}/users/${userInfo._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userInfo)
            })



        } catch (err) {
            console.error(err)
        }

        navigate('/company')
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prevUserInfo => ({ ...prevUserInfo, [name]: value }));
    };


    return (
        <div className="settings-body">


            <div aria-label='button' className='goBack '>
                <CustomLink to={"/company/"}>
                    <button>
                        <i class="fa-solid fa-arrow-left"></i> Go back
                    </button>
                </CustomLink>
            </div>

            <h1> User Settings</h1>

            <div className='settings-card'>

                <div className='logo-div'>

                    {
                        userInfo.logo ?

                            <img className='logo' src={userInfo.logo}></img>
                            :
                            <p> No logo </p>

                    }

                </div>


                <form className="user-info-form" onSubmit={updateUserSettings}>

                    <div className='info-field'>

                        <label htmlFor="">Logo URL</label>
                        <input name='logo' type="text" onChange={handleChange} value={userInfo.logo} />
                    </div>


                    <div className='info-field'>
                        <label htmlFor="">Name: </label>
                        <input type="text" name='userName' value={userInfo.userName} onChange={handleChange} />
                    </div >

                    <div className="info-field">
                        <label htmlFor="">About</label>
                        <input type="text" name='about' value={userInfo.about} onChange={handleChange} />
                    </div>

                    <div className="info-field">
                        <label htmlFor="">Location</label>
                        <input type="text" name='location' value={userInfo.location} onChange={handleChange} />
                    </div>

                    <div className="info-field">

                        <label htmlFor=""> I am a seller</label>
                        <div className='checkboxDiv'>
                            <input type="checkbox" name='isSeller' value={userInfo.isSeller} onChange={handleChange} />
                        </div>
                    </div>

                    <button type='submit'> Save</button>

                </form>

                <p className='id'> <i>user id: {userInfo._id}</i></p>

            </div>
        </div>
    )
}