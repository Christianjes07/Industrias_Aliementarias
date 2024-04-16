import React from 'react'

function Egresado() {
  return (
    <div className="container text-center pt-5">
    <h1 className="font-impact fs-2 text-navy">Especialidad en Desarrollo Tecnológico Alimentario</h1>
    <br /><br /><br />
    <div className="container">
      <table className="table table-borderless">
        <thead>
          <tr>
            <th><img src="./public/svg/recursos-humanos.png" alt="Verificación" width="54px" height="54px" /></th>
            <th><img src="./public/svg/profesionales.png" alt="Apoyar" width="54px" height="54px" /></th>
            <th><img src="./public/svg/comprension (1).png" alt="Profesionales" width="54px" height="54px" /></th>
            <th><img src="./public/svg/verificacin.png" alt="Lista" width="54px" height="54px" /></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span>El egresado...</span></td>
            <td>El egresado...</td>
            <td>El egresado...</td>
            <td>El egresado...</td>
          </tr>
          <tr>
            <td>Satisface los requerimientos, asegurando la calidad e inocuidad mediante la aplicación de la normatividad nacional e internacional en la industria alimentaria.</td>
            <td>Transforma alimentos y subproductos mediante la innovación de tecnologías para la conservación de los alimentos.</td>
            <td>Selecciona empaques para preservar alimentos de acuerdo a la caracterización de productos en la industria alimentaria.</td>
            <td>Desarrolla actividades administrativas con liderazgo ético para una responsabilidad social en la industria.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Egresado
