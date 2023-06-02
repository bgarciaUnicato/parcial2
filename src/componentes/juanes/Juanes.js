import imgBob from './bob.jpg';
import imgRick from './rick.jpg';
import imgScooby from './scooby.jpg';
import imgSimpsons from './simpsons.jpg';
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
            <div class="row">
                <div class="col">
                    <p/>
                <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imgBob}
                                alt="First slide"
                                // width="300" 
                                // height="300"
                            />
                            {/* <Carousel.Caption>
                                <h3>Bob Esponja</h3>
                                <p>Nickelodeon.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imgRick}
                                alt="Second slide"
                                // width="300" 
                                // height="300"
                            />
                            {/* <Carousel.Caption>
                                <h3>Rick & MOrty</h3>
                                <p>Cartoon Network</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imgScooby}
                                alt="Third slide"
                                // width="300" 
                                // height="300"
                            />
                            {/* <Carousel.Caption>
                                <h3>Scooby Doo</h3>
                                <p>Tooncast</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imgSimpsons}
                                alt="Fourth slide"
                                // width="300" 
                                // height="300"
                            />
                            {/* <Carousel.Caption>
                                <h3>Scooby Doo</h3>
                                <p>Tooncast</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div class="col"> 
                    <p/>
                    <h1>Cartoons!</h1>
                    <p/>
                    <Form>
                        <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Label>Ingresa tu usuario o correo electrónico</Form.Label>
                            <Form.Control type="email" placeholder="pepito@cartoons.com" />
                        </Form.Group>
                        <p/>    
                        <Form.Group className="mb-1" controlId="formBasicPassword">
                            <Form.Label>Ingresa tu contraseña</Form.Label>
                            <Form.Control type="password" placeholder="******" />
                        </Form.Group>
                        <p/>        
                        <Button variant="primary" type="submit">
                            Ingresar
                        </Button>
                    </Form>
                </div>
            </div>
        </Container>              
    </div>
    );
}

export default Juanes;