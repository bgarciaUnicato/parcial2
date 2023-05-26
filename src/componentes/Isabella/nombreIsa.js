
import imgnombres from "./imgnombres.jpg";
import './cositas.css';
import divisionisa from "./divisionisa.png";
import PersonajesIsa from "./PersonajesIsa";
import EpisodiosIsa from "./EpisodiosIsa";

function NombreIsa() {
  return (
    <div className="App">
      

      <div class="container text-center">

       <div class="row align-items-start">
         <h1 class="tituloisa">RICK Y MORTY</h1> 
       </div>
       <br></br>
       <br></br>
       <div class="row align-items-start">
         <img className="imgnombres" src={imgnombres} alt="Rick y Morty"/>
       </div>
       <br></br>
       <br></br>
       <div class="row align-items-start">
         <p class="pnombres">Rick y Morty es una serie de televisión americana de animación para adultos creada por Justin Roiland 
          y Dan Harmon en 2013 para Adult Swim. La serie sigue las desventuras de un científico, Rick Sanchez, y su fácilmente influenciable nieto, 
          Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos. </p>
       </div>
       <br></br>
       <img class="divisionisa" src={divisionisa} alt="division" />
       <br></br>
       <br></br>
       </div>
      <PersonajesIsa/>
      <EpisodiosIsa/>

    </div>
  );
}

export default NombreIsa;
