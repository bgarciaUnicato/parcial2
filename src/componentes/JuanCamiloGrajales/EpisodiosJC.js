import './CaricaturaJCCSS.css';
import Episodio1img from './Episodio1img.jpg'
import Episodio2img from './Episodio2img.jpg'
import Episodio3img from './Episodio3img.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function EpisodiosJC() {
    return (

<div>

<h2 class="titulo_h2_InsideJob">Episodios</h2>


<div class="container_Episodios_InsideJob-SinPresidente">
        <Container>
      <Row>
        <Col xs={6}><img class="Imagenes_Personajes_InsideJob" src={Episodio1img} alt="Episodio 1"></img></Col>
        <Col xs={6}><h5 class="container_episodios-h5IJ">Sin presidente</h5>
        <p  class="Texto_InsideJob-SinPresidente">Reagan Ridley trabaja en Cognito, Inc., una compañía que controla el mundo detrás de escena. Reagan les presenta a sus compañeros de trabajo su misión de reemplazar al presidente con una versión robótica de él llamada ROBOTUS. Mientras Reagan se prepara para sustituir al presidente por un robot, el ascenso que tanto le ha costado se ve amenazado por un colega incompetente... pero simpático.</p></Col>
        </Row>
    </Container>
    </div>

    <div class="container_Episodios_InsideJob-AsesinoDeClones">
    <Container>
      <Row>
        <Col xs={6}><img class="Imagenes_Personajes_InsideJob" src={Episodio2img} alt="Episodio 2"></img></Col>
<Col xs={6}><h5 class="container_episodios-h5IJ">Asesino de clones</h5> 
<p p class="Texto_InsideJob-AsesinoDeClones">Cuando un costoso error exige recortes presupuestarios en Cognito Inc. El jefe de Reagan, J. R. les ordena a Reagan y Brett que decidan quién debe ser despedido.</p></Col>
</Row>
    </Container>
    </div>

    <div class="container_Episodios_InsideJob-SangreAzul">
    <Container>
      <Row>
        <Col xs={6}><img class="Imagenes_Personajes_InsideJob" src={Episodio3img} alt="Episodio 3"></img></Col>
        <Col xs={6}> <h5 class="container_episodios-h5IJ">Sangre azul</h5>
        <p p class="Texto_InsideJob-SangreAzul">Tras un desastre de relaciones públicas relacionado con las personas lagarto, el equipo debe controlar los daños en un evento... ¡donde los abrazos son obligatorios!</p></Col>
      </Row>
    </Container>
    </div>

</div>
    

);
  }

  export default EpisodiosJC;