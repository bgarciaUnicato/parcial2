import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Catalogo_card1 from '../Cards_Catalogo/Cards_C1';
import Catalogo_card2 from '../Cards_Catalogo/Cards_C3';
import Catalogo_card3 from "../Cards_Catalogo/Cards_C3"
function Seccion_catalogo1() {
    return (
      <div >
            <Container>
    
      <Row md={12}>
        <Col xs="auto">    <Catalogo_card1/>   </Col>
        <Col xs="auto"><Catalogo_card2/></Col>
        <Col xs="auto" ><Catalogo_card3/></Col>
      </Row>
    </Container>

        

      </div>
    );
  }
  
  export default Seccion_catalogo1;