import './CaricaturaJCCSS.css';
import Linea from './Linea.png'
import Reagan from './Reagan.jpeg'
import Brett from './Brett.jpg'
import Rand from './Rand.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PersonajesJC() {
    return (

<div class="Container_Personajes">

    <h2 class="Container_Personajes-h2IJ">Personajes</h2>
   
    <div class="container-reagan">


<Container>
      <Row>
        <Col xs={6}><img class="Imagenes_Personajes_InsideJob"src={Reagan} alt="Reagan"/></Col>
        <Col xs={6}> <h3 class="Imagenes_Personajes_InsideJob__Title"><i>Reagan</i></h3>
          <p class="Texto_InsideJob">Reagan Ridley es una genio de la tecnología japonés-estadounidense socialmente torpe que trabaja en Cognito Inc. y cree que la sociedad misma puede mejorarse, manejando a sus compañeros de trabajo irresponsables mientras busca una codiciada promoción de trabajo en el camino.</p></Col>
        </Row>
        </Container>
          </div>
          
          <div class="container-brett">
            <Container>
      <Row>
        <Col xs={6}> <h3 class="Imagenes_Personajes_InsideJob__Title-brett"><i>Brett</i></h3>
        <p class="Texto_InsideJob">Brett Hand es un "yes-man" de Washington, D.C. que tiene una fachada como chico de fraternidad, pero en realidad es una persona sensible y cariñosa que quiere que sus compañeros sigan sus pasos y se esfuerza por sacar lo mejor de sus amigos y colegas.</p> </Col>
    
        
        <Col xs={6}><img class="Imagenes_Personajes_InsideJob" src={Brett} alt="Brett"/></Col>
        </Row>
        </Container>
        </div>

        <div class="container-rand"><Container>
      <Row>
        <Col xs={6}><img class="Imagenes_Personajes_InsideJob" src={Rand} alt="Rand"/></Col>

        <Col xs={6}> <h3 class="Imagenes_Personajes_InsideJob__Title"><i>Rand</i></h3>
          <p class="Texto_InsideJob">Rand Ridley es el padre de Reagan, el ex director ejecutivo paranoico y cofundador de Cognito Inc, que fue despedido después de casi exponer el estado profundo y tratar de hacer estallar el sol como su "solución" para curar el cáncer de piel. Vive con su hija Reagan, bebe grandes cantidades de alcohol y planea vengarse de sus antiguos empleadores.</p></Col>
      </Row>
    </Container>
    </div>

 
<img class="LineaIJ"src={Linea} alt="Linea"></img>    
    
</div>
 
 

);
  }

  export default PersonajesJC;