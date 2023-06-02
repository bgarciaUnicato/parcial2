import './styles.css'
import portada from './imagen/portada.jpg'
import separador from './imagen/separador.jpg'
import mac from './imagen/mac.jpg'
import bloo from './imagen/bloo.jpg'
import frankie from './imagen/frankie.jpg'
import episode1 from './imagen/episode1.jpeg'
import episode2 from './imagen/episode2.jpeg'
import episode3 from './imagen/episode3.jpeg'

function Datospipe() {
    return (
        <body>
         <section class="section1"> 
            <div class="container">
                <h1>Mansión Foster para amigos imaginarios.</h1>
                <img src={portada} alt="" class="portada-img"/>
                <p>Es una serie animada estadounidense que sigue la vida de Mac, un niño de 8 años que visita una casa de acogida para amigos imaginarios llamada Mansión Foster. Alli, conoce a un variado grupo de amigos imaginarios, como Bloo, un amigo imaginario que creó cuando era más joven. Mac y Bloo se embarcan en divertidas aventuras mientras lidian con la vida en la Mansión y sus habitantes, incluyendo a Madame Foster, la duela de la casa, y a otros amigos imaginarios como Eduardo, Coco y Wilt.</p>
            </div>
         </section>
         <div class="separator">
            <img src={separador} alt=""/>
         </div>
         <section class="section2">
            <div class="personajes">
                <h2>Personajes</h2>
                <div class="personaje1">
                    <img src={mac} alt="" />
                    <p class="mac"> Mac es el personaje principal de la serie animada “Mansión Foster para amigos imaginarios”.Es un niño de 8 años que es el mejor amigo de Bloo, su amigo imaginario. Mac es un niño amable y cariñoso que siempre está dispuesto a ayudar a sus amigos. Tiene un hermano mayor llamado Terrence y una madre que trabaja todo el día. Mac es muy protector con Bloo y siempre trata de mantenerlo fuera de problemas. Además, Mac es muy inteligente y creativo, lo que le permite idear planes ingeniosos para ayudar a sus amigos.</p>
                </div>
                <div class="personaje2">
                <img src={bloo} alt="" />
                <p class="bloo">Bloo es un personaje principal de la serie animada “Mansión Foster para amigos imaginarios”. Es el amigo imaginario de Mac y es muy travieso y juguetón. Bloo es muy divertido y siempre está buscando nuevas formas de divertirse. A menudo se mete en problemas debido a su comportamiento travieso, pero siempre logra salir de ellos con la ayuda de sus amigos. Bloo es muy leal a Mac y siempre está dispuesto a ayudarlo cuando lo necesita.</p>
                </div>
                <div class="personaje3">
                <img src={frankie} alt="" />
                <p class="frankie">Frankie Foster es la nieta de Madame Foster y tiene 22 años. Es la cuidadora de la Mansión Foster y se encarga del buen mantenimiento de la mansión: limpia, friega, plancha e intercede en los conflictos internos de los habitantes de la mansión. Es alegre y cordial, pero a veces destapa su enorme mal genio al ser incordiada por el Sr. Herriman</p>
                </div>
            </div>
         </section>
         <div class="separator">
            <img src={separador} alt=""/>
         </div>
         <section class="section3">
            <div class="episodes">
                <h1>Episodios</h1>
                <div class="episode1">
                    <img src={episode1} alt=""/>
                    <p>En este episodio, Mac y Bloo descubren una sala secreta en la mansión que tiene la capacidad de convertir cualquier deseo en realidad. Esto lleva a una serie de situaciones hilarantes y desafíos para los personajes.</p>
                </div>
                <div class="episode1">
                    <img src={episode2} alt=""/>
                    <p>Eduardo, uno de los amigos imaginarios de la mansión, encuentra una casa abandonada y decide convertirla en su nuevo hogar. Sin embargo, pronto descubre que la casa está habitada por fantasmas. Este episodio combina comedia y un toque de misterio.</p>
                </div>
                <div class="episode1">
                    <img src={episode3} alt=""/>
                    <p>Mac, Bloo y el resto de los amigos imaginarios se embarcan en una emocionante búsqueda del tesoro dentro de la mansión. Durante la aventura, enfrentan desafíos y se encuentran con personajes peculiares en su camino.</p>
                </div>
            </div>
         </section>
        </body>
    );
}

export default Datospipe; 