import Datosjcamilo from "./componentes/JuanCamiloGrajales/Datosjcamilo";
import Juanes from './componentes/juanes/Juanes';
import Datosamuel from './componentes/Samuel/Datossamuel';

function Presentaciones() {
  return (
    <div >
        <h1>Estudiantes del Curso</h1>        
        <Juanes />  
        <p />
        <Datosamuel />
        <Datosjcamilo/>
    </div>
    

  );
}

export default Presentaciones;