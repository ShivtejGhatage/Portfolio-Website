import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        {/* Social Media Links */}
        <div style={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/shivtej-ghatage-3357a7289" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaInstagram size={30} />
          </a>
          <a href="https://github.com/ShivtejGhatage/" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FaGithub size={30} />
          </a>
        </div>

        {/* Contact Information */}
        <div style={styles.contactInfo}>
          <p style={styles.contactItem}>Email: shivtejmailbox@gmail.com</p>
          <p style={styles.contactItem}>Address: Room 291, Hostel 3, IIT Bombay, Powai - 400076</p>
        </div>
      </div>
     
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#171924',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    marginTop: '40px',
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '0 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    color: '#fff',

  },
  socialLinks: {
    display: 'flex',
    gap: '15px',
  },
  icon: {
    color: '#fff',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  iconHover: {
    color: '#00aaff',
  },
  contactInfo: {
    textAlign: 'left',
    color: '#fff',

  },
  contactItem: {
    margin: '5px 0',
    color: '#fff',

  },
  footerText: {
    fontSize: '0.9rem',
    color: '#ffffff',
    marginTop: '20px',
  },
};

export default Footer;
