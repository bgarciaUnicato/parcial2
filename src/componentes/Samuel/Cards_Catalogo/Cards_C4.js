import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
function Catalogo_card4() {
  return (
    <Card border="dark" style={{ width: '19rem'}}>
      <Card.Img class= "Imagenes_cards" variant="top" src="https://m.media-amazon.com/images/I/81gCUwiFnxL._AC_SY679_.jpg" />
      <Card.Body>
      <Card.Title class="Titulo_Card_S"><p class="Titulo_Card_Samuel">Un show más</p></Card.Title>
      
      <Link
                to="/Example2"
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

export default Catalogo_card4;