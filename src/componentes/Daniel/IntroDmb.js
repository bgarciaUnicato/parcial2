import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Dataintro.css';

const Dataintro = () => {
  return (
    <Container className="container">
      <h1 className="title3">South Park</h1>
      <Row>
        <Col xs={12} className="text-center">
          <Image src="https://www.hollywoodreporter.com/wp-content/uploads/2021/10/south-park-4.jpg" alt="South Park" fluid className="logo" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs={12}>
          
          <div className="description">
            
            <p>
            South Park es una serie de televisión estadounidense de animación, creada por Trey Parker y Matt Stone para el canal Comedy Central. Está dirigida al público adulto y se caracteriza por satirizar con humor negro la sociedad, actualidad y cultura estadounidense a través de las historias y situaciones surrealistas que les suceden a sus protagonistas,​ cuatro chicos (Stan, Kyle, Cartman y Kenny) residentes en un pueblo ficticio de Colorado que se llama South Park.
            </p>
            <div className="details">
              <p className="info">Creadores: Trey Parker, Matt Stone</p>
              <p className="info">Año de salida: 1997</p>
            </div>
            <div className="genres">
              <span className="genre">Género: comedia negra, Animacion </span>

            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dataintro;