import tituloIsa from "./titulo.jpg"
import imgnombres from "./imgnombres.jpg"
import './cositas.css';
import divisionisa from "./divisionisa.png"
import personajesIsa from './personajesIsa';
import episodiosIsa from './episodiosIsa';

function nombreIsa() {
  return (
    <div className="App">
      <personajesIsa />
      <episodiosIsa/>

      <div class="container text-center">

       <div class="row align-items-start">
         <img className="tituloIsa" src={tituloIsa} alt="Titulo Rick y Morty" /> 
       </div>

       <div class="row align-items-start">
         <img className="imgnombres" src={imgnombres} alt="Rick y Morty"/>
       </div>

       <div class="row align-items-start">
         <p class="pnombres">Rick y Morty es una serie de televisión americana de animación para adultos creada por Justin Roiland 
          y Dan Harmon en 2013 para Adult Swim. La serie sigue las desventuras de un científico, Rick Sanchez, y su fácilmente influenciable nieto, 
          Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos. </p>
       </div>

       <img class="divisionisa" src={divisionisa} alt="division" />

       </div>
 

    </div>
  );
}

export default nombreIsa;
