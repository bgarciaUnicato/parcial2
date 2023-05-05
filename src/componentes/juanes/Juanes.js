import imgBob from './bob.jpg';
import imgRick from './rick.jpg';
import imgScooby from './scooby.jpg';
import './style.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Juanes(){
    return(        
    <div>
        <Container>
            <Row>
                <Col md="auto">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imgBob}
                                alt="First slide"
                                width="300" 
                                height="300"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imgRick}
                                alt="Second slide"
                                width="300" 
                                height="300"
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imgScooby}
                                alt="Third slide"
                                width="300" 
                                height="300"
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col>
                    <Form>
                        <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Label>Usuario o Correo electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese su usuario o correo electrónico" />
                        </Form.Group>

                        <Form.Group className="mb-1" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingrese su contraseña" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Ingresar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>              
    </div>
    );
}

export default Juanes;