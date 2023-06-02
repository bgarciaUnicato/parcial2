import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imagen1 from "./img1.jpg"
import imagen2 from "./img2.jpg"
import imagen34 from "./img3.jpg"  
import "./imagen2.css"
import "./imagen34.css"
import img4 from "./img4.png";
import img6 from "./img6.jpeg";
import img7 from "./img7.jpeg";
import img8 from "./img8.jpeg";

function Datosmila() {
    return (
        <Container>
        
        <h1 class="titulo">GARFIELD</h1> <br></br><img class="imagen1" src={imagen1}alt='img1'/>
        <br></br>
        <br></br>
        <br></br>
        <p class="parrafo_introduccion"> Garfield y sus amigos fue una serie animada estadounidense, producida por DPS Film Roman, fue basada en la popular tira cómica Garfield, creada por Jim Davis. La serie fue transmitida por la cadena de televisión CBS en las mañanas de los sábados, desde el 17 de septiembre de 1988 hasta el 18 de febrero de 1995 en Estados Unidos.</p>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <h1 class="Subtitulo">PERSONAJES</h1>
        <br>
        
  </br>
  <br></br>
  <br></br>
      <Row>
      <Col sm={4}><img class="imagen2" src={imagen2}alt='img2'/></Col>
      <Col sm={8}><h1 class= "Personaje1">Garifield</h1> <br></br> <p class="parrafo_personaje1"> Es un gordo y perezoso gato atigrado (una vez que se describe en la tira cómica por su dueño, Jon como "una albóndiga de color naranja con rayas") que no quiere nada más de la vida que comer y dormir. Tiene un gusto por la lasaña. Lo que más odia es ir al veterinario, los lunes, cosas picantes y las pasas. Disfruta de Odie atormentandolo y en algunas ocasiones trata de enviar por correo a Nermal a Abu Dhabi.</p></Col>
      </Row>

<br></br>
      <Row>


        <Col sm={8}><h1 class= "Personaje2">Odie</h1> <br></br> <p class="parrafo_personaje2"> Un perro de color amarillo y orejas marrones que pertenecía al ex compañero de piso de Jon Arbuckle (que nunca apareció en el show, pero fue un personaje que apareció en las tiras cómicas). A veces Odie se pone en el borde de una mesa y Garfield lo patea y lo tira al suelo. Parece ser increíblemente estúpido e ingenuo, pero en realidad es mucho más astuto e inteligente de lo que él deja ver. Odie es el único personaje animal que no se comunica con cualquier forma de diálogo, sólo la comunicación con el lenguaje corporal y sus entusiastas ladridos y efectos de sonido de otros perros, aunque Garfield es capaz de entender lo que dice. Apareció en un episodio de La granja de Orson.</p></Col>
        <Col sm={4}><img class="imagen3" src={imagen34}alt='img3'/></Col>

      </Row>
      <br></br>

      <Row>
      <Col sm={4}><img class="imagen4" src={img4}alt='img4'/></Col>
      <Col sm={8}><h1 class= "Personaje3">Jon Arbuckle</h1> <br></br> <p class="parrafo_personaje3"> Es el dueño de Garfield y Odie, un dibujante soltero que tiene mala suerte en su vida amorosa y una actitud un tanto torpe y atolondrada. Tiene el cabello corto y castaño, suele vestir una camisa azul de manga larga, pantalones marrones y zapatos marrones. Él es a menudo molestado por algunas de las payasadas de Garfield y también tiene un amor no correspondido por la Dra. Liz. Jon de vez en cuando le exige a Garfield cazar ratones, pero esto no sucede debido a la actitud perezosa de este. Constantemente fuerza a Garfield a seguir una dieta dadas las costumbres vegetarianas de este personaje.</p></Col>
      </Row>
      <br></br>

      <hr></hr>
      <br></br>
      <h1 class="Subtitulo2">EPISODIOS</h1>
      <br></br>
      <br></br>
      <br></br>
      <Row>
      <Col sm={4}><img class="imagen6" src={img6}alt='img6'/></Col>
      <Col sm={8}><h1 class= "Episodio1">Capitulo 1 "Paz y tranquilidad"</h1>  <br></br> <br></br><p class="parrafo_episodio1"> Después de quedarse despierto toda la noche viendo la televisión, Garfield intenta dormir un poco. Binky the Clown cree erróneamente que debe cantar una canción de cumpleaños en la dirección de Garfield y se niega a irse hasta que pueda actuar. </p></Col>
      </Row> 
      <br></br>
      <br></br>
      <Row>
      <Col sm={4}><img class="imagen7" src={img7}alt='img7'/></Col>
      <Col sm={8}><h1 class= "Episodio2">Capitulo 3 " Garfield se vuelve hawaiano"</h1>  <br></br> <br></br><p class="parrafo_episodio2"> Garfield es diagnosticado con la gripe felina hawaiana, una enfermedad inusual que le provoca hula cada vez que alguien menciona a Hawaii. Jon usa la enfermedad de Garfield para ganar dinero en un programa de televisión que presenta divertidas acrobacias con animales. </p></Col>
      </Row> 
      <br></br>
      <br></br>
      <Row>
      <Col sm={4}><img class="imagen8" src={img8}alt='img8'/></Col>
      <Col sm={8}><h1 class= "Episodio3">Capitulo 7 " Nighty Nightmare"</h1>  <br></br> <br></br><p class="parrafo_episodio3">Comer en exceso lleva a Garfield a tener una pesadilla en la que su apetito se sale de control, lo que lo lleva a convertirse en un enorme e insaciable gigante. Finalmente, se llama al ejército para que continúe alimentándolo. </p></Col>
      </Row> 
   



      
    
    </Container>


         
          

        
    
      
  
    );
  }

  export default Datosmila;