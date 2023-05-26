import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavbarComp from"./componentes/NavbarComp"
import Catalogo_c from './componentes/Samuel/Catalogo_caricaturas';
import ElIncreibleMundoDeGumball from './componentes/Samuel/Personaje_S/Caricatura_Gumball';


function App() {



  return (

    <Router>



    
    <NavbarComp/>
<Routes>

  <Route path="/" element={
  <div>
    <h1>Pagina home del Proyecto</h1>
  </div>} />

    <Route path="/catalogoCaricaturas" element={
  <div>
    <Catalogo_c/>
    </div>} />
  

    <Route path="/ElIncreibleMundoDeGumball" element={
    <div>
      <ElIncreibleMundoDeGumball/>
      
      
      </div>} />



      <Route path="/Example" element={
    <div>
      <h1>Example</h1>
      
      
      </div>} />

      <Route path="/Example1" element={
    <div>
      <h1>Example</h1>
      
      
      </div>} />

      <Route path="/Example2" element={
    <div>
      <h1>Example</h1>
      
      
      </div>} />

      <Route path="/Example3" element={
    <div>
      <h1>Example</h1>
      
      
      </div>} />

      <Route path="/Example4" element={
    <div>
      <h1>Example</h1>
      
      
      </div>} />

      <Route path="/Example5" element={
    <div>
      <h1>Example</h1>
      
      
      </div>} />

      <Route path="/Example6" element={
    <div>
      <h1>Example</h1>
      <Route path="/Example7" element={
    <div>
      <h1>Example7</h1>
      
      
      </div>} />
      
      
      </div>} />


      

</Routes>

    </Router>
  );
}

export default App;
