import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <div className="bg--patron-tecnm">
      <div className='container '>
        <div className='row'>
          <div className='col-md-6 ' style={{ marginTop: '20px' }}>
            <div className="card">
              <div className="card-body">
                <h3 style={{ color: 'black' }}>Tecnológico Nacional De México</h3>
                <h6>CAMPUS ZACATECAS NORTE</h6>
                <p style={{ color: 'black' }}>Dirección</p>
                <p style={{ color: 'black' }}>Carr. a González Ortega Km. 3, C.P. 98400, Ap. Postal # 178, Río Grande, Zacatecas</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37140.387818675365!2d-103.10121865071655!3d23.84016852025518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8684969f4f69ab3f%3A0xb566625f47770fc7!2sInstituto%20Tecnol%C3%B3gico%20Superior%20de%20Zacatecas%20Norte!5e0!3m2!1ses!2smx!4v1677717950954!5m2!1ses!2smx"
  width="600"
  height="400"
  
  style={{ border: '0' }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"></iframe>
                <a style={{ color: 'black' }}><img src="./public/svg/llamada-telefonica.png"alt="informacion" width="30" /> (498) 488 30 02</a>
                <a href="mailto:contacto@itszn.edu." style={{ color: 'black' }}><img src="./public/svg/gmail.png" alt="informacion" width="30" /> </a>
              </div>
            </div>
          </div>
          <div className='col-md-6' style={{ marginTop: '20px' }}>
            <div className="card">
              <div className="card-body">
                <h3 style={{ color: 'black' }}>Tecnológico Nacional De México</h3>
                <h6>INGENIERIA EN INDUSTRIAS ALIMENTARIAS</h6>
                <h5 style={{ color: 'black' }}>Nuestras redes sociales:</h5>
                <h3 style={{ color: 'black' }}>Siguenos:</h3>

                <a href="https://www.instagram.com/industriasalimentariasitszn/"><img src="./public/svg/instagram.png" alt="Instagram" width="50" /></a>
                <a href="https://www.facebook.com/profile.php?id=100090230202873"><img src="./public/svg/face.png" alt="facebook" width="50" /></a>
                <a href="https://www.tiktok.com/@industriasalimentarias23"><img src="./public/svg/tiktok.png" alt="Instagram" width="50" /></a>
                <a href="mailto:contacto@itszn.edu." style={{ color: 'black' }}><img src="./public/svg/gmail.png" alt="informacion" width="50" /></a>
                <a href="https://wa.me/4331088527" style={{ color: 'black' }}><img src="./public/svg/llamada-telefonica.png"alt="informacion" width="40" /> Mandanos mensaje!</a>


              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Footer;
