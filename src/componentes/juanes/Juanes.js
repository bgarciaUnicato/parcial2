import imgJuanes from './juanes2.jpg';
import './style.css';

function Juanes(){
    return(
    <div class="container">
        <div class="hijo">
        <h1 class="title">Juan Esteban Rivera P.</h1>
        <table>
            <tr>
                <td>
                    <img src={imgJuanes} height={250} class="imgRedonda"></img>
                </td>
                <td>
                    <div class="row">
                        <div class="col-md">
                            <div class="card text-center">
                                <div class="card-body">                        
                                    <p class="card-text">Hola! Soy Juan Esteban Rivera, tengo 30 años y soy estudiante de ingeniería de sistemas. Hace 10 años trabajo como ingeniero en una multinacional de software llamada Open International. Me encanta viajar, conozco gran parte de nuestro país, y además he tenido la oportunidad de viajar a otros 9 paises más. Me encanta conocer diferentes culturas y la historia de otras naciones.</p>
                                </div>
                            </div>          
                        </div>            
                    </div>
                </td>
            </tr>
        </table>    
        </div>                 
    </div>
        )
}

export default Juanes;