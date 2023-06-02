import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Imagenes_Cards.css"
import { Link } from "react-router-dom";
function Catalogo_card6() {
  return (
    <Card border="dark" style={{ width: '19rem'}}>
      <Card.Img  class= "Imagenes_cards" variant="top" src="https://m.media-amazon.com/images/M/MV5BNjQ1NjBhZmQtZTlkOC00YTM2LWE3NjgtNmZjOWJhMjRkMTY1XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg" />
      <Card.Body>
      <Card.Title class="Titulo_Card_S"><p class="Titulo_Card_Samuel">Teen Titans</p></Card.Title>
      
      <Link
                to="/Example4"
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

export default Catalogo_card6;