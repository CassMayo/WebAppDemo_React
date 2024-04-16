
import React from 'react';
import useRoleBasedRedirect from '../Hooks/useRoleBasedRedirect';
import './UserPage.css';

const UserPage = () => {

  
  //role based redirect for bruker
  useRoleBasedRedirect(['user']);

  return (
    <div className='user-page-container'>
      <h1>User Page</h1>
    </div>
  );
};

export default UserPage;
