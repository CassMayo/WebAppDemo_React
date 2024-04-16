import React, { useState, useEffect } from 'react';
import CompanyStatistics from '../CompanyStatistics/CompanyStatistics';
import useRoleBasedRedirect from '../../Hooks/useRoleBasedRedirect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './CompanyOverview.css';
import CustomLink from '../../Navbar/CustomLink';

const CompanyOverview = (props) => {


  return (
    <div className="company-overview-container">
      <div className='title-container'>
        <h1>Dashboard </h1>
        <CustomLink to={`/company/${props.userInfo._id}`}>
        User settings <i class="fa-solid fa-gear"></i>
        </CustomLink>
      </div>



      <div className="company-overview-header">
        <div className='company-generalInfo'>

          <div className="logoDiv">
            {
              props.userInfo.logo ?

                <img className='logo' src={props.userInfo.logo}></img>
                :
                <div className='company-logo-placeholder'>
                  <p> No logo </p>
                </div>
            }
          </div>

          <div className="company-overview-info">
            <h1>{props.userInfo.userName}</h1>
            <p><i class="fa-solid fa-location-dot"></i> {props.userInfo.location}</p>
            <div className="company-about">
              <p>{props.userInfo.about}</p>
            </div>

          </div>
        </div>

        <CompanyStatistics />
      </div>

    </div>
  );
};

export default CompanyOverview;
