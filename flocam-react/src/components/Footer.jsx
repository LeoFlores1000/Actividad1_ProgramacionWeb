import React from 'react';

const Footer = () => {
  // Obtenemos el año actual dinámicamente, muy de ingeniero
  const year = new Date().getFullYear();

  return (
    <footer id="main-footer" className="footer-index">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {year} <strong>Flocam</strong> - Soluciones Tecnológicas</p>
          <p>Ingeniería en Sistemas Computacionales</p>
          <p className="tecnologia">Desarrollado con React + Vite</p>
          <p>
            <a href="https://jigsaw.w3.org/css-validator/check/referer" target="_blank">
                <img
                    style={{ border: 0, width: "88px", height: "31px" }}
                    src="https://jigsaw.w3.org/css-validator/images/vcss-blue"
                    alt="Valid CSS!"
                    
                />
            </a>
            <a href="https://validator.w3.org/check?uri=referer" target="_blank">
                <img 
                    src="https://www.w3.org/Icons/valid-html401"
                    alt="¡HTML válido!" 
                    height="31" 
                    width="88"
                />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;