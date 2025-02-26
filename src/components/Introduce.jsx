import React from "react";
import "./introduce.css";
import { useContext } from "react";
import { ContextLanguage } from "../context/LanguageContexts";

const Introduce = () => {

    const {dilDegistir,content}=useContext(ContextLanguage);

  return (
    <div className="introduce">
      <div className="introduce-section">
        <div className="introduce-name">
          <span className="introduce-line"></span>
          <span className="introduce-text">{content.Name}</span>
        </div>
        <h1 className="introduce-title">
          {content.Job}
        </h1>
        <p className="introduce-description">
        {content.Description}
        </p>

        <div className="introduce-links">
          <a className="introduce-btn introduce-btn-primary" href="#">{content.HireMe}</a>
          <a className="introduce-btn" href="#">Github</a>
          <a className="introduce-btn" href="#">Linkedin</a>
        </div>
      </div>
      <div className="introduce-image">
        <img
          src="https://media.licdn.com/dms/image/v2/C4D03AQEvJwEmDBAjEw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1611612038461?e=2147483647&v=beta&t=1qORkHyDj1a6a12DvEYW-oxBvHiuLUaNa01W_06nxWE"
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Introduce;