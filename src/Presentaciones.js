import Datossamuel from './componentes/Samuel/Datossamuel';
import Catalogo_c from './componentes/Samuel/Catalogo_caricaturas';
import Juanes from './componentes/juanes/Juanes';
import El_proyecto_S from './componentes/Samuel/El_Proyecto';
import Personajes_Gumball from './componentes/Samuel/Personaje_S/Personajes_Gumball';
import ElIncreibleMundoDeGumball from './componentes/Samuel/Personaje_S/Caricatura_Gumball';
function Presentaciones() {
  return (
    <div >
        
        <Catalogo_c/>
        <El_proyecto_S/>
        <ElIncreibleMundoDeGumball/>
        
        
    </div>
  );
}

export default Presentaciones;