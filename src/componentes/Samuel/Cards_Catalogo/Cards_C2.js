import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Catalogo_card2() {
  return (
    <Card border="dark" style={{ width: '19rem'}}>
      <Card.Img class= "Imagenes_cards" variant="top" src="https://i.pinimg.com/originals/eb/23/6c/eb236c152afef482fb89e6051c1913a9.jpg" />
      <Card.Body>
        <Card.Title class="Titulo_Card_S"><p class="Titulo_Card_Samuel"> Kick Butosky</p></Card.Title>
        <button  class="Boton_Card_Samuel Boton_Card_Samuel1"><p class="Titulo_Boton_Samuel">  Ingresa  </p></button>
      </Card.Body>
    </Card>
  );
}

export default Catalogo_card2;