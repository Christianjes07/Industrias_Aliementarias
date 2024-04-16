import React from 'react';

function Carrusel() {
  return (
    <div id="demo" className="carousel slide" data-bs-ride="carousel">
      {/* Indicators/dots */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
      </div>

      {/* The slideshow/carousel */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./Imagenes/Imagen.jpeg" alt="Los Angeles" className="d-block" style={{ width: "100%" }} />
          <div className="carousel-caption d-none d-md-block">
            <h5 style={{ fontSize: "2vw" }}>Bienvenido al Departamento de Industrias Aliementarias del Instituto Tecnologico Superior Zacatecas Norte</h5>
            <h5 style={{fontSize:"2vw"}} >¡Únete a nosotros a un video!</h5>
            <a href="https://www.facebook.com/teczacatecasnorte/videos/759873618962181" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-lg btn-info rounded-pill" style={{ fontSize: "1.2vw" }} to>Ver video</button></a>
          </div>
        </div>
        <div className="carousel-item">
          <img src="./Imagenes/7.jpeg" alt="Chicago" className="d-block" style={{ width: "100%" }} />
          <div className="carousel-caption d-none d-md-block">
          <h5 style={{ fontSize: "2vw" }}>Bienvenido al Departamento de Industrias Aliementarias del Instituto Tecnologico Superior Zacatecas Norte</h5>
            <h5 style={{fontSize:"2vw"}} >¡Únete a nosotros a un video!</h5>
            <a href="https://www.facebook.com/teczacatecasnorte/videos/759873618962181" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-lg btn-info rounded-pill" style={{ fontSize: "1.2vw" }} to>Ver video</button></a>          </div>
        </div>
        <div className="carousel-item">
          <img src="./Imagenes/Imagen2.jpeg" alt="New York" className="d-block" style={{ width: "100%" }} />
          <div className="carousel-caption d-none d-md-block">
          <h5 style={{ fontSize: "2vw" }}>Bienvenido al Departamento de Industrias Aliementarias del Instituto Tecnologico Superior Zacatecas Norte</h5>
            <h5 style={{fontSize:"2vw"}} >¡Únete a nosotros a un video!</h5>
            <a href="https://www.facebook.com/teczacatecasnorte/videos/759873618962181" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-lg btn-info rounded-pill" style={{ fontSize: "1.2vw" }} to>Ver video</button></a>          </div>
        </div>
      </div>

      {/* Left and right controls/icons */}
      <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default Carrusel;
