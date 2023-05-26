import './cositas.css';
import morty from "./morty.jpg"
import rick from "./rick.jpg"
import summer from "./summer.jpg"

function PersonajesIsa() {
  return(
<div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
     <img className="rick" src={rick} alt="Rick Sanchez"/>  
    </div>   
    <div class="col">
      <h2 class="h2rick">Rick Sanchez</h2>
      <p class="defrick">Es un científico excéntrico y genio inventor, conocido por su comportamiento 
      autodestructivo, su cinismo y su inteligencia sobresaliente. Rick es aventurero y viaja a través de 
      dimensiones y planetas con su nieto Morty, enfrentándose a situaciones extravagantes y peligrosas. 
      Aunque es brillante, también es conocido por ser egocéntrico y tener poco respeto por la autoridad y 
      la moralidad convencional.</p>
    </div>
  </div>
<br></br>
<br></br>
  <div class="row align-items-start">  
   <div class="col">
   <h2 class="h2morty">Morty Smith</h2>
      <p class="defmorty">Es un adolescente tímido y algo ingenuo que acompaña a su abuelo Rick en aventuras interdimensionales. 
      Morty a menudo se enfrenta a situaciones peligrosas y surrealistas, lo que lo lleva a experimentar un 
      crecimiento personal y a cuestionarse el sentido de la vida. A lo largo de la serie, se muestra como un 
      personaje vulnerable pero también valiente, y su relación con Rick se convierte en uno de los aspectos 
      centrales de la historia.</p>
    </div> 
    <div class="col">
    <img className="morty" src={morty} alt="Morty Smith"/>      
    </div>
  </div>
<br></br>
<br></br>
  <div class="row align-items-start">  
    <div class="col">
    <img className="summer" src={summer} alt="Summer Smith"/> 
    </div> 
    <div class="col">
      <h2 class="h2summer">Summer Smith</h2>
      <p class="defsummer">Summer es la hermana mayor de Morty. Es una adolescente típica, con una actitud 
      sarcástica y a menudo se muestra desinteresada por las aventuras interdimensionales en las que se 
      involucra su abuelo Rick y su hermano Morty. A lo largo de la serie, Summer demuestra tener una 
      inteligencia subestimada y un potencial oculto, y ocasionalmente se une a las locuras de su abuelo 
      y hermano. Aunque puede parecer superficial a veces, Summer se preocupa profundamente por su familia 
      y está dispuesta a enfrentarse a situaciones peligrosas para protegerlos.</p>
    </div>
  </div>
<br></br>
<br></br>
</div>
  );
}
export default PersonajesIsa;