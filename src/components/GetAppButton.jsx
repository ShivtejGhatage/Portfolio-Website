import React from 'react';
import './GetAppButton.css'; // Ensure this imports the CSS file
import { useNavigate } from 'react-router-dom';



const GetAppButton = ({ to }) => {
  
  const handleClick = () => {
    window.open(to, '_blank'); // "_blank" opens in a new tab
      };

  return (
    <button className="get-app-btn" onClick={handleClick}>
      Open 
      <span className="arrow">→</span>
    </button>
  );
};

export default GetAppButton;
