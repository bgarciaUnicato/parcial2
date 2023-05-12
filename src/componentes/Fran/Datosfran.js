import './Datosfran.css'
import portada from './imagen/portada.jpg'

function Datosfran() {
  return (
    <div className="happy tree friends">
      <h1 className='titulo'>Happy Tree Friends</h1>
      <div className='port'>
        <img src={portada} alt=''/>
      </div>
          <p className='intro'>"Happy Tree Friends" es una serie animada en formato de animación flash que ha sido reconocida por su singular combinación de adorables personajes animales antropomórficos y una violencia extrema y explícita. La serie sigue las desventuras de estos personajes mientras viven en un mundo aparentemente colorido y feliz, pero que frecuentemente se ve alterado por eventos trágicos y sangrientos. La serie está dirigida a un público adulto debido a su contenido gráfico y violento, y ha ganado una gran base de fans gracias a su enfoque único y su capacidad para sorprender y entretener al espectador.</p>
    </div>
  );
}

export default Datosfran;