import React from 'react'
import Footer from '../Componentes/Footer';



function Admision() {
  return (
    <div>
    <div>
      <br /><br /><br></br>
     <h2 className='text-center'>Proceso de Admisión</h2>
     <h3 className='text-center'>Ingreso 2024</h3>

    </div>
    <div className="container"> 
      <div className="row">
        <div className="col">
          {/* Contenedor para el texto */}
          <div>
            <h2>Dirigido a:</h2>
            <p>Egresados de nivel medio superior que deseen ingresar en el ciclo escolar 2024-2025.</p>
            <h2>Oferta educativa en el Tecnológico Nacional de México Campus Zacatecas Norte:</h2>
            <h2>Requisitos generales para el proceso de selección:</h2>
            <ul>
              <li>Copia del certificado del bachillerato o constancia de estudios que acredite estar cursando el último periodo del mismo.</li>
              <li>CURP (Formato actualizado).</li>
              <li>Copia certificada del acta de nacimiento.</li>
              <li>Copia de identificación oficial (INE, CARTILLA MILITAR, PASAPORTE), si eres menor de edad puedes presentar tu credencial actual de la escuela.</li>
              <li>Dos fotografías tamaño infantil B/N (Vestimenta Formal).</li>
              <li>Comprobante de domicilio no mayor a 3 meses.</li>
              <li>Cubrir cuota de examen de admisión y presentar el comprobante de pago.</li>
            </ul>
            <p>Para mayor información sobre los siguientes procesos: "La información que se presenta pudiera ser modificada, dependiendo de las indicaciones federales o estatales que se emitan sobre el regreso a clases y cuando el semáforo sanitario se encuentre en verde".</p>
            <ol>
              <li>Entrega de documentos.</li>
              <li>Realización de examen.</li>
              <li>Presentación de resultados.</li>
              <li>Proceso de inscripción.</li>
              <li>Inicio del semestre.</li>
              <li>Costos.</li>
            </ol>
          </div>
        </div>
        <div className="col">
          {/* Contenedor para la imagen */}
          <img src="./Imagenes/Img/Admision2024.jpg" alt="Imagen" style={{ width: '100%', height: 'auto' }}/>
        </div>
      </div>
    </div>
    <Footer />

    </div>

  );
}
export default Admision
