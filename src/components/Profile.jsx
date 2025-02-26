import React from 'react';
import "./profile.css";
import { useContext } from "react";
import { ContextLanguage } from "../context/LanguageContexts";

const Profile = () => {

  const {dilDegistir,content}=useContext(ContextLanguage);

  return (
    <div className='profile'>
      <h2 className="profile-title">{content.Profile}</h2>
      <div className="profile-container">
        <div className="profile-info">
          <h4>{content.Profile}</h4>
          <ul>
            <li><strong>{content.DateOfBirth}</strong> 20.06.1998</li>
            <li><strong>{content.City}</strong> İstanbul</li>
            <li><strong>{content.Education}</strong> Medipol Ünv. MIS</li>
            <li><strong>{content.License}</strong> 2020</li>
            <li><strong>{content.Role}</strong> Frontend, UI</li>
          </ul>
        </div>

        <div className="profile-about">
          <h4>{content.About}</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, 
            odit laborum aliquam voluptatum nisi mollitia.
          </p>
          <p>
            Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt 
            quam temporibus cumque magnam!
          </p>
        </div>
      </div>
      <div className="profile-bottom-line"></div>
    </div>
  );
};

export default Profile;