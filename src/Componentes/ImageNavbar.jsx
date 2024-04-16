import React from 'react';
import { Link } from 'react-router-dom';

function ImageNavbar() {
  return (
    <div className="container"  style={{ marginTop: '100px'}}>
      <div className="row justify-content-center">
        <div className="col-auto">
        <a href="https://www.tecnm.mx/" target="_blank" rel="noopener noreferrer">

          <img src="./Imagenes/TECNM.png" width="120" height="55" alt="ITSZN" />          
          </a>
        </div>
        <div className="col-auto">
        <a href="https://www.itszn.edu.mx/coyote/" target="_blank" rel="noopener noreferrer">

          <img src="./Imagenes/ITSZN.png"width="120" height="50" alt="ITSZN" />       
             </a>
        </div>
        <div className="col-auto">
          <Link to="/">
          <img src="./Imagenes/sq_alimentos.png"width="120" height="55" alt="Alimentos" />          </Link>
        </div>
        <div className="col-auto">
        <a href="https://www.example.com/alimentos" target="_blank" rel="noopener noreferrer">
          <img src="./Imagenes/pleca-gob.png" width="120" height="55" alt="Otra Imagen" />  
          </a>
                </div>
      </div>
     </div>
    
  );
}

export default ImageNavbar;
