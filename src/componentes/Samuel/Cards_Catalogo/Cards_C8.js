import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Imagenes_Cards.css"

function Catalogo_card8() {
  return (
    <Card border="dark" style={{ width: '19rem'}}>
      <Card.Img class= "Imagenes_cards" variant="top" src="https://emorywheel.com/wp-content/uploads/2015/03/steven-universe-latino-online-capitulos.png" />
      <Card.Body>
      <Card.Title class="Titulo_Card_S"><p class="Titulo_Card_Samuel">Stiven Universe</p></Card.Title>
      
      <button  class="Boton_Card_Samuel Boton_Card_Samuel1"><p class="Titulo_Boton_Samuel">  Ingresa  </p></button>
      </Card.Body>
    </Card>
  );
}

export default Catalogo_card8;