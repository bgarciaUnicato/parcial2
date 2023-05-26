import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Imagenes_Cards.css"
function Catalogo_card7() {
  return (
    <Card border="dark" style={{ width: '19rem'}}>
      <Card.Img class= "Imagenes_cards" variant="top" src="https://i.seadn.io/gae/l0EFSGFvx4T4fjzjY1uCwB6Iftqu87ARZOtErgK_i6tB8tnf8UHbubBkTHyLvfni5dbIZmNzEAMoRbchMmpueLILUMvOlHrMeDNh3Q?auto=format&w=1000" />
      <Card.Body>
      <Card.Title class="Titulo_Card_S"><p class="Titulo_Card_Samuel">We bare bears</p></Card.Title>
      
      <button  class="Boton_Card_Samuel Boton_Card_Samuel1"><p class="Titulo_Boton_Samuel">  Ingresa  </p></button>
      </Card.Body>
    </Card>
  );
}

export default Catalogo_card7;