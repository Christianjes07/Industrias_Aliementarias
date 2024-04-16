import React from 'react';

function Instalaciones() {
  return (
    <div className='container-fluid pt-2'>
      <br/><br/><br/>
      <h1 className="text-center text-danger">Nuestras Instalaciones</h1> 
            
      <div className="container mt-5">
    <div className="row">
        <div className="col-md-6 mb-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Instalación 1</h5>
                    <p className="card-text">Descripción de la Instalación 1.</p>
                    <div id="carouselExampleControls1" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./Imagenes/Instalaciones/I1.jpg" className="d-block w-100" style={{ width: "400px", height: "300px" }} alt="Instalación 1" />
                            </div>
                            <div className="carousel-item">
                                <img src="./Imagenes/Instalaciones/I1.jpg" className="d-block w-100" style={{ width: "400px", height: "300px" }} alt="Instalación 2" />
                            </div>
                            {/* Agrega más imágenes aquí si es necesario */}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-6 mb-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Instalación 2</h5>
                    <p className="card-text">Descripción de la Instalación 2.</p>
                    <div id="carouselExampleControls2" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./Imagenes/Instalaciones/I2.jpg" className="d-block w-100" style={{ width: "400px", height: "300px" }} alt="Instalación 3" />
                            </div>
                            <div className="carousel-item">
                                <img src="./Imagenes/Instalaciones/I2.jpg" className="d-block w-100" style={{ width: "400px", height: "300px" }} alt="Instalación 4" />
                            </div>
                            {/* Agrega más imágenes aquí si es necesario */}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="container mt-5">
    <div className="row">
        <div className="col-md-6 mb-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Instalación 3</h5>
                    <p className="card-text">Descripción de la Instalación 3.</p>
                    <div id="carouselExampleControls3" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./Imagenes/Instalaciones/I3.jpg" className="d-block w-100" style={{ width: "400px", height: "300px" }} alt="Instalación 1" />
                            </div>
                            <div className="carousel-item">
                                <img src="./Imagenes/Instalaciones/I3.jpg" className="d-block w-100" style={{ width: "400px", height: "300px" }} alt="Instalación 2" />
                            </div>
                            {/* Agrega más imágenes aquí si es necesario */}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-6 mb-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Instalación 4</h5>
                    <p className="card-text">Descripción de la Instalación 4.</p>
                    <div id="carouselExampleControls4" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./Imagenes/Instalaciones/I4.jpg" className="d-block w-100" style={{ width: "400px", height: "300px" }} alt="Instalación 3" />
                            </div>
                            <div className="carousel-item">
                                <img src="./Imagenes/Instalaciones/I4.jpg" className="d-block w-100" style={{ width: "400px", height: "300px" }} alt="Instalación 4" />
                            </div>
                            {/* Agrega más imágenes aquí si es necesario */}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container mt-5">
    <div className="row">
        <div className="col-md-6 mb-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Instalación 5</h5>
                    <p className="card-text">Descripción de la Instalación 5.</p>
                    <div id="carouselExampleControls5" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./Imagenes/Instalaciones/I5.jpg" className="d-block w-100" style={{ width: "400px", height: "300px" }} alt="Instalación 5" />
                            </div>
                            <div className="carousel-item">
                                <img src="./Imagenes/Instalaciones/I5.jpg" className="d-block w-100" style={{ width: "400px", height: "300px" }} alt="Instalación 6" />
                            </div>
                            {/* Agrega más imágenes aquí si es necesario */}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {/*
        <div className="col-md-6 mb-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Instalación 6</h5>
                    <p className="card-text">Descripción de la Instalación 6.</p>
                    <div id="carouselExampleControls6" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./Imagenes/Instalaciones/I6.jpg" className="d-block w-100" style={{ width: "400px", height: "300px" }} alt="Instalación 7" />
                            </div>
                            <div className="carousel-item">
                                <img src="./Imagenes/Instalaciones/I6.jpg" className="d-block w-100" style={{ width: "400px", height: "300px" }} alt="Instalación 8" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls6" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls6" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>*/}
        </div>
    </div>
</div>
</div>
  );
}

export default Instalaciones;
