import "./Seccion_Catalogo/Catalogo_css.css"
import "./Seccion_Catalogo/Seccion_c1"
import Seccion_catalogo1 from "./Seccion_Catalogo/Seccion_c1";
import Seccion_catalogo2 from "./Seccion_Catalogo/Seccion_c2";
import Seccion_catalogo3 from "./Seccion_Catalogo/Seccion_c3";

import Titulo_cS from "./Seccion_Catalogo/Titulo_Caricatura"

function Catalogo_c() {
    return (
      <div >
            <Titulo_cS/>
            <Seccion_catalogo1/>
            <br></br>
            <Seccion_catalogo2/>
            <br></br>
            <Seccion_catalogo3/>            
            <br></br>
            
     



      </div>
    );
  }
  
  export default Catalogo_c;