import React from 'react';
import "./skills.css";
import { useContext } from "react";
import { ContextLanguage } from "../context/LanguageContexts";

const Skills = () => { 

   const {dilDegistir,content}=useContext(ContextLanguage);

  return (
    <div className='skills'>  
      <h2 className="skills-title">{content.Skills}</h2>
      <div className="skills-container">
        <div className="skills-container-item">
            <h4>JavaScript</h4>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="skills-container-item">
          <h4>React.js</h4>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="skills-container-item">
          <h4>Node.js</h4>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className="skills-bottom-line"></div>
    </div>
  );
}

export default Skills;
