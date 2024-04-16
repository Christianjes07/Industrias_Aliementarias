import React, { useState } from 'react';
import Carrusel_Conoce from '../Componentes/Carrusel_Conoce';


function Conocenos() {
  // Estados para controlar la visibilidad de cada sección de información
  const [mostrarInformacionObjetivo, setMostrarInformacionObjetivo] = useState(false);
  const [mostrarInformacionMision, setMostrarInformacionMision] = useState(false);
  const [mostrarInformacionVision, setMostrarInformacionVision] = useState(false);
  const [mostrarInformacionIngreso, setMostrarInformacionIngreso] = useState(false);
  const [mostrarInformacionEgreso, setMostrarInformacionEgreso] = useState(false);
  const [mostrarInformacionLaboral, setMostrarInformacionLaboral] = useState(false);
  const [mostrarInformacionAntecedentes, setMostrarInformacionAntecedentes] = useState(false);


  // Funciones para alternar la visibilidad de cada sección de información
  const toggleInformacionObjetivo = () => {
    setMostrarInformacionObjetivo(!mostrarInformacionObjetivo);
  }

  const toggleInformacionMision = () => {
    setMostrarInformacionMision(!mostrarInformacionMision);
  }

  const toggleInformacionVision = () => {
    setMostrarInformacionVision(!mostrarInformacionVision);
  }

  const toggleInformacionIngreso = () => {
    setMostrarInformacionIngreso(!mostrarInformacionIngreso);
  }

  const toggleInformacionEgreso = () => {
    setMostrarInformacionEgreso(!mostrarInformacionEgreso);
  }

  const toggleInformacionLaboral = () => {
    setMostrarInformacionLaboral(!mostrarInformacionLaboral);
  }

  const toggleInformacionAntecedentes = () => {
    setMostrarInformacionAntecedentes(!mostrarInformacionAntecedentes);
  }
  return (
    <div>
      <br />
      <Carrusel_Conoce />
      {/* Sección de Objetivo General */}
      <div className="container pt-5">
        <div className="card  border-0" style={{
    backgroundImage: 'linear-gradient(135deg, #007BFF 0%, #76B947 100%)'
  }}> 
          <div className="card-body">
            <h1 className="card-title text-center" style={{ color: 'black' }}>Objetivo General</h1>
          </div>
        </div>
        <div className="card">
          <div className="card-body border-0">
            {mostrarInformacionObjetivo && (
              <p className="card-text text-center">Formar profesionistas con sólidas bases científicas y tecnológicas, alto compromiso social, elevados valores éticos, actitudes y aptitudes que le permitan constituirse como agentes de cambio, capaces de integrar, desarrollar y consolidar redes de valor en los sistemas productivos de su entorno, mediante la industrialización de los alimentos.</p>
            )}
          </div>
        </div>
        <div className="text-center mt-3">
          {/* Botón para alternar la visibilidad de la información de Objetivo General */}
          <img src="./public/svg/Add (1).svg" alt="Más/Menos"  onClick={toggleInformacionObjetivo} style={{ cursor: 'pointer', width: "30px" }} />
        </div>
      </div>
      
      {/* Sección de Misión */}
      <div className="container pt-5">
        <div className="card border-0" style={{
    backgroundImage: 'linear-gradient(135deg, #007BFF 0%, #76B947 100%)'
  }}> 
          <div className="card-body">
            <h1 className="card-title text-center" style={{ color: 'black' }}>Misión</h1>
          </div>
        </div>
        <div className="card">
          <div className="card-body border-0">
            {mostrarInformacionMision && (
              <p className="card-text text-center">Formar Ingenieros en Industrias Alimentarias con habilidades, conocimientos tecnológicos y científicos, capaces de innovar, diseñar, optimizar y garantizar la calidad en los procesos de producción y transformación de productos alimentarios; con habilidades para tomar decisiones, trabajar en equipo, emprender y gestionar proyectos pertinentes en el área alimentaria, comprometidos con un desarrollo sostenible y apegado a valores humanísticos.</p>
            )}
          </div>
        </div>
        <div className="text-center mt-3">
          {/* Botón para alternar la visibilidad de la información de Misión */}
          <img src="./public/svg/Add (1).svg" alt="Más/Menos"  onClick={toggleInformacionMision} style={{ cursor: 'pointer', width: "30px" }} />
        </div>
      </div>




      <div className="container pt-5">
        <div className="card border-0" style={{
    backgroundImage: 'linear-gradient(135deg, #007BFF 0%, #76B947 100%)'
  }}> 
          <div className="card-body">
            <h1 className="card-title text-center" style={{ color: 'black' }}>Visión</h1>
          </div>
        </div>
        <div className="card">
          <div className="card-body border-0">
            {mostrarInformacionVision && (
 <p className="card-text text-center">Ser un Programa educativo con reconocimiento por su calidad profesional de sus egresados, fortalecido con académicos que contribuyan en la generación de conocimientos científicos y tecnológicos para el diseño,
 desarrollo e innovación de los procesos de producción y transformación de alimentos a nivel regional, nacional e internacional; afianzando alta aceptación en el mercado laboral de sus egresados..</p>
      )}
          </div>
        </div>
        <div className="text-center mt-3">
          {/* Botón para alternar la visibilidad de la información de Misión */}
          <img src="./public/svg/Add (1).svg" alt="Más/Menos"  onClick={toggleInformacionVision} style={{ cursor: 'pointer', width: "30px" }} />
        </div>
      </div>



      <div className="container pt-5">
        <div className="card border-0" style={{
    backgroundImage: 'linear-gradient(135deg, #007BFF 0%, #76B947 100%)'
  }}> 
          <div className="card-body">
            <h1 className="card-title text-center" style={{ color: 'black' }}>Perfil de Ingreso</h1>
          </div>
        </div>
        <div className="card">
          <div className="card-body border-0">
            {mostrarInformacionIngreso && (
 
 <p className="card-text text-center">El aspirante a ingresar al Programa de Ingeniería en Industrias Alimentarias deberá reunir las siguientes características: Conocimientos: bases académicas sólidas en las áreas físico-matemático o químico-biológicas y uso de herramientas computacionales básicas. Habilidades: comunicarse correctamente de forma oral y escrita, analizar, sintetizar y evaluar información; integrar, aplicar y transferir los conocimientos adquiridos, trabajar de manera individual y en equipo, hábito de estudio, pensamiento lógico matemático. Actitudes y Valores: actitud crítica y de investigación hacia la naturaleza y el entorno social de su futura práctica profesional, 
 interés por conocer y participar en la solución de la problemática nacional, actitud creadora para transformar la realidad mediante programas y proyectos de innovación tecnológica y tener espíritu de servicio.</p>

      )}
          </div>
        </div>
        <div className="text-center mt-3">
          {/* Botón para alternar la visibilidad de la información de Misión */}
          <img src="./public/svg/Add (1).svg" alt="Más/Menos"  onClick={toggleInformacionIngreso} style={{ cursor: 'pointer', width: "30px" }} />
        </div>
      </div>
      

      <div className="container pt-5">
  <div className="card border-0" style={{
    backgroundImage: 'linear-gradient(135deg, #007BFF 0%, #76B947 100%)'
  }}> 
    <div className="card-body">
      <h1 className="card-title text-center" style={{ color: 'black' }}>Perfil de Egreso</h1>
    </div>
  </div>
  <div className="card">
    <div className="card-body border-0">
      {mostrarInformacionEgreso && (
        <div>
          <p className="card-text">1. Evalúa sistemas de producción para satisfacer los requerimientos de la industria alimentaria, considerando aspectos de factibilidad y sustentabilidad.</p>
          <p>2. Aplica e innova técnicas tradicionales y emergentes para la conservación de los alimentos.</p>
          <p>3. Selecciona empaques para preservar y comercializar alimentos.</p>
          <p>4. Inspecciona, controla y evalúa procesos, equipo e instalaciones para asegurar la inocuidad y calidad en la industria alimentaria.</p>
  <p>5. Aplica herramientas estadísticas para la toma de decisiones en la industria alimentaria.</p>
  <p>6. Conoce sistemas de gestión para cumplir con la normatividad nacional e internacional en la industria alimentaria.</p>
  <p>7. Aplica métodos de análisis para la estandarización de procesos y caracterización de productos en la industria alimentaria.</p>
  <p>8. Transfiere tecnologías para la transformación de alimentos.</p>
  <p>9. Desarrolla nuevos productos para incrementar su valor agregado en la industria alimentaria.</p>
  <p>10. Desarrolla tecnologías para el aprovechamiento de subproductos alimentarios.</p>
  <p>11. Desarrolla proyectos para la creación de empresas de alimentos.</p>
  <p>12. Diseña e imparte cursos de capacitación referentes a tópicos de la industria alimentaria en general.</p>
  <p>13. Desarrolla habilidades de liderazgo, emprendedora, trabajo ínter- y multidisciplinario, comunicación oral y escrita para el desempeño profesional.</p>
          <p>14. Conoce y aplica un segundo idioma para el desarrollo de su profesión.</p>
        </div>
      )}
  </div>
  <div className="text-center mt-3">
    {/* Botón para alternar la visibilidad de la información de Misión */}
    <img src="./public/svg/Add (1).svg" alt="Más/Menos"  onClick={toggleInformacionEgreso} style={{ cursor: 'pointer', width: "30px" }} />
  </div>
</div>


<div className="container pt-5">
        <div className="card border-0" style={{
    backgroundImage: 'linear-gradient(135deg, #007BFF 0%, #76B947 100%)'
  }}> 
          <div className="card-body">
            <h1 className="card-title text-center" style={{ color: 'black' }}>Campo Laboral</h1>
          </div>
        </div>
        <div className="card">
          <div className="card-body border-0">
            {mostrarInformacionLaboral && (
              <div>
 
 <p className="card-text"> 1. Sector del servicio de alimentos.</p>
 <p>2.Empacadoras o acondicionadoras.</p>
 <p>3.Industrias del procesamiento de alimentos.</p>
 <p>4.Compañías de bebidas.</p>
 <p>5.Industria de aditivos.</p>
 <p>6.Industria confitería.</p>
 <p>7.Industria láctea, cárnica, cereales (panificación y arrocera), aceites comestibles.</p>
 <p>8.Industria de aditivos.</p>
 <p>9.Consultoría.</p>
 <p>10.Certificadoras.</p>
 </div>

      )}
          </div>
        </div>
        <div className="text-center mt-3">
          {/* Botón para alternar la visibilidad de la información de Misión */}
          <img src="./public/svg/Add (1).svg" alt="Más/Menos"  onClick={toggleInformacionLaboral} style={{ cursor: 'pointer', width: "30px" }} />
        </div>
      </div>



      

      <div className="container pt-5">
        <div className="card border-0" style={{
    backgroundImage: 'linear-gradient(135deg, #007BFF 0%, #76B947 100%)'
  }}> 
          <div className="card-body">
            <h1 className="card-title text-center" style={{ color: 'black' }}>Antecedentes Academicos</h1>
          </div>
        </div>
        <div className="card">
          <div className="card-body border-0">
            {mostrarInformacionAntecedentes && (
              <div>
 
 <p className="card-text"> 1. Aptitudes.</p>
 <p>2.Sentido practico.</p>
 <p>3.Adaptabilidad para trabajo en grupo.</p>
 <p>4.Buenas relaciones humanas</p>
 <p>5.Autoconfianza.</p>
 <p>6.Tolerancia de trato.</p>
 <p>7.Autoridad frente a un grupo</p>
 <p>8.Motivacion por el aprovechamiento de los recursos naturales con el objeto de satisfacer las necesidades humanas y el mejoramiento de la calidad de vida.</p>
 </div>

      )}
          </div>
        </div>
        <div className="text-center mt-3">
          {/* Botón para alternar la visibilidad de la información de Misión */}
          <img src="./public/svg/Add (1).svg" alt="Más/Menos"  onClick={toggleInformacionAntecedentes} style={{ cursor: 'pointer', width: "30px" }} />
        </div>
      </div>



      </div>

<br></br><br></br>




      
    </div>



  );
}

export default Conocenos;
