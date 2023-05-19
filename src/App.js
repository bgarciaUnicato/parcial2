import React from 'react';
import './App.css';
import NavbarComp from './componentes/NavbarComp';
import Presentaciones from './componentes/Presentaciones';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (


    <Router>

      <div>
      <NavbarComp/>

        <Routes>

          <Route path="/" element={
          <div>
            <h1>Pagina home del Proyecto</h1>
          </div>} />

            <Route path="/simpson" element={
          <div>
            <h1>Este es el contenido de los simpsons</h1>
            </div>} />
          
          <Route path="/caballeroszodiaco" element={
          <div>
            <h1>Este es el contenido de los Caballeros del Zodiaco</h1>
          </div>} />



        </Routes>


      </div>


    </Router>

  );

}

export default App;
