import React from 'react';
import Navbar from './Componentes/Navbar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Inicio from './Paginas/Inicio';
import Docentes from './Paginas/Docentes';
import Eventos from './Paginas/Eventos';
import Plan_estudio from './Paginas/Plan_estudio';
import Galeria from './Paginas/Galeria';
import Instalaciones from './Paginas/Instalaciones';
import Conocenos from './Paginas/Conocenos';
import Admision from './Paginas/Admision';
import Actividades from './Paginas/Actividades';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path='/docentes' element={<Docentes/>}></Route>
          <Route path='/eventos' element={<Eventos/>}></Route>
          <Route path='/plan_estudio' element={<Plan_estudio/>}></Route>
          <Route path='/docentes' element={<Docentes/>}></Route>
          <Route path='/galeria' element={<Galeria/>}></Route>
          <Route path='/instalaciones' element={<Instalaciones/>}></Route>
          <Route path='/conocenos' element={<Conocenos/>}></Route>
          <Route path='/admision' element={<Admision/>}></Route>
          <Route path='/actividades' element={<Actividades/>}></Route>







        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
