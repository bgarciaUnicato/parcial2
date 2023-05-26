import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
function Catalogo_card5() {
  return (
    <Card border="dark" style={{ width: '19rem'}}>
      <Card.Img  class= "Imagenes_cards" variant="top" src="https://images.justwatch.com/poster/178327671/s592/hora-de-aventuras" />
      <Card.Body>
      <Card.Title class="Titulo_Card_S"><p class="Titulo_Card_Samuel">Hora de aventuras</p></Card.Title>
      
      <Link
                to="/Example3"
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

export default Catalogo_card5;