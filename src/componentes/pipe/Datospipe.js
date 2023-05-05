import './styles.css'
import portada from './imagen/portada.jpg'
import separador from './imagen/separador.jpg'


function Datospipe() {
    return (
        <div>
            <h1 className='bio'>Mansión Foster para amigos imaginarios</h1>
            <div className='resume'>
            <img src={portada} alt=''/>
            </div>
            <p className='biotext'>Es una serie animada estadounidense que sigue la vida de Mac, un niño de 8 años que visita una casa de acogida para amigos imaginarios llamada Mansión Foster. Alli, conoce a un variado grupo de amigos imaginarios, como Bloo, un amigo imaginario que creó cuando era más joven. Mac y Bloo se embarcan en divertidas aventuras mientras lidian con la vida en la Mansión y sus habitantes, incluyendo a Madame Foster, la duela de la casa, y a otros amigos imaginarios como Eduardo, Coco y Wilt.</p>
            <div className='separadora'>
                <img src={separador} alt=''/>
            </div>

        </div>
        
    );
}

export default Datospipe; 