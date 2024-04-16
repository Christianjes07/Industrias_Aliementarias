import React from 'react';

function Video() {
  return (

    <div className='container-fluid pt-2'>
    <br/><br/><br/>
    <h1 className="text-center text-danger">Conoce la Ingenieria en Industrias Alimentarias</h1> 

    <div className="container-card pt-5 text-left">
      <div className="mx-auto" style={{ maxWidth: '70%' }}> {/* Estilo para centrar y definir el ancho máximo */}
        <iframe
          width="100%" 
          height="415"
          src="https://www.youtube.com/embed/g-AImWcb8kk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    </div>
  );
}

export default Video;
