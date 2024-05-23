import React from 'react';


const myStyle2 = {
  background: 'rgb(69, 1, 96)',
  background: 'linear-gradient(90deg, rgba(69,1,96,1) 0%, rgba(1,33,96,1) 85%, rgba(10,17,143,1) 100%)'
}

const actividades = [
  { titulo: "Actividad 1", tipo: 'Formulación y Evaluación de Proyectos', descripcion: 'AEF-1029', horas: '3-2-5', lugar: 'Salon A' },
  { titulo: "Actividad 2", tipo: 'Desarrollo de Software', descripcion: 'DSO-2045', horas: '4-1-5', lugar: 'Salon B' },
  { titulo: "Actividad 3", tipo: 'Ingeniería de Software', descripcion: 'ISO-3012', horas: '2-3-5', lugar: 'Laboratorio 3' },
  { titulo: "Actividad 4", tipo: 'Redes de Computadoras', descripcion: 'RDC-4030', horas: '3-1-4', lugar: 'Salon C' },
  { titulo: "Actividad 5", tipo: 'Sistemas Operativos', descripcion: 'SOP-5029', horas: '3-3-6', lugar: 'Laboratorio 1' },
  { titulo: "Actividad 6", tipo: 'Bases de Datos Avanzadas', descripcion: 'BDA-6019', horas: '4-0-4', lugar: 'Salon D' },
  { titulo: "Actividad 7", tipo: 'Inteligencia Artificial', descripcion: 'IAI-7005', horas: '2-2-4', lugar: 'Salon E' },
  { titulo: "Actividad 8", tipo: 'Seguridad Informática', descripcion: 'SGI-8091', horas: '3-2-5', lugar: 'Salon F' }
];

function Actividades() {
  return (
    <div className='container-fluid' style={{ marginTop: "70px",...myStyle2 }}>
      <h2 className='text-center mb-4' style={{color:"white"}}>Agenda de actividades 2023-2024</h2>
      <div className='row'>
        {actividades.map((actividad, index) => (
          <div key={index} className="col-sm-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{actividad.titulo}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{actividad.tipo}</h6>
                <p className="card-text">{actividad.descripcion}</p>
                <p className="card-text">{actividad.horas}</p>
                <p className="card-text">{actividad.lugar}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Actividades;
