import React from 'react';
// Importar los componentes y los íconos de Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// 🚨 CAMBIO AQUÍ: Importamos faInstagram en lugar de faTwitter
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="social-icons">
        
        {/* Ícono de Facebook (sin cambios) */}
        <a href="https://www.facebook.com/calazanmatias97" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebookF} /> 
        </a>
        
        {/* 🚨 NUEVO: Ícono de Instagram */}
        <a href="https://www.instagram.com/matias_c97/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        
        {/* Ícono de Email (sin cambios) */}
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