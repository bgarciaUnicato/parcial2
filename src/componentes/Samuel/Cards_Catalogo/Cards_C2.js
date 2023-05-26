import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function Catalogo_card2() {
  return (
    <Card border="dark" style={{ width: '19rem'}}>
      <Card.Img class= "Imagenes_cards" variant="top" src="https://ca-times.brightspotcdn.com/dims4/default/d551c4a/2147483647/strip/true/crop/1080x1080+0+0/resize/1200x1200!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F50%2Fdf%2F5574648a43aca6c783b02944972b%2Fsouth-park-group-photo-credit-south-park.jpeg" />
      <Card.Body>
        <Card.Title class="Titulo_Card_S"><p class="Titulo_Card_Samuel"> South park</p></Card.Title>
        <Link
                to="/southpark"
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

export default Catalogo_card2;