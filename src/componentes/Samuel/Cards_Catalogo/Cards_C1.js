import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Imagenes_Cards.css"
import ElIncreibleMundoDeGumball from '../Personaje_S/Caricatura_Gumball';


function Catalogo_card1() {
  return (
    
   
      
   
      
      
     
    <Card border="dark" style={{ width: '19rem'}}>
      <Card.Img class="Imagenes_cards" variant="top" src="https://yt3.googleusercontent.com/ytc/AGIKgqMYTVSYgRX1epKO3Lx5-AlUzMoX4949VY6dRUhIEA=s900-c-k-c0x00ffffff-no-rj" />
      <Card.Body>
        <Card.Title class="Titulo_Card_S"><p class="Titulo_Card_Samuel">El increible mundo de gumball</p></Card.Title>
      
        <button  class="Boton_Card_Samuel Boton_Card_Samuel1"><p class="Titulo_Boton_Samuel" >  Ingresa  </p></button>
      </Card.Body>
    </Card>
   
    
   
   
    
  );
}

export default Catalogo_card1;