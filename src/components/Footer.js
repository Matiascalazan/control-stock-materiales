import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="social-icons">
        
        <a href="https://www.facebook.com/calazanmatias97" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebookF} /> 
        </a>
        
        <a href="https://www.instagram.com/matias_c97/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        
        <a href="mailto: matiascalazan@gmail.com" aria-label="Email">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      
      <p>
        &copy; {currentYear} Proyecto Final - Stock de Materiales.
        | Materia: Desarrollo Web
      </p>
    </footer>
  );
};

export default Footer;