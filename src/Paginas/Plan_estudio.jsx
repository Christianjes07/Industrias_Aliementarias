import React, { useState } from 'react';
import './materias.css'

// Datos de las materias por semestre



const materiasPorSemestre = [
  {
    titulo: 'Semestre 1',
    materias: [
      { nombre: 'Biologia', codigo: 'AEF-1005', horas:'3-2-5' },
      { nombre: 'Quimica Inorganica', codigo: 'ALF-1021 ',horas:'3-2-5' },
      { nombre: 'Calculo diferencial', codigo: 'ACF-0901 ',horas:'3-2-5' },
      { nombre: 'Taller de Ética', codigo:'ACA-0907', horas:'0-4-4'},
      { nombre: 'Fundamentos de Investigación', codigo:'ACC-0906', horas:'2-2-4'},
      {nombre: 'Introducción a la Industria Aliementaria' , codigo:'ALR-1014', horas:'2-1-3'},
      {nombre: 'Actividades complementarias' , codigo:''}


    ]
  },
  {
    titulo: 'Semestre 2',
    materias: [
      { nombre: 'Laboratorio de Quimica Analitica', codigo: 'ALB-1015', horas:'1-4-5' },
      { nombre: 'Química Organica', codigo: 'ALF-1022 ',horas:'3-2-5' },
      { nombre: 'Calculo Integral',  codigo: 'ACF-0902', horas:'3-2-5'},
      { nombre: 'Álgebra Lineal',  codigo: 'ACF-0903', horas:'3-2-5'},
      { nombre: 'Probabilidad y Estadistica',  codigo: 'AEC-1081', horas:'2-2-4'},
      { nombre: 'Fundamentos de fisica',  codigo: 'ALC-1010', horas:'2-2-4'},
      {nombre: 'Actividades complementarias' , codigo:''}




    ]
  },

  {
    titulo:'Semestre 3',
    materias:[
      { nombre: 'Bioquimicos de Alimentos I',  codigo: 'ALF-1002', horas:'3-2-5'},
      { nombre: 'Ecuaciones Diferenciales',  codigo: 'ACF-0905 ', horas:'3-2-5'},
      {nombre:'Termodinámica', codigo:'ALJ-1028', horas:'4-2-6'},
      {nombre:'Análisis de Alimentos', codigo:'ALM-1001', horas:'2-4-6'},
      {nombre:'Diseños Experimentales', codigo:'ALD-1007 ', horas:'2-3-5'},
      {nombre:'Desarrollo sustentable', codigo:'ACD-0908 ', horas:'2-3-5'},
      {nombre: 'Actividades complementarias' , codigo:''}




    ]
  },

  {
  titulo:'Semestre 4',
  materias :[
    {nombre: 'Bioquímica de Alimentos II', codigo:'ALF-1003', horas:'3-2-5'},
    {nombre: 'Taller de Investigación I', codigo:'ACA-0909', horas:'0-4-4'},
    {nombre: 'Flujo de Fluidos ', codigo:'ALM-1009 ', horas:'2-4-6'},
    {nombre: 'Microbiología', codigo:'AEM-1050 ',horas:'2-4-6'},
    {nombre: 'Programación', codigo:'ALA-1020 ', horas:'0-0-4'},
    {nombre: 'Taller de Control Estadístico de Procesos', codigo:'ALA-1023', horas:'0-0-4'},
    {nombre: 'Actividades complementarias' , codigo:''}


  ]
  },

  {
    titulo:'Semestre 5',
    materias:[
      {nombre: 'Evaluación Sensorial', codigo:'ALF-1008', horas:'3-2-5'} ,
      {nombre: 'Tecnología de Frutas, Hortalizas y Confitería', codigo:'AEM-1083', horas:'2-4-6'},
      {nombre: 'Microbiología de Alimentos ', codigo:'ALM-1016  ', horas:'2-4-6'},
      {nombre: 'Operaciones de Transferencia de Calor', codigo:'ALM-1017' ,horas:'2-4-6'}, 
      {nombre: 'Taller de Investigación II ', codigo:'ACA-0910', horas:'0-4-4'},
      {nombre: 'Tecnología de Conservación ', codigo:'ALM-1026 ', horas:'2-4-6'},
      {nombre: 'Actividades complementarias' , codigo:''}


    ]
  },

  {
    titulo:'Semestre 6',
    materias:[
      {nombre: 'Biotecnología', codigo:'ALG-1004 ', horas:'3-3-6'},
      {nombre: 'Gestión de la Calidad e Inocuidad Alimentaria', codigo:'ALC-1011', horas:'2-2-4'},
      {nombre: 'Tecnología de Cárnicos ', codigo:'ALM-1024', horas:'2-4-6'},
      {nombre: 'Innovación y Desarrollo de Nuevos Productos ', codigo:'ALA-1013', horas:'0-4-4'}, 
      {nombre: 'Operaciones de Transferencia de Masa', codigo:'ALM-1018 ', horas:'2-4-6' },
      {nombre: 'Actividades complementarias' , codigo:''}


    ]
  },

  {
    titulo:'Semestre 7',
    materias:[
      {nombre: 'Tecnología de Lácteos ', codigo:'ALM-1027', horas:'2-4-6'},
      {nombre: 'Operaciones Mecánicas ', codigo:'ALM-1019', horas:'2-4-6'},
      {nombre: 'Tecnología de Cereales y Oleaginosas', codigo:'ALM-1025', horas:'2-4-6'},
      {nombre: 'Diseño de Plantas Alimentarias ', codigo:'ALD-1005', horas:'2-3-5'}, 
      {nombre: 'Inducción a la Administración y Economía', codigo:'ALC-1012', horas:'2-2-4'},
      {nombre: 'Servicio Social'}

    ]
  },

  {
  titulo: 'Semestre 8',
  materias:[
    {nombre:'Formulación y Evaluación de Proyectos', codigo:'AEF-1029', horas:'3-2-5'},
    {nombre:'Diseño e Impartición de Cursos Presenciales', codigo:'ALH-1006',  horas:'1-3-4'},
    {nombre: 'Servicio Social'}

  ]
  },
  {
    titulo:'Semestre 9',

    materias:[
      {nombre:'Residencia Profesional'},
      {nombre:'Especialidad'}
    ]
  }

];

function Materia({ nombre, codigo, horas }) {
  return (
    <tr className="degradado-materia">

      <td>{nombre}</td>
      <td>{codigo}</td>
      <td>{horas}</td>
    </tr>
  );
}

function Semestre({ titulo, materias }) {
  return (
    <div className="mt-4">
      <h3>{titulo}</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Clave</th>
            <th>Horas(T-P-C)</th>
          </tr>
        </thead>
        <tbody>
          {materias.map((materia, index) => (
            <Materia key={index} nombre={materia.nombre} codigo={materia.codigo} horas={materia.horas} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Plan_estudio() {
  const [semestreActual, setSemestreActual] = useState(0);

  const cambiarSemestre = (delta) => {
    const nuevoSemestre = semestreActual + delta;
    if (nuevoSemestre >= 0 && nuevoSemestre < materiasPorSemestre.length) {
      setSemestreActual(nuevoSemestre);
    }
  };



  return (

    <div className='container-fluid pt-2'>
      <br></br><br></br>
    <div className="container py-4">
      <h2 className='text-center'>Plan de estudio</h2>
      <h4 className='text-center'>Ingenieria en Industrias Alimentarias</h4>
      <h5 className='text-center'>Reticula</h5>
      <Semestre
        titulo={materiasPorSemestre[semestreActual].titulo}
        materias={materiasPorSemestre[semestreActual].materias}
      />
      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-primary" onClick={() => cambiarSemestre(-1)}>Semestre Anterior</button>
        <button className="btn btn-primary" onClick={() => cambiarSemestre(1)}>Siguiente Semestre</button>
      </div>
   

      <div className="container-fluid pt-5">
            <div className="row">
                <div className="col-sm-12  text-center">
                    <a href="./Imagenes/Reticula Ingenieria en Industrias Alimentarias.pdf" target="_blank" className="btn-lg btn btn-danger">Ver Reticula</a>
                </div>
            </div>
        </div>

</div>
</div>
  );
}

export default Plan_estudio;
