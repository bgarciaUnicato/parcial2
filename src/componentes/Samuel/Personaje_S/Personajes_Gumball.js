import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Css_Gumball.css"


function Personajes_Gumball() {
    return (
       
      <div class="Container_Personajes">
        <h2 class="Container_Personajes-h2">Personajes</h2>
        <div class="container-gumball">
        <Container>
      <Row>
        <Col xs={6}><img class="Imagenes_Personajes_Gumball"src="https://i1.sndcdn.com/artworks-8bsMmMyq37kaPdbE-ZhzrAg-t500x500.jpg" alt="Gumball"/></Col>
        <Col xs={6}> <div class="TextoGumball"> <h3 class="Imagenes_Personajes_Gumball__Title"><i>Gumball</i></h3>
          <p class="Texto_Gumball">Gumball es un gato delgado de pelaje azul claro con una cabeza grande y cinco bigotes del mismo estilo que los bigotes de los gatos. Viste un pantalón gris acompañado de su suéter color canela con la última parte de las mangas y el cuello más oscuro, de color marrón.</p> </div></Col>
        </Row>
        </Container>
          </div>
          <div class="container-darwin"><Container>
      <Row>
        <Col xs={6}> <h3 class="Imagenes_Personajes_Gumball__Title-darwin"><i>Darwin</i></h3>
        <p class="Texto_Gumball-Darwin">Darwin es un pez anaranjado con brazos y piernas. Al principio tenía un pantalón corto negro pero en la segunda temporada desapareció, también lleva los zapatos verdes que Gumball usaba cuando era niño.

Darwin es un tipo amable y feliz que mayormente le ve lo bueno y positivo a las cosas. A veces puede ser sensible como en el episodio "El Tercero" cuando pensó que Gumball se aburrió de él. La mayoría de veces prefiere resolver las cosas amablemente en vez de la forma problemática. </p> </Col>
        <Col xs={6}><img class="Imagenes_Personajes_Gumball" src="https://e1.pxfuel.com/desktop-wallpaper/267/973/desktop-wallpaper-gumball-and-darwin-gumball-x-darwin-anime-full.jpg" alt="Darwin"/></Col>
        </Row>
        </Container>
        </div>

        <div class="container-anais"><Container>
      <Row>
        <Col xs={6}><img class="Imagenes_Personajes_Gumball" src="https://i.pinimg.com/originals/3e/88/eb/3e88eb6383fccc19ca2aa962b71bce4a.jpg" alt="Anais"/></Col>
        <Col xs={6}> <h3 class="Imagenes_Personajes_Gumball__Title"><i>Anais</i></h3>
          <p class="Texto_Gumball">Anais es una pequeña coneja rosada con una cola blanca. Ella se asemeja a Richard , su padre, pero es mucho más corto en estatura y tiene un aspecto más femenino. El interior de su boca es una rosa más oscuro, y su lengua es rosa claro. Su nariz es roja como su hermano mayor Gumball.</p></Col>
      </Row>
    </Container>
    </div>
      </div>
      
    );
  }
  
  export default Personajes_Gumball;
  