import React from 'react';
import './PJc.css'
const PJ = () => {
  return (
    <div>
      <h1 className="title">Personajes</h1>
      <div className="character">
        <img className="character-image" src="https://cdn.shopify.com/s/files/1/0170/5859/4880/files/cartmanOverlay_1980x.png?v=1613773493" alt="Personaje 1" />
        <div className="character-description">
          <h2>Eric Cartman</h2>
          <p>Es el más desagradable grosero y odioso de su grupo de amigos (Kyle, Stan y Kenny), también es malcriado y egoísta al punto del narcisismo, temperamental, desleal, salvaje, extremista, xenófobo, racista, chovinista, misógino, psicótico, sociópata y especialmente antisemita.</p>
        </div>
      </div>
      <div className="character">
        <div className="character-descriptionr">
          <h2>Stan Marsh</h2>
          <p>Stan es un estudiante de cuarto grado que comúnmente tiene excéntricas experiencias no muy típicas de la vida tradicional de un pequeño pueblo en su ciudad natal ficticia de South Park, Colorado. Stan es generalmente representado como amable, eficiente, servicial y relajado.</p>
        </div>
        <img className="character-imager" src="https://cdn.shopify.com/s/files/1/0170/5859/4880/files/stanOverlay_b2c639ad-f1d9-4d1f-92fd-05cff3a3b177_1980x.png?v=1613773494" alt="Personaje 2" />
      </div>
      <div className="character">
        <img className="character-image" src="https://img.favpng.com/8/16/5/kyle-broflovski-stan-marsh-south-park-the-stick-of-truth-kenny-mccormick-eric-cartman-png-favpng-D7j1AF7StVw3KRQMjjMYxE0DL.jpg" alt="Personaje 3" />
        <div className="character-description">
          <h2>Kyle Broflovski</h2>
          <p>Kyle se distingue como uno de los pocos niños judíos en el programa, y debido a esto, a menudo se siente como un forastero entre el grupo principal de personajes. Su representación en este papel a menudo se trata de manera satírica, y ha obtenido tanto elogios como críticas de los espectadores judíos.</p>
        </div>
      </div>

    </div>
  );
};

export default PJ;