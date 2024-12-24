import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();  // Initialize the navigate function from useNavigate

  const handleContactClick = () => {
    navigate('/contactus');  // Navigate to the /contactus page
  };

  const handlelogoClick = () => {
    navigate('/');  // Navigate to the /contactus page
  };

  return (
    <nav className="navigation">
      <div className="navdiv ">
        <div className="navstart">
        <div className="logo" onClick={handlelogoClick}>
          SG
        </div>
        {/* <ul className='coloredHover'>
          <li>
            <NavLink className={({isActive}) => isActive ? 'active': ''} to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? 'active': ''} to='/products'>Products</NavLink>
          </li>
          
        </ul> */}
      
      
      </div>
      {/* <div className="navend">
        <button className='contact-btn' onClick={handleContactClick}>
          About Us
        </button>
      </div> */}
      </div>
    </nav>
  )
}

export default Navbar
