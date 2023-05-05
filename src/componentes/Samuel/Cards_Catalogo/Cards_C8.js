import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Catalogo_card8() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img class= "Imagenes_cards" variant="top" src="https://yt3.googleusercontent.com/ytc/AGIKgqMYTVSYgRX1epKO3Lx5-AlUzMoX4949VY6dRUhIEA=s900-c-k-c0x00ffffff-no-rj" />
      <Card.Body>
        <Card.Title>El increible mundo de Gumball</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Catalogo_card8;