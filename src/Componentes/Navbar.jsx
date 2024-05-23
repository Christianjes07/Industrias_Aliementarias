import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function NavbarComponent() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom fixed-top pt-4" >
      <div className="container">
     

      {/* Botón de menú desplegable */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Enlaces de las páginas en el centro */}
        <ul className="navbar-nav mx-auto">
         

             <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        Noticias y Eventos
      </a>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li><Link className="dropdown-item"  to="/eventos">Noticias</Link></li>
        <li><Link className="dropdown-item" to="/actividades">Eventos</Link></li>
      </ul>
    </li>

          <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        Instalaciones y Docentes
      </a>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li><Link className="dropdown-item"  to="/docentes">Docentes</Link></li>
        <li><Link className="dropdown-item" to="/instalaciones">Instalaciones</Link></li>
      </ul>
    </li>
          <li className="nav-item">
            <Link className="nav-link" to="/galeria">
              Galería de fotos
            </Link>
          </li>
          <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        Admision y Conocenos
      </a>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li><Link className="dropdown-item"  to="/admision">Proceso de admisión</Link></li>
        <li><Link className="dropdown-item" to="/conocenos">Conocenos</Link></li>
      </ul>
    </li>
          <li className="nav-item">
            <Link className="nav-link" to="/plan_estudio">
              Plan de estudio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </li>
        </ul>
      </div>

      {/* Logo en la esquina derecha */}
      <div className="navbar-brand">
      
      </div>
    </div>
  </nav>
  );
}

export default NavbarComponent;
