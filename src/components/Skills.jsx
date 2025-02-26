import React from 'react';
import "./skills.css";

const Skils = () => {
  return (
    <div className='skills'>
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        <div className="skills-container-item">
            <h4>Java Script</h4>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="skills-container-item">
        <h4>React.Js</h4>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="skills-container-item">
        <h4>Node.Js</h4>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className="skills-bottom-line"></div>
    </div>
  )
}

export default Skils;