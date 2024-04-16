import React, { useState } from "react";
import Carrusel from "../Componentes/Carrusel";
import Footer from "../Componentes/Footer";
import Video from "../Componentes/Video";
import Egresado from "../Componentes/Egresado";
import ImageNavbar from "../Componentes/ImageNavbar";

function Inicio() {

  

  const image1 = "./Imagenes/Img/P1.jpeg";
  const image2 = "./Imagenes/Img/p2.jpeg";

  

  return (
    <div>
      <ImageNavbar />
      <Carrusel />
      <br></br>
      <div className="container-fluid pt-5" style={{
  marginTop: "60px"
}}>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="card-body">
            <img src={image1} alt="Descripción de la imagen" style={{ width: "800px", height: "600px" }} className="img-fluid" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">

            <div className="container text-center pt-5" style={{ marginTop: '80px' }}>
              <h2>Misión del Programa Educativo</h2>
              <span style={{ color: "rgb(7, 4, 0)" }}>
              Formar Ingenieros en Industrias Alimentarias con habilidades, conocimientos tecnológicos y científicos, capaces de innovar, diseñar, optimizar y garantizar la calidad en los procesos de producción y transformación de productos alimentarios; con habilidades para tomar decisiones, trabajar en equipo, emprender y gestionar proyectos pertinentes en el área alimentaria, comprometidos con un desarrollo sostenible y apegado a valores humanísticos.
              </span>
            </div>
          </div>
        </div>

      <div className="container-fluid pt-5">
        <div className="row">
          <div className="col-sm-12 col-md-6">
             <div className="container text-center pt-5" style={{ paddingTop: '80px' }}>
            <h2>Visión del Programa Educativo</h2>
              <span style={{ color: "rgb(7, 4, 0)" }}>
              El Programa Educativo Ingeniería en Industrias Alimentarias, del Instituto Tecnológico Superior Zacatecas Norte, será reconocido por la calidad humana y profesional de los egresados, con una alta aceptación en el campo laboral; formados en un programa acreditado que se fortalece con cuerpos y redes académicas consolidadas, que contribuyen en la investigación, generación y desarrollo de habilidades, para el diseño de alimentos, procesos seguros e innovadores, participando activamente con el sector productivo, en el desarrollo regional y nacional, con enfoque sostenible.              </span>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">

           <div className="card-body">
            <img src={image2} alt="Descripción de la imagen" style={{ width: "800px", height: "600px" }} className="img-fluid" />

            
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="container-fluid bg-success-subtle text-center" style={{
  background: 'rgb(69,1,96)',
  background: 'linear-gradient(90deg, #003366 0%, #66CCCC 50%, #003366 100%)',
  marginTop:"60px"
}}>
      <div className="row">
		<div className="col-sm-12 col-md-12">
  <h2 className="text-center">En ITSZN queremos que estudiar la Ingenieria en Industrias Alimentarias sea una decisión en la que valga la pena invertir.</h2>
  <div className="container ">
    <table className="table table-borderless" style={{color: 'white'}}>
      <thead>
        <tr>
          <th><img src="./public/svg/area.svg" alt="Verificación" width="54px" height="54px" /></th>
          <th><img src="./public/svg/modalidad.svg" alt="Apoyar" width="54px" height="54px" /></th>
          <th><img src="./public/svg/reloj.svg" alt="Profesionales" width="54px" height="54px" /></th>
          <th><img src="./public/svg/jefe.svg" alt="Lista" width="54px" height="54px" /></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-center" style={{color:"blue"}}><span>Area...</span></td>
          <td className="text-center"  style={{color:"blue"}}>Modalidad...</td>
          <td className="text-center"  style={{color:"blue"}}>Duracion...</td>
          <td className="text-center"  style={{color:"blue"}}>Jefe de división...</td>
        </tr>
        <tr>
          <td>Ciencias de la tierra.</td>
          <td>Escolarizado - Semestral.</td>
          <td>9 Semestres (4 años 6 meses) 260 Créditos..</td>
          <td>Ing. José Mancillas Medina.</td>
        </tr>
      </tbody>
    </table>
    <br></br>
  </div>
</div>
</div>
</div>


      
        
   <div>
      <Egresado />
      <Video />

<br></br>

       <div className="container-fluid bg-success-subtle text-center" style={{
  background: 'rgb(69,1,96)',
 background: 'linear-gradient(135deg, #4286f4, #373B44)',
   marginTop:"60px"
}}> 
<br></br>
  <h2 className="text-center" style={{ color: '#ffffff' , marginTop:"40px" }}>Empleabilidad</h2>
  <p className="text-center" style={{ color:'#ffffff' }}>Las posibilidades en el campo laboral para el egresado del Programa Académico de Ingeniería en Industrias Alimentarias son:</p>

  <div className="container-fluid">
    <div className="row">
      <div className="col-md-6 mb-4">
        <div className="card">
          <div className="card-body">
            <p>Desempeñarse en empresas del sector privado como la industria de la panificación, cárnicos, bebidas, productos lácteos, así como frituras, alimentos balanceados e investigación y desarrollo de nuevos productos, desarrollo de procesos y determinación de procedimientos operativos para la producción, programación, gestión y control de la producción, control de la aplicación del plan de calidad en la industria alimentaria, gestión de los sistemas de protección ambiental, realizan operaciones de compraventa y actividades de soporte en la comercialización de productos alimentarios, diseño de equipos de procesos para la Industria Alimentaria.</p>
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="card">
          <div className="card-body">
            <p>Los profesionales de esta carrera también establecen su propio negocio.</p>
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-4 ">
        <div className="card">
          <div className="card-body">
            <p>Dedicarse a la Docencia e investigación y/o Consultoría.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   
<div className="container text-center pt-5" style={{ marginTop: '10px' }}>
            <h4 className="text-center" style={{ color: "black" }}>
          Las nuevas tendencias en la Industria Alimentaria dirigen a la alimentación inteligente.
          Apartando al consumidor a protegerse de enfermedades, los profesionales de
          Ingeniería en Industrias Alimentarias son quienes aportan con sólidos conocimientos.
        </h4>
            </div>
          </div>

  

<div className="container-fluid pt-5">
  <div className="card-body d-flex justify-content-center">
  <img src="./Imagenes/Img/dieseño-higiénico-linmot-ft.-blog-1.webp" alt="Descripción de la imagen" style={{ width: "800px", height: "260px" }} />
      <img src="./Imagenes/Img/CabezaItszn.jpg" alt="Descripción de la segunda imagen" style={{ width: "800px", height: "260px" }} />
  </div>
        

            

       
  


  

        
    

      </div>
      <br></br>

      <Footer />
      </div>
      

  );
}

export default Inicio;
