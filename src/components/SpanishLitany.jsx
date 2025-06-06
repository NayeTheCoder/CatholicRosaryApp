import React, { useState, useEffect } from 'react';
import './SpanishLitany.css';
import { useNavigate } from 'react-router-dom';
import Switch from "react-switch";

const SpanishLitany = () => {
  const [isPageOne, setIsPageOne] = useState(true);
      const navigate = useNavigate();

      const handleToggle = () => {
        setIsPageOne(!isPageOne);
      };
  // State to manage visibility of prayer sections
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to toggle the visibility of the prayer section
  const togglePrayerVisibility = (index) => {
    // Toggle the section: if it's open, close it; if it's closed, open it
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
      if(!isPageOne) {
        navigate('/CatholicRosaryApp/Litanies');
      }
    }, [isPageOne]);

  return (
     <>
      <div style={{"position":"fixed", "marginLeft":".5rem", "backgroundColor":"white","opacity":"80%", "display":"flex", "flexDirection":"column", "border-radius":"5px", "color":"black"}}>
        <span id="close" onClick ={()=>{document.getElementById("close").parentElement.remove(); return false;}} style={{"fontSize":"1.5rem", "marginLeft":"auto", "paddingRight":".5rem", "paddingLeft":".5rem"}}>x</span>
      <span style={{"alignText":"center","fontSize":"1.25rem"}}>Español!</span>
      <label>
        <Switch onChange={handleToggle} checked={isPageOne} />
      </label>
    </div>
    <div className='litanies-page'>
      <h1>Litanies</h1>

      {/* The Litany of the Blessed Virgin Mary */}
      <div className='litany'>
        <h2 onClick={() => togglePrayerVisibility(0)} style={{ cursor: 'pointer' }}>
        Letanías de la Santísima Virgen
        </h2>

        {expandedIndex === 0 && (
          <div className='litany-prayer'>
            <ul>
              <li>Señor, ten piedad de nosotros. x2</li>
              <li>Cristo, ten piedad de nosotros. x2</li>
              <li>Señor, ten piedad de nosotros. x2</li>
              <li>Cristo, óyenos. x2</li>
              <li>Cristo, escúchanos. x2</li>
              <li>Dios, Padre celestial, ten piedad de nosotros.</li>
              <li>Dios, Hijo, Redentor del mundo,  ten piedad de nosotros.</li>
              <li>Dios, Espíritu Santo, ten piedad de nosotros.</li>
              <li>Santísima Trinidad, un solo Dios, ten piedad de nosotros.</li>
              <li>Santa María, ruega por nosotros.</li>
              <li>Santa Madre de Dios, ruega por nosotros.</li>
              <li>Santa Virgen de las Vírgenes,ruega por nosotros. </li>
              <li>Madre de Cristo, ruega por nosotros. </li>
              <li>Madre de la Iglesia,ruega por nosotros. </li>
              <li>Madre de la misericordia, ruega por nosotros. </li>
              <li>Madre de la divina gracia, ruega por nosotros. </li>
              <li>Madre de la esperanza,  ruega por nosotros. </li>
              <li>Madre purísima, ruega por nosotros. </li>
              <li>Madre castísima, ruega por nosotros. </li>
              <li>Madre siempre virgen, ruega por nosotros.</li>
              <li>Madre inmaculada, ruega por nosotros.</li>
              <li>Madre amable, ruega por nosotros.</li>
              <li>Madre admirable, ruega por nosotros.</li>
              <li>Madre del buen consejo, ruega por nosotros.</li>
              <li>Madre del Creador, ruega por nosotros. </li>
              <li>Madre del Salvador, ruega por nosotros.</li>
              <li>Virgen prudentísima, ruega por nosotros. </li>
              <li>Virgen digna de veneración, ruega por nosotros. </li>
              <li>Virgen digna de alabanza, ruega por nosotros.</li>
              <li>Virgen poderosa, ruega por nosotros. </li>
              <li>Virgen clemente,  ruega por nosotros. </li>
              <li>Virgen fiel, ruega por nosotros. </li>
              <li>Espejo de justicia, ruega por nosotros. </li>
              <li>Trono de la sabiduría, ruega por nosotros. </li>
              <li>Causa de nuestra alegría, ruega por nosotros. </li>
              <li>Vaso espiritual, ruega por nosotros. </li>
              <li>Vaso digno de honor, ruega por nosotros. </li>
              <li>Vaso de insigne devoción, ruega por nosotros.</li>
              <li>Rosa mística, ruega por nosotros. </li>
              <li>Torre de David, ruega por nosotros. </li>
              <li>Torre de marfil, ruega por nosotros. </li>
              <li>Casa de oro, ruega por nosotros. </li>
              <li>Arca de la Alianza,ruega por nosotros. </li>
              <li>Puerta del cielo, ruega por nosotros.</li>
              <li>Estrella de la mañana, ruega por nosotros. </li>
              <li>Refugio de los pecadores, ruega por nosotros.</li>
              <li>Consuelo de los migrantes, ruega por nosotros. </li>
              <li>Consoladora de los afligidos, ruega por nosotros.</li>
              <li>Auxilio de los cristianos, ruega por nosotros.</li>
              <li>Reina de los Ángeles,  ruega por nosotros. </li>
              <li>Reina de los Patriarcas, ruega por nosotros.</li>
              <li>Reina de los Profetas,  ruega por nosotros. </li>
              <li>Reina de los Apóstoles, ruega por nosotros. </li>
              <li>Reina de los Mártires, ruega por nosotros. </li>
              <li>Reina de los Confesores, ruega por nosotros. </li>
              <li>Reina de las Vírgenes, ruega por nosotros. </li>
              <li>Reina de todos los Santos, ruega por nosotros. </li>
              <li>Reina concebida sin pecado original, ruega por nosotros. </li>
              <li>Reina asunta a los Cielos, ruega por nosotros.</li>
              <li>Reina del Santísimo Rosario, ruega por nosotros. </li>
              <li>Reina de la familia,ruega por nosotros. </li>
              <li>Reina de la paz, ruega por nosotros. </li>
        <li>Cordero de Dios, que quitas el pecado del mundo, </li>
          <li>perdónanos, Señor. </li>
        <li>Cordero de Dios, que quitas el pecado del mundo,  </li>
        <li>escúchanos, Señor. </li>
        <li>Cordero de Dios, que quitas el pecado del mundo,  </li>
            <li>ten misericordia de nosotros. </li>
        <li>Ruega por nosotros, Santa Madre de Dios.</li>
        <li>Para que seamos dignos de las promesas de Cristo. </li>

            <li>ORACIÓN.</li>
      <li>Te rogamos nos concedas, 
Señor Dios nuestro, 
gozar de continua salud de alma y cuerpo, 
y por la gloriosa intercesión 
de la bienaventurada siempre Virgen María, 
vernos libres de las tristezas de la vida presente 
y disfrutar de las alegrías eternas. 
Por Cristo nuestro Señor. 
Amén.  </li>

            </ul>
          </div>
        )}
      </div>

      {/* The Litany of Humility */}
      <div className='litany'>
        <h2 onClick={() => togglePrayerVisibility(1)} style={{ cursor: 'pointer' }}>
        Letanías de la humildad 
        </h2>

        {expandedIndex === 1 && (
          <div className='litany-prayer'>
            <ul>
                <li> Jesús manso y humilde de Corazón, -Óyeme. </li>
                <li> Del deseo de ser lisonjeado, Líbrame Jesús. </li>
                <li>Del deseo de ser alabado, Líbrame Jesús.</li>
                <li> Del deseo de ser honrado, Líbrame Jesús. </li>
                <li> Del deseo de ser aplaudido, Líbrame Jesús.</li>
                <li> Del deseo de ser preferido a otros, Líbrame Jesús. </li>
                <li>Del deseo de ser consultado, Líbrame Jesús.</li>
                <li> Del deseo de ser aceptado, Líbrame Jesús.</li>
                <li>Del temor de ser humillado, Líbrame Jesús. </li>
                <li> Del temor de ser despreciado, Líbrame Jesús.</li>
                <li> Del temor de ser reprendido, Líbrame Jesús.</li>
                <li>Del temor de ser calumniado, Líbrame Jesús.</li>
                <li>Del temor de ser olvidado, Líbrame Jesús.</li>
                <li>Del temor de ser puesto en ridículo, Líbrame Jesús.</li>
                <li>Del temor de ser injuriado, Líbrame Jesús.</li>
                <li>Del temor de ser juzgado con malicia, Líbrame Jesús.</li>
                <li>Que otros sean más amados que yo, Jesús dame la gracia de desearlo.</li>
                <li>Que otros sean más estimados que yo, Jesús dame la gracia de desearlo.</li>
                <li>Que otros crezcan en la opinión del mundo y yo me eclipse, Jesús dame la gracia de desearlo.</li>
                <li>Que otros sean alabados y de mí no se haga caso, Jesús dame la gracia de desearlo.</li>
                <li>Que otros sean empleados en cargos y a mí se me juzgue inútil, Jesús dame la gracia de desearlo.</li>
                <li>Que otros sean preferidos a mí en todo, Jesús dame la gracia de desearlo.</li>
                <li>Que los demás sean más santos que yo con tal que yo sea todo lo santo que pueda, Jesús dame la gracia de desearlo.</li>
                <li>Oración:</li>
                <li>Oh Jesús que, siendo Dios, te humillaste hasta la muerte, y muerte de cruz, para ser ejemplo perenne que confunda nuestro orgullo y amor propio. Concédenos la gracia de aprender y practicar tu ejemplo, para que humillándonos como corresponde a nuestra miseria aquí en la tierra, podamos ser ensalzados hasta gozar eternamente de ti en el cielo.</li>
                <li>Amén.</li>
                
            </ul>
          </div>
        )}
      </div>
 {/* The Litany of the Sacred Heart of Jesus */}
 <div className='litany'>
        <h2 onClick={() => togglePrayerVisibility(2)} style={{ cursor: 'pointer' }}>
        Letanías del Sagrado Corazón de Jesús
        </h2>
        {expandedIndex === 2 && (
          <div className='litany-prayer'>
            <ul>
                <li>Señor, ten piedad de nosotros. X2</li>
                <li>Cristo, ten piedad de nosotros. X2 </li>
                <li>Señor, ten piedad de nosotros. X2</li>
                <li>Cristo, óyenos. X2</li>
                <li>Cristo, escúchanos. X2</li>
                <li>Dios, Padre Celestial, ten piedad de nosotros.</li>
                <li>Dios Hijo, Redentor del mundo, ten piedad de nosotros. </li>
                <li>Dios, Espíritu Santo, ten piedad de nosotros.</li>
                <li>Santísima Trinidad, que eres un solo Dios, ten piedad de nosotros. </li>
                <li>Corazón de Jesús, Hijo del Eterno Padre, ten piedad de nosotros.</li>
                <li>Corazón de Jesús, formado en el seno de la Virgen Madre por el Espíritu Santo, ten piedad de nosotros. </li>
                <li>Corazón de Jesús, unido sustancialmente al Verbo de Dios, ten piedad de nosotros. </li>
                <li>Corazón de Jesús, de infinita majestad, ten piedad de nosotros. </li>
                <li>Corazón de Jesús, templo santo de Dios, ten piedad de nosotros. </li>
                <li>Corazón de Jesús, tabernáculo del Altísimo, ten piedad de nosotros. </li>
                <li>Corazón de Jesús, casa de Dios y puerta del cielo, ten piedad de nosotros. </li>
                <li>Corazón de Jesús, horno ardiente de caridad, ten piedad de nosotros. </li>
                <li>Corazón de Jesús, santuario de la justicia y del amor, ten piedad de nosotros.</li>
                <li>Corazón de Jesús, lleno de bondad y de amor, ten piedad de nosotros. </li>
                <li>Corazón de Jesús, abismo de todas las virtudes, ten piedad de nosotros. </li>
                <li>Corazón de Jesús, digno de toda alabanza, ten piedad de nosotros.</li>
                <li>Corazón de Jesús, Rey y centro de todos los corazones, ten piedad de nosotros.</li>
                <li>Corazón de Jesús, en quien se hallan todos los tesoros de la sabiduría, y de la ciencia, ten piedad de nosotros.</li>
                <li>Corazón de Jesús, en quien reside toda la plenitud de la divinidad, ten piedad de nosotros.</li>
                <li>Corazón de Jesús, en quien el Padre se complace, ten piedad de nosotros. </li>
                <li>Corazón de Jesús, de cuya plenitud todos hemos recibido, ten piedad de nosotros. </li>
                <li>Corazón de Jesús, deseado de los eternos collados, ten piedad de nosotros.</li>
                <li>Corazón de Jesús, paciente y lleno de misericordia, ten piedad de nosotros.</li>
                <li>Corazón de Jesús, generoso para todos los que te invocan, ten piedad de nosotros.</li>
                <li>Corazón de Jesús, fuente de vida y santidad, ten piedad de nosotros.</li>
                <li>Corazón de Jesús, propiciación por nuestros pecados, ten piedad de nosotros.</li>
                <li>Corazón de Jesús, colmado de oprobios, ten piedad de nosotros.</li>
                <li>Corazón de Jesús, triturado por nuestros pecados, ten piedad de nosotros. </li>
                <li> Corazón de Jesús, hecho obediente hasta la muerte, ten piedad de nosotros. </li>
                <li> Corazón de Jesús, traspasado por una lanza, ten piedad de nosotros.</li>
                <li>Corazón de Jesús, fuente de todo consuelo, ten piedad de nosotros.</li>
                <li>Corazón de Jesús, vida y resurrección nuestra, ten piedad de nosotros.</li>
                <li>Corazón de Jesús, paz y reconciliación nuestra, ten piedad de nosotros.</li>
                <li>Corazón de Jesús, víctima por los pecadores, ten piedad de nosotros. </li>
                <li>Corazón de Jesús, salvación de los que en ti esperan, ten piedad de nosotros. </li>
                <li>Corazón de Jesús, esperanza de los que en ti mueren, ten piedad de nosotros. </li>
                <li>Corazón de Jesús, delicia de todos los santos, ten piedad de nosotros.</li>
                <li> Cordero de Dios, que quitas el pecado del mundo, perdónanos Señor. </li>
                <li>Cordero de Dios, que quitas el pecado del mundo, Óyenos Señor.</li>
                <li>Cordero de Dios, que quitas el pecado del mundo, ten piedad de nosotros. </li>
                <li>Jesús, manso y humilde de Corazón, haz nuestro corazón semejante al tuyo. </li>
                <li>Oración</li>
                <li>Oh Dios todopoderoso y eterno, mira el Corazón de tu amantísimo Hijo, las alabanzas y satisfacciones que en nombre de los pecadores te ofrece y concede el perdón a éstos que piden misericordia en el nombre de tu mismo Hijo, Jesucristo, el cual vive y reina contigo por los siglos de los siglos. Amén. </li>
            </ul>
          </div>
        )}
      </div>
      {/* Litany For Souls in Purgatory */}
      <div className='litany'>
         <h2 onClick={() => togglePrayerVisibility(3)} style={{ cursor: 'pointer' }}>
         Letanías Por Las Almas Del Purgatorio
         </h2>
 
         {expandedIndex === 3 && (
           <div className='litany-prayer'>
             <ul>
              <li>Dios omnipotente, Padre de bondad y de misericordia, apiádate de las benditas Almas del Purgatorio y ayuda a mis queridos padres y antepasados.</li>
              <li> Señor ten Misericordia de nosotros. X2 </li>
              <li> Cristo ten Misericordia de nosotros. X2 </li>
              <li> Señor ten Misericordia de nosotros. X2 </li>
              <li> Cristo ten Misericordia de nosotros. X2  </li>
              <li> Cristo, óyenos. X2 </li>
              <li> Cristo, escúchanos. X2 </li>
              <li> Dios Padre celestial; ten misericordia de nosotros.  </li>
              <li> Dios Hijo Redentor del mundo; ten misericordia de nosotros. </li>
              <li> Dios Espíritu Santo; ten misericordia de nosotros.</li>
              <li> Santísima Trinidad, un solo Dios; ten misericordia de nosotros. </li>
              <li> Santa María, Auxiliadora de las almas del purgatorio; ten misericordia de nosotros.</li>
              <li> Por mis padres, abuelos, bisabuelos y tatarabuelos… ¡Jesús mío, misericordia!</li>
              <li> Por mis hermanos y parientes más cercanos… ¡Jesús mío, misericordia! </li>
              <li> Por mis benefactores temporales y espirituales… ¡Jesús mío, misericordia!</li>
              <li> Por mis amigos y vecinos… ¡Jesús mío, misericordia! </li>
              <li> Por cuantos debo amor y oración… ¡Jesús mío, misericordia! </li>
              <li> Por cuantos he perjudicado y dañado… ¡Jesús mío, misericordia!</li>
              <li> Por los que me han hecho daño… ¡Jesús mío, misericordia! </li>
              <li> Por los que están más próximos a la unión con Cristo… ¡Jesús mío, misericordia! </li>
              <li> Por los que más desean estar junto a Dios… ¡Jesús mío, misericordia! </li>
              <li> Por los que más sufren… ¡Jesús mío, misericordia!</li>
              <li> Por los que están lejos de la liberación… ¡Jesús mío, misericordia! </li>
              <li> Por los que menos auxilio reciben… ¡Jesús mío, misericordia! </li>
              <li> Por los que más lo merecen por sus servicios a la Iglesia… ¡Jesús mío, misericordia! </li>
              <li> Por los que fueron ricos aquí, y allí son los más pobres… ¡Jesús mío, misericordia! </li>
              <li> Por los poderosos, que ahora son como viles siervos… ¡Jesús mío, misericordia!</li>
              <li> Por los ciegos que ahora reconocen su ceguera… ¡Jesús mío, misericordia! </li>
              <li> Por los vanidosos que malgastaron su tiempo… ¡Jesús mío, misericordia!</li>
              <li> Por los pobres que no buscaron las riquezas divinas… ¡Jesús mío, misericordia!</li>
              <li> Por los tibios que muy poca oración han hecho… ¡Jesús mío, misericordia!</li>
              <li> Por los perezosos que han descuidado tantas obras buenas… ¡Jesús mío, misericordia! </li>
              <li> Por los de poca fe que descuidaron los santos Sacramentos… ¡Jesús mío, misericordia!</li>
              <li> Por los reincidentes que sólo por un milagro de la gracia se han salvado… ¡Jesús mío, misericordia!</li>
              <li> Por los padres que no vigilaron bien a sus hijos… ¡Jesús mío, misericordia!</li>
              <li> Por los superiores poco atentos a la salvación de sus súbditos… ¡Jesús mío, misericordia!</li>
              <li> Por los pobres hombres, que casi sólo se preocuparon del dinero y del placer… ¡Jesús mío, misericordia!</li>
              <li> Por los de espíritu mundano que no aprovecharon sus riquezas o talentos para el Cielo… ¡Jesús mío, misericordia!</li>
              <li> Por los necios, que vieron morir a tantos y no pensaron en su propia muerte… ¡Jesús mío, misericordia!</li>
              <li> Por los que no se aseguraron la vida eterna… ¡Jesús mío, misericordia! </li>
              <li> Por los que tienen una sentencia severa por las grandes responsabilidades encomendadas a ellos… ¡Jesús mío, misericordia!</li>
              <li> Por los pontífices, reyes y príncipes… ¡Jesús mío, misericordia!</li>
              <li> Por los obispos y sus consejeros… ¡Jesús mío, misericordia! </li>
              <li> Por los maestros y pastores de almas… ¡Jesús mío, misericordia!</li>
              <li> Por los sacerdotes de nuestra diócesis… ¡Jesús mío, misericordia!</li>
              <li> Por los sacerdotes y religiosos de la Iglesia católica… ¡Jesús mío, misericordia!</li>
              <li> Por los defensores de la santa fe… ¡Jesús mío, misericordia!</li>
              <li> Por los caídos en los campos de batalla… ¡Jesús mío, misericordia! </li>
              <li> Por los sepultados en los mares… ¡Jesús mío, misericordia!</li>
              <li> Por los muertos repentinamente… ¡Jesús mío, misericordia!</li>
              <li> Por los fallecidos sin recibir los santos sacramentos… ¡Jesús mío, misericordia!</li>
              <li> Por aquellos que morirán dentro de las próximas 24 horas… ¡Jesús mío, misericordia! </li>
              <li> Dale Señor, a todas las almas del purgatorio el descanso eterno. </li>
              <li> Y brillen para ellas la luz perpetua.</li>
              <li> Que descansen en paz.</li>
              <li> Amén.</li>
              <li> Oremos:</li>
              <li> Oh Dios, Creador y Redentor del mundo, perdona los pecados de tus servidores y servidoras, que la negligencia de los hombres olvida en el Purgatorio.
Te rogamos que nuestras oraciones les permitan obtener la liberación por la que tanto suspiran. Señor, que nos mandas orar por nuestros seres queridos, dígnate abrir las puertas del Cielo a las almas que partieron de este mundo y concédeles el descanso y la felicidad eterna. Te lo suplicamos por intercesión de tu Santa Madre y de todos los santos. Que así sea.</li>
<li> Amén.</li>
             </ul>
          </div>
        )}
        </div>

  {/* Litany For Saints */}
  <div className='litany'>
          <h2 onClick={() => togglePrayerVisibility(4)} style={{ cursor: 'pointer' }}>
         Letanías De Los Santos
         </h2>


      {expandedIndex === 4 && (
           <div className='litany-prayer'>
             <ul>
            <li>Señor, ten piedad de nosotros. x2</li>
            <li>Cristo, ten piedad de nosotros. x2</li>
            <li> Señor, ten piedad de nosotros. x2</li>
            <li> Cristo, óyenos. x2</li>
            <li>Cristo escúchanos. x2</li>
            <li> Dios Padre Celestial, ten misericordia de nosotros.</li>
            <li>Dios Hijo, Redentor del mundo, ten misericordia de nosotros.</li>
            <li>Dios Espíritu Santo, ten misericordia de nosotros.</li>
            <li>Santísima Trinidad que eres un solo Dios, ten misericordia de nosotros.</li>
            <li>Santa María Inmaculada, ruega por nosotros.</li>
            <li>Santa Madre de Dios, ruega por nosotros.</li>
            <li>Santa Virgen de las Vírgenes, ruega por nosotros.</li>
            <li>San Miguel, ruega por nosotros.</li>
            <li> San Gabriel, ruega por nosotros.</li>
            <li>San Rafael, ruega por nosotros.</li>
            <li>Todos los Santos Ángeles y Arcángeles, rueguen por nosotros.</li>
            <li>Todos los santos coros de los bienaventurados Espíritus, rueguen por nosotros.</li>
            <li>San Juan Bautista, ruega por nosotros.</li>
            <li>San José, ruega por nosotros.</li>
            <li>Todos los Santos Patriarcas y Profetas, rueguen por nosotros.</li>
            <li>San Pedro, ruega por nosotros.</li>
            <li>San Pablo, ruega por nosotros.</li>
            <li>San Andrés, ruega por nosotros.</li>
            <li>San Juan, ruega por nosotros.</li>
            <li>Santo Tomás, ruega por nosotros.</li>
            <li>San Santiago, ruega por nosotros.</li>
            <li>San Felipe, ruega por nosotros.</li>
            <li>San Bartolomé, ruega por nosotros.</li>
            <li>San Mateo, ruega por nosotros.</li>
            <li>San Simón, ruega por nosotros.</li>
            <li>San Tadeo, ruega por nosotros.</li>
            <li>San Matías, ruega por nosotros.</li>
            <li>San Bernabé, ruega por nosotros.</li>
            <li>San Lucas, ruega por nosotros.</li>
            <li>San Marcos, ruega por nosotros.</li>
            <li>Todos los santos Apóstoles y Evangelistas, rueguen por nosotros.</li>
            <li>Todos los santos Discípulos del Señor, rueguen por nosotros.</li>
            <li>Todos los santos Inocentes, rueguen por nosotros.</li>
            <li>San Esteban, ruega por nosotros.</li>
            <li>San Lorenzo, ruega por nosotros.</li>
            <li>San Vicente, ruega por nosotros.</li>
            <li>San Fabián y San Sebastián, rueguen por nosotros.</li>
            <li>San Juan y San Pablo, rueguen por nosotros.</li>
            <li>San Damián y San Cosme, rueguen por nosotros.</li>
            <li>San Gervasio, ruega por nosotros.</li>
            <li>Todos los santos Mártires, rueguen por nosotros.</li>
            <li>San Silvestre, ruega por nosotros.</li>
            <li>San Gregorio, ruega por nosotros.</li>
            <li>San Ambrosio, ruega por nosotros.</li>
            <li>San Agustín, ruega por nosotros.</li>
            <li>San Jerónimo, ruega por nosotros.</li>
            <li>San Martín, ruega por nosotros.</li>
            <li>San Nicolás, ruega por nosotros.</li>
            <li>Todos los santos Pontífices y Confesores, rueguen por nosotros.</li>
            <li>Todos los santos Doctores, rueguen por nosotros.</li>
            <li>San Antonio, ruega por nosotros.</li>
            <li>San Benito, ruega por nosotros.</li>
            <li>San Bernardo, ruega por nosotros.</li>
            <li>Santo Domingo, ruega por nosotros.</li>
            <li>San Francisco de Asís, ruega por nosotros.</li>
            <li>San Francisco Javier, ruega por nosotros.</li>
            <li>San Ignacio, ruega por nosotros.</li>
            <li>San Enrique, ruega por nosotros.</li>
            <li>Santo Toribio, ruega por nosotros.</li>
            <li>Todos los santos Sacerdotes y Levitas, rueguen por nosotros.</li>
            <li>Todos los santos Monjes y Ermitaños, rueguen por nosotros.</li>
            <li>Santa María Magdalena, ruega por nosotros.</li>
            <li>Santa Agueda, (Ágata) ruega por nosotros.</li>
            <li>Santa Lucía, ruega por nosotros.</li>
            <li>Santa Inés, ruega por nosotros.</li>
            <li>Santa Cecilia, ruega por nosotros.</li>
            <li>Santa Teresa de Jesús, ruega por nosotros.</li>
            <li>Santa Rita, ruega por nosotros.</li>
            <li>Santa Catalina, ruega por nosotros.</li>
            <li>Santa Anastasia, ruega por nosotros.</li>
            <li>Santa Rosa de Lima, ruega por nosotros.</li>
            <li>Santa Teresa de los Andes, ruega por nosotros.</li>
            <li>San Alberto Hurtado, ruega por nosotros.</li>
            <li>Todas las santas Vírgenes, y Viudas, ruega por nosotros.</li>
            <li>Todos los santos y santas de Dios, intercedan por nosotros,</li>
            <li>Sed propicios, perdónanos, Señor.</li>
            <li>Sed propicio, óyenos, Señor.</li>
            <li>De todo mal, líbranos Señor.</li>
            <li>De todo pecado, líbranos Señor.</li>
            <li>De vuestra ira, líbranos Señor.</li>
            <li>De una muerte repentina e imprevista, líbranos Señor.</li>
            <li>De las asechanzas del demonio, líbranos Señor.</li>
            <li>De toda ira, odio y mala voluntad, líbranos Señor.</li>
            <li>Del espíritu de fornicación, líbranos Señor.</li>
            <li>Del rayo y de la tempestad, líbranos Señor.</li>
            <li>De la muerte eterna, líbranos Señor.</li>
            <li>Por el misterio de vuestra santa Encarnación, líbranos Señor.</li>
            <li>Por vuestra venida, líbranos Señor.</li>
            <li>Por vuestra Natividad, líbranos Señor.</li>
            <li>Por vuestro Bautismo y santo ayuno, líbranos Señor.</li>
            <li>Por vuestra Cruz y Pasión, líbranos Señor.</li>
            <li>Por vuestra Muerte y Sepultura, líbranos Señor.</li>
            <li>Por vuestra santa Resurrección, líbranos Señor.</li>
            <li>Por vuestra, admirable Ascensión, líbranos Señor.</li>
            <li>Por la venida del Espíritu Santo Consolador, líbranos Señor.</li>
            <li>Que levantes nuestros corazones a desear las cosas celestiales, te rogamos Señor.</li>
            <li>Que te dignes recompensar con bienes eternos a todos nuestros bienhechores, te rogamos Señor.</li>
            <li>Que libres de la muerte eterna a nuestras almas y  las de nuestros hermanos y parientes, te rogamos Señor.</li>
            <li>Que te dignes darnos y conservarnos los frutos de la tierra, te rogamos Señor.</li>
            <li>Que te dignes conceder el eterno descanso a todos los fieles difuntos, te rogamos Señor, te rogamos Señor.</li>
            <li>Que te dignes oírnos, te rogamos señor.</li>
            <li>Cordero de Dios, que quitas los pecados del mundo, perdónanos Señor.</li>
            <li>Cordero de Dios, que quitas los pecados del mundo, óyenos Señor.</li>
            <li>Cordero de Dios, que quitas los pecados del mundo, ten misericordia de nosotros.</li>
            <li>Cristo óyenos.</li>
            <li>Cristo, escuchadnos.</li>
            <li>¡Oh Dios! ten piedad de nosotros.</li>
            <li>Cristo, apiádate de nosotros.</li>
            <li>¡Oh Dios! compadécete de nosotros.</li>
            <li>Padre nuestro...</li>
            <li>Amen.</li>
    
             </ul>


             </div>
      )}
  </div>

    {/* Litany For Trust */}
  <div className='litany'>
          <h2 onClick={() => togglePrayerVisibility(5)} style={{ cursor: 'pointer' }}>
         Letanía De La Confianza
         </h2>


      {expandedIndex === 5 && (
           <div className='litany-prayer'>
             <ul>
            <li>De la creencia de que tengo que ganar Tu amor. Líbrame Jesús. </li>
            <li>Del miedo a no ser digno de ser amado. Líbrame Jesús.</li>
            <li>De la falsa seguridad de pensar que soy autosuficiente. Líbrame Jesús.</li>
            <li>Del miedo de que confiar en ti me dejará en la miseria. Líbrame Jesús.</li>
            <li>De toda sospecha de Tus palabras y promesas. Líbrame Jesús.</li>
            <li>De la rebeldía contra depender de Ti como un niño. Líbrame Jesús.</li>
            <li>De las negaciones y las reticencias a aceptar Tu voluntad. Líbrame Jesús.</li>
            <li>De la ansiedad por el futuro. Líbrame Jesús.</li>
            <li>Del resentimiento o la excesiva preocupación por el pasado. Líbrame Jesús.</li>
            <li>Del incansable egoísmo en el momento presente. Líbrame Jesús.</li>
            <li>De la incredulidad en Tu amor y presencia. Líbrame Jesús.</li>
            <li>Del miedo a ser pedido dar más de lo que tengo. Líbrame Jesús.</li>
            <li>De la creencia de que mi vida no tiene sentido o valor. Líbrame Jesús.</li>
            <li>Del miedo a lo que el amor demanda. Líbrame Jesús.</li>
            <li>Del desánimo. Líbrame Jesús.</li>
            <li>Que Tú estás continuamente sosteniéndome, apoyándome, amándome. Jesús, en Ti confío.</li>
            <li>Que Tu amor va más allá de mis pecados y mis defectos, y me transforma. Jesús, en Ti confío.</li>
            <li>Que no saber lo que el mañana traerá es una invitación a apoyarse en Ti. Jesús, en Ti confío.</li>
            <li>Que Tú estás conmigo en mi sufrimiento. Jesús, en Ti confío.</li>
            <li>Que mi sufrimiento, unido al Tuyo, dará fruto en esta vida y en la siguiente. Jesús, en Ti confío.</li>
            <li>Que no me dejarás huérfano, que Tú estás presente en Tu Iglesia. Jesús, en Ti confío.</li>
            <li>Que Tu plan es mejor que cualquier otra cosa. Jesús, en Ti confío.</li>
            <li>Que Tú siempre me escuchas, y en Tu bondad siempre me respondes. Jesús, en Ti confío.</li>
            <li>Que Tú me das la gracia para aceptar el perdón y para perdonar a los demás. Jesús, en Ti confío.</li>
            <li>Que Tú me das toda la fuerza que necesito para lo que se me ha pedido. Jesús, en Ti confío.</li>
            <li>Que mi vida es un regalo. Jesús, en Ti confío.</li>
            <li>Que Tú me enseñarás a confiar en Ti. Jesús, en Ti confío.</li>
            <li>Que Tú eres mi Señor y mi Dios. Jesús, en Ti confío.</li>
            <li>Que yo soy Tu amado. Jesús, en Ti confío.</li>

             </ul>


             </div>
      )}
  </div>


    {/* Command Slash to uncomment */}
  {/* <div className='litany'>
          <h2 onClick={() => togglePrayerVisibility(6)} style={{ cursor: 'pointer' }}>
         Letany Template
         </h2>


      {expandedIndex === 6 && (
           <div className='litany-prayer'>
             <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>

             </ul>


             </div>
      )}
  </div> */}

  
    </div>
    </>
)};

export default SpanishLitany;


// Spanish  Litany link 
// https://www.vatican.va/special/rosary/documents/litanie-lauretane_sp.html



// humility litany
// https://www.ewtn.com/es/catolicismo/devociones/letanias-de-humildad-15167


// souls in purgatory 
// https://formacioncatolica.org/letania-por-las-almas-del-purgatorio/


// De La Confianza
//https://www.devocionario.com/jesucristo/letania_4.html

// Letania de los Santos 
// https://www.oracionesydevocionescatolicas.com/letania_santos.htm
