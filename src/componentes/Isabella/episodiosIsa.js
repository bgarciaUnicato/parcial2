import './cositas.css';
import epPepinillo from "./epPepinillo.jpg"
import jerry from "./jerry.jpg"
import divisionisa from "./divisionisa.png";
import epRicks from "./epRicks.jpg";

function EpisodiosIsa()   {
 return (
 <div class="container text-center">
  <img class="divisionisa" src={divisionisa} alt="division" />
  <br></br>
  <br></br>
   <div class="row">
     <div class="col">
      <img class="pepinillo" src={epPepinillo} alt='pepinillo rick'/>
     </div>
     <div class="col">
      <h2 class="h2pepinillo">Temporada 3, Episodio 3</h2>
      <p class="eppepinillo">En el episodio "Pickle Rick" de "Rick y Morty", Rick Smith se transforma en un pepinillo utilizando su ingenio 
      científico. Aunque inicialmente parece una elección absurda, Rick lo hace como una forma de evitar una terapia familiar. Mientras está 
      atrapado como un pepinillo, Rick enfrenta una serie de desafíos, como luchar contra una banda de cucarachas y escapar de una instalación 
      gubernamental rusa.</p>
     </div>
   </div>
   <br></br>
   <br></br>
   <div class="row">
     <div class="col">
     <img class="jerry" src={jerry} alt='Guarderia de jerrys'/>
     </div>
     <div class="col">
     <h2 class="h2jerry">Temporada 3, Episodio 9</h2>
     <p class="guarderia">En "The ABC's of Beth", Beth se debate entre ser una buena madre y tener dudas sobre su identidad. Rick le ofrece la opción de clonarse 
     para explorar una vida sin responsabilidades. Mientras tanto, Jerry se encuentra en una dimensión llamada la Guardería de Jerrys, donde 
     todas las versiones de él son débiles e infelices. Beth visita la Guardería de Jerrys y se da cuenta de que debe enfrentar sus problemas 
     en lugar de escapar de ellos. Al final, decide asumir la responsabilidad y trabajar en su relación con su familia.</p>
     </div>
   </div>
   <br></br>
   <br></br>
   <div class="row">
     <div class="col">
      <img class="ricks" src={epRicks} alt='Ricks y mortys'/>
     </div>
     <div class="col">
      <h2 class="h2mortys">Temporada 1, Episodio 10</h2>
      <p class="mortys">En "Close Rick-counters of the Rick Kind", Rick y Morty son acusados de cometer asesinatos en diferentes realidades y son llevados 
        ante el Consejo de Ricks. Mientras tanto, Morty es enviado a la Ciudadela de los Mortys. Rick y Morty se encuentran con diferentes 
        versiones de ellos mismos y descubren una conspiración liderada por un Rick malvado controlado por un Morty robotizado llamado Evil 
        Morty. Juntos, logran descubrir la verdad detrás de los asesinatos y exponer la conspiración. El episodio explora temas de identidad
         y la relación entre Rick y Morty en un contexto interdimensional.</p>
     </div>
   </div>

 </div>
 );  
 
}
export default EpisodiosIsa;