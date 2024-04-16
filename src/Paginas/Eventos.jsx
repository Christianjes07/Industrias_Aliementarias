import React from 'react';
import Footer from '../Componentes/Footer';
import FeedFb from '../Componentes/FeedFb';
import { PubFb, OtraFuncion, OtraFuncion1, OtraFuncion2, OtraFuncion3, OtraFuncion4, OtraFuncion5,
OtraFuncion6, OtraFuncion7 } from '../Componentes/PubFb'; // Importa ambas funciones

function Eventos() {
  return (
    <div>
      <br /><br />
      <div>
  <section style={{ backgroundColor: '#efefef', width: '85%', margin: 'auto', paddingBottom: '15px' }} id="Section">
    <div className="container-fluid ">
      <br /><br />
      <h3 className="pb-3 text-center text-secondary">Síguenos</h3>
      <div style={{ margin: 'auto', width: 'fit-content' }}>
        <FeedFb />
      </div>
      <br /><br />
    </div>
  </section>


</div>
<div className="container pt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <PubFb />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <OtraFuncion />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <OtraFuncion1 />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container pt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <OtraFuncion2 />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <OtraFuncion3 />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <OtraFuncion4 />
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div className="container pt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <OtraFuncion5 />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <OtraFuncion6 />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <OtraFuncion7 />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        



      <br />
      <Footer />
    </div>
  );
}

export default Eventos;
