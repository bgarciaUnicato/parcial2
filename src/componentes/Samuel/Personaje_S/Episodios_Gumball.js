import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Css_Gumball.css"

function Episodios_Gumball() {
    return (
       
      <div >
        <h2 class="titulo_h2_gumball">Episodios</h2>

        <div class="container_Episodios_Gumball-Elinicio">
        <Container>
      <Row>
        <Col xs={6}><img class="Imagenes_Personajes_Gumball" src="https://static2.srcdn.com/wordpress/wp-content/uploads/2020/12/Still-from-the-Amazing-World-of-Gumball-episode-The-Origins-Part-2..jpg " alt="Los origenes"></img></Col>
        <Col xs={6}> <div class="TextoGumball"> <h5 class="container_episodios-h5"> Los Origenes</h5><p class="Texto_Gumball-losOrigenes">Gumball es un gato delgado de pelaje azul claro con una cabeza grande y cinco bigotes del mismo estilo que los bigotes de los gatos. Viste un pantalón gris acompañado de su suéter color canela con la última parte de las mangas y el cuello más oscuro, de color marrón.
        <p  class="Texto_Gumball-losOrigenes-2">Finalmente, Watterson compra un pez mágico a un misterioso comerciante y Gumball se hace amigo de él. El episodio explora los orígenes del hermano de Gumball, Darwin, y es uno de los muchos episodios conmovedores de la serie.</p></p> </div></Col>
        </Row>
    </Container>
    </div>
    <div class="container_Episodios_Gumball-Lanuez">
    <Container>
      <Row>
        <Col xs={6}><img class="Imagenes_Personajes_Gumball" src="https://pa1.narvii.com/6835/54bdadafa8b91610ade0e5561b7de1804c89aacc_hq.gif" alt="El caparazon"/></Col>
<Col xs={6}><h5 class="container_episodios-h5">El caparazon</h5> <p class="Texto_Gumball-ElCaparazon">A partir de este capítulo la apariencia de Penny cambia para el resto del programa, nos enteramos de su verdadera forma y finalmente Gumball expresa sus sentimientos hacia ella, convirtiéndose ellos dos en pareja.
<p p class="Texto_Gumball-ElCaparazon-2">Alabado por la crítica y considerado por muchos fanáticos como el mejor capítulo en su momento,este episodio lo tiene todo, un argumento misterioso, bromas para adultos (escena de banana Joe) , referencias como siempre, y sobre todo un desarrollo de personajes notable, teniendo en cuenta que la serie nunca se había centrado en este aspecto normalmente.</p> </p> </Col>
</Row>
    </Container>
    </div>
    <div class="container_Episodios_Gumball-Elfin">
    <Container>
      <Row>
        <Col xs={6}><img class="Imagenes_Personajes_Gumball" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/12/The-Disaster-The-Amazing-World-Of-Gumball.jpg" alt="El fin"/></Col>
        <Col xs={6}> <h5 class="container_episodios-h5">El desastre</h5><p class="Texto_Gumball-ElDesastre">En El asombroso mundo de GumballEn el final de la cuarta temporada, “The Disaster”, la vida de Gumball es arruinada lentamente por su némesis Rob, quien ha descubierto un control remoto universal que puede controlar su mundo.
        <p p class="Texto_Gumball-ElDesastre-2">Este episodio fue bueno por sus propios méritos, pero, dado que dejó a los espectadores con un suspenso emocionante que no se resolvería hasta el estreno de la quinta temporada, en realidad no está completo sin esa segunda mitad.  </p></p></Col>
      </Row>
    </Container>
    </div>
      </div>
      
    );
  }
  
  export default Episodios_Gumball;