import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Catalogo_card4 from '../Cards_Catalogo/Cards_C4';
import Catalogo_card5 from '../Cards_Catalogo/Cards_C5';
import Catalogo_card6 from "../Cards_Catalogo/Cards_C6"
function Seccion_catalogo2() {
    return (
      <div >
            <Container>
    
      <Row md={12}>
        <Col xs="auto">    <Catalogo_card4/>   </Col>
        <Col xs="auto"><Catalogo_card5/></Col>
        <Col xs="auto" ><Catalogo_card6/></Col>
      </Row>
    </Container>

        

      </div>
    );
  }
  
  export default Seccion_catalogo2;