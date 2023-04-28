import Datosfran from "./componentes/Fran/Datosfran";
import Datospipe from "./componentes/pipe/Datospipe";
function Presentaciones (){
   return (
    <div >
        <div>
            <h1>Estudiantes del Curso</h1>
            <Datosfran/>
        </div>
        <div>
            <Datospipe/>
        </div>
        
        
    </div>
    
  );

}
 

export default Presentaciones;