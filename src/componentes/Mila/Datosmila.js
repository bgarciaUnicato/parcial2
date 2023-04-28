import imagen from "./img1.jpeg"
import imagen2 from "./img2.jpeg"
import './imagen1.css';
import './imagen2.css';



function Datosmila() {
    return (
      <div >
          <h1>Maria Camila Espinosa Florez</h1>
          <br></br>
          <img class="imagen1" src={imagen}alt='img1'/>
          
          <p> Me llamo Maria Camila pero me llaman Mila, naci el 10/10/2002, osea tengo 20 años, estudio ingenieria de sistemas y estoy en 4 semestre en la Unicatolica. Primero era de ingenieria industrial, pero en ya en 3 semestre me cambie para sistemas y me encuentro feliz</p>
          <br></br>
          <p> Me gusta dormir, bailar y escuhar musica, pero no me gusta la cebolla, el coco y esperar, aunque tengo muchas mas cosas que no me gustan como que me cogan las coasas sin permiso y que cuenten con mi tiempo pero tambien tengo mas cosas que me gustan como la salchipapa, pintar y ver doramas</p>
          <br></br>
          <p> Tengo 2 gatos que son mi adoracion, uno se llama Jacob que es el mayor que es un amor, super consentido y no molesta, y el otro se llama Alan que es el menor que ese si es un diablito, siempre daña cosas  y le encanta molestar al hermano pero los amo igual  </p>
          <img class="imagen2" src={imagen2}alt='img2'/>
      </div>
    
    );
  }

  export default Datosmila;