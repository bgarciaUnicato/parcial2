import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Imagenes_Cards.css"
import { Link } from "react-router-dom";
function Catalogo_card3() {
  return (
    <Card border="dark" style={{ width: '19rem'}}>
      <Card.Img class= "Imagenes_cards" variant="top" src="https://es.web.img2.acsta.net/pictures/14/02/11/12/56/318203.jpg" />
      <Card.Body>
      <Card.Title class="Titulo_Card_S"><p class="Titulo_Card_Samuel">Los simpsons</p></Card.Title>
      <Link
                to="/Example1"
                className="nav-link active"
                aria-current="page"
              >
                        <button  class="Boton_Card_Samuel Boton_Card_Samuel1" > <p class="Titulo_Boton_Samuel" >Ingresa</p>

                        </button>     
              </Link>
      </Card.Body>
    </Card>
  );
}

export default Catalogo_card3;