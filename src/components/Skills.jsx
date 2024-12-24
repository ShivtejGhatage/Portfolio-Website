import React from 'react';
import './Skills.css';

const skills = [
    { name: 'Python', color: 'yellow', description: 'A versatile programming language.' },
    { name: 'C++', color: 'cyan', description: 'A powerful programming language for system-level development.' },
    { name: 'Javascript', color: 'lightblue', description: 'The language of the web for interactive applications.' },
    { name: 'React', color: 'orange', description: 'A JavaScript library for building user interfaces.' },
    { name: 'Express', color: 'aquamarine', description: 'A minimal and flexible Node.js web application framework.' },
    { name: 'VHDL', color: 'chartreuse', description: 'Hardware description language for digital design.' },
    { name: 'Tensorflow', color: 'cornflowerblue', description: 'An open-source framework for machine learning.' },
    { name: 'Vue', color: 'lightgreen', description: 'A progressive JavaScript framework for building UI.' },
    { name: 'Django', color: 'aqua', description: 'A high-level Python framework for web development.' },
    { name: 'SciPy', color: 'pink', description: 'A Python library for scientific computing.' },
    { name: 'Git', color: 'coral', description: 'A distributed version control system.' },
    { name: 'Postman', color: 'orange', description: 'A platform for API development and testing.' },
    { name: 'Quartus', color: 'cornflowerblue', description: 'A platform for API development and testing.' },
    { name: 'LTSpice', color: 'aquamarine', description: 'A platform for API development and testing.' },

];



const Skills = () => {
    return (
        <div className="skills-container">
            <ul className="skills-list">
                {skills.map((skill, index) => (
                    <li key={index} className="skill-item" style={{ '--hover-color': skill.color }}>
                        {skill.name}
                        <span className="popup" style={{ backgroundColor: skill.color }}>{skill.description}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;