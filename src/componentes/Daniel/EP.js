import React from 'react';
import { Container } from 'react-bootstrap';
import './EPc.css';

const EP = () => {
  return (
    <Container>
      <h1 className="title">Episodios</h1>
      <div className="episode-list">
        <div className="episode-item">
          <div className="episode-image">
            <img src="https://is5-ssl.mzstatic.com/image/thumb/DuMi9jyRsn8ecBqAgOWXtQ/1200x675.jpg" alt="Episodio 1" />
          </div>
          <div className="episode-info">
            <h3>T1 • E1: Cartman consigue una sonda anal </h3>
            <p>Cartman le cuenta a sus amigos sobre un extraño sueño que tuvo en donde unos ''visitantes'' lo abducen y le ponen una sonda anal. Pero al parecer, no fue sólo un sueño, ya que algo está desollando a las vacas del pequeño pueblo.</p>
          </div>
        </div>
       
        <div className="episode-item">
          <div className="episode-image">
            <img src="https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.southpark.latam:bc4194a9-7342-11ea-a59c-0a7527021758?quality=0.7&gen=ntrn&legacyStatusCode=true" alt="Episodio 2" />
          </div>
          <div className="episode-info">
            <h3>T1 • E2: Volcán </h3>
            <p>Los chicos se van de caza con Jimbo, el tío de Stan, y su viejo amigo Ned. Mientras tanto, un volcán está a punto de hacer erupción y la alcaldesa McDaniels aprovecha la oportunidad para promocionar al pueblo de South Park en televisión.</p>
          </div>
        </div>
       
        <div className="episode-item">
          <div className="episode-image">
            <img src="https://southparkstudios.mtvnimages.com/uri/mgid:arc:content:shared.southpark.latam:bc4197ec-7342-11ea-a59c-0a7527021758?quality=0.7" alt="Episodio 3" />
          </div>
          <div className="episode-info">
            <h3>T1 • E3: Aumento de peso 4000</h3>
            <p>Cartman gana el concurso de ensayos "Salva a nuestro frágil planeta" y se anuncia que Kathie Lee Gifford le dará el premio. Esto enoja a Wendy, porque cree que Cartman hizo trampa y al Señor Garrison porque odia a Gifford.</p>
          </div>
        </div>
        
        
      </div>
    </Container>
  );
};

export default EP;
