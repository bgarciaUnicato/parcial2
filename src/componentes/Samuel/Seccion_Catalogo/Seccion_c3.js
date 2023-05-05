import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Catalogo_card7 from '../Cards_Catalogo/Cards_C7';

import Catalogo_card8 from "../Cards_Catalogo/Cards_C8"
function Seccion_catalogo3() {
    return (
      <div >
            <Container>
    
      <Row md={12}>
        <Col xs="auto">    <Catalogo_card8/>   </Col>

        <Col xs="auto" ><Catalogo_card7/></Col>
      </Row>
    </Container>

        

      </div>
    );
  }
  
  export default Seccion_catalogo3;