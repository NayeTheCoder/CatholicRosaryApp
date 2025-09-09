import React, { useState, useEffect } from 'react';
import '../../styles/SpanishLitany.css';
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
        navigate('/prayers/Litanies');
      }
    }, [isPageOne]);

  return (
     <>
      <div 
      style={{
        position:"fixed", 
        bottom:"40px", 
        left:"40px", 
        marginLeft:".5rem", 
        backgroundColor:"white",
        opacity:"80%", 
        display:"flex", 
        flexDirection:"column", 
        borderRadius:"5px", 
        color:"black"}}>
        <span id="close" onClick ={()=>{document.getElementById("close").parentElement.remove(); return false;}} style={{"fontSize":"1.5rem", "marginLeft":"auto", "paddingRight":".5rem", "paddingLeft":".5rem"}}>x</span>
      <span style={{"alignText":"center","fontSize":"1.25rem"}}>Español!</span>
      <label>
        <Switch onChange={handleToggle} checked={isPageOne} />
      </label>
    </div>
    <div className='litanies-page'>
      <h1 style={{color: "#ffffff"}}>Litanies</h1>

      {/* The Litany of the Blessed Virgin Mary */}
      <h2 onClick={() => togglePrayerVisibility(0)} style={{ cursor: 'pointer', color: "#187ae2" }}>
        Letanías de la Santísima Virgen
        </h2>
      <div className='litany'>
        
        {expandedIndex === 0 && (
          <div className='litany-prayer'>
            <ul>
              <li>Señor, ten piedad de nosotros.</li>
              <li> <b>Señor, ten piedad de nosotros. </b></li>
              <li>Cristo, ten piedad de nosotros.</li>
              <li> <b>Cristo, ten piedad de nosotros. </b></li>
              <li>Señor, ten piedad de nosotros.</li>
              <li> <b>Señor, ten piedad de nosotros. </b></li>
              <br></br>
              <li>Cristo, óyenos.</li>
              <li> <b>Cristo, óyenos. </b></li>
              <br></br>
              <li>Cristo, escúchanos.</li>
              <li> <b>Cristo, escúchanos. </b></li>
              <br></br>
              <li>Dios, Padre celestial,</li>
              <li> <b>Ten piedad de nosotros. </b></li>
              <li>Dios, Hijo, Redentor del mundo, </li>
               <li> <b>Ten piedad de nosotros. </b></li>
              <li>Dios, Espíritu Santo,</li>
               <li> <b>Ten piedad de nosotros. </b></li>
              <li>Santísima Trinidad, un solo Dios,</li>
               <li> <b>Ten piedad de nosotros. </b></li>
               <br></br>
              <li>Santa María, </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Santa Madre de Dios, </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Santa Virgen de las Vírgenes, </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Madre de Cristo,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Madre de la Iglesia, </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Madre de la misericordia,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Madre de la divina gracia,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Madre de la esperanza,   </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Madre purísima,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Madre castísima,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Madre siempre virgen, </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Madre inmaculada, </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Madre amable, </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Madre admirable, </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Madre del buen consejo, </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Madre del Creador,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Madre del Salvador, </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Virgen prudentísima,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Virgen digna de veneración,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Virgen digna de alabanza, </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Virgen poderosa,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Virgen clemente,   </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Virgen fiel,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Espejo de justicia,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Trono de la sabiduría,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Causa de nuestra alegría,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Vaso espiritual,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Vaso digno de honor,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Vaso de insigne devoción, </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Rosa mística,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Torre de David,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Torre de marfil,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Casa de oro,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Arca de la Alianza, </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Puerta del cielo, </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Estrella de la mañana,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Refugio de los pecadores, </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Consuelo de los migrantes,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Consoladora de los afligidos, </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Auxilio de los cristianos, </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Reina de los Ángeles,   </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Reina de los Patriarcas, </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Reina de los Profetas,   </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Reina de los Apóstoles,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Reina de los Mártires,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Reina de los Confesores,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Reina de las Vírgenes,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Reina de todos los Santos,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Reina concebida sin pecado original,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Reina asunta a los Cielos, </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Reina del Santísimo Rosario,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Reina de la familia, </li>
              <li> <b>Ruega por nosotros. </b></li>
              <li>Reina de la paz,  </li>
              <li> <b>Ruega por nosotros. </b></li>
              <br></br>
        <li>Cordero de Dios, que quitas el pecado del mundo, </li>
          <li> <b>Perdónanos, Señor. </b></li>
          <br></br>
        <li>Cordero de Dios, que quitas el pecado del mundo,  </li>
        <li> <b>Escúchanos, Señor. </b></li>
        <br></br>
        <li>Cordero de Dios, que quitas el pecado del mundo,  </li>
            <li> <b>Ten misericordia de nosotros. </b></li>
            <br></br>
        <li>Ruega por nosotros, Santa Madre de Dios.</li>
        <li> <b>Para que seamos dignos de las promesas de Cristo.</b></li>
            <br></br>
            <li>ORACIÓN.</li>
      <li><b>Te rogamos nos concedas, 
Señor Dios nuestro, 
gozar de continua salud de alma y cuerpo, 
y por la gloriosa intercesión 
de la bienaventurada siempre Virgen María, 
vernos libres de las tristezas de la vida presente 
y disfrutar de las alegrías eternas. 
Por Cristo nuestro Señor. 
Amén. </b> </li>

            </ul>
          </div>
        )}
      </div>

      {/* The Litany of Humility */}
      <h2 onClick={() => togglePrayerVisibility(1)} style={{ cursor: 'pointer', color: "#187ae2" }}>
        Letanías de la humildad 
        </h2>
      <div className='litany'>

        {expandedIndex === 1 && (
          <div className='litany-prayer'>
            <ul>
                <li> Jesús manso y humilde de Corazón, </li>
                <li> <b> -Óyeme. </b></li>
                <br></br>
                <li> Del deseo de ser lisonjeado,</li>
                <li> <b> Líbrame Jesús.  </b></li>
                <li>Del deseo de ser alabado, </li>
                <li> <b> Líbrame Jesús. </b></li>
                <li> Del deseo de ser honrado,</li>
                <li> <b> Líbrame Jesús. </b></li>
                <li> Del deseo de ser aplaudido, </li>
                <li> <b> Líbrame Jesús. </b></li>
                <li> Del deseo de ser preferido a otros, </li>
                <li> <b> Líbrame Jesús. </b></li>
                <li>Del deseo de ser consultado, </li>
                <li> <b> Líbrame Jesús. </b></li>
                <li> Del deseo de ser aceptado, </li>
                <li> <b> Líbrame Jesús. </b></li>
                <li>Del temor de ser humillado, </li>
                <li> <b> Líbrame Jesús. </b></li>
                <li> Del temor de ser despreciado, </li>
                <li> <b> Líbrame Jesús. </b></li>
                <li> Del temor de ser reprendido, </li>
                <li> <b> Líbrame Jesús. </b></li>
                <li>Del temor de ser calumniado, </li>
                <li> <b> Líbrame Jesús. </b></li>
                <li>Del temor de ser olvidado, </li>
                <li> <b> Líbrame Jesús. </b></li>
                <li>Del temor de ser puesto en ridículo, </li>
                <li> <b> Líbrame Jesús. </b></li>
                <li>Del temor de ser injuriado, </li>
                <li> <b> Líbrame Jesús. </b></li>
                <li>Del temor de ser juzgado con malicia, </li>
                <li> <b> Líbrame Jesús. </b></li>
                <br></br>
                <li>Que otros sean más amados que yo, </li>
                <li> <b> Jesús dame la gracia de desearlo. </b></li>
                <li>Que otros sean más estimados que yo, </li>
                <li> <b> Jesús dame la gracia de desearlo. </b></li>
                <li>Que otros crezcan en la opinión del mundo y yo me eclipse, </li>
                <li> <b> Jesús dame la gracia de desearlo. </b></li>
                <li>Que otros sean alabados y de mí no se haga caso,</li>
                <li> <b> Jesús dame la gracia de desearlo. </b></li>
                <li>Que otros sean empleados en cargos y a mí se me juzgue inútil,</li>
                <li> <b> Jesús dame la gracia de desearlo. </b></li>
                <li>Que otros sean preferidos a mí en todo, </li>
                <li> <b> Jesús dame la gracia de desearlo. </b></li>
                <li>Que los demás sean más santos que yo con tal que yo sea todo lo santo que pueda, </li>
                <li> <b> Jesús dame la gracia de desearlo. </b></li>
                <br></br>
                <li>Oración:</li>
                <li><b>Oh Jesús que, siendo Dios, te humillaste hasta la muerte, y muerte de cruz, para ser ejemplo perenne que confunda nuestro orgullo y amor propio. Concédenos la gracia de aprender y practicar tu ejemplo, para que humillándonos como corresponde a nuestra miseria aquí en la tierra, podamos ser ensalzados hasta gozar eternamente de ti en el cielo.</b></li>
                <li><b> Amén. </b></li>
                
            </ul>
          </div>
        )}
      </div>
 {/* The Litany of the Sacred Heart of Jesus */}
 <h2 onClick={() => togglePrayerVisibility(2)} style={{ cursor: 'pointer', color: "#187ae2" }}>
        Letanías del Sagrado Corazón de Jesús
        </h2>
 <div className='litany'>
        
        {expandedIndex === 2 && (
          <div className='litany-prayer'>
            <ul>
                <li>Señor, ten piedad de nosotros.</li>
                <li> <b> Señor, ten piedad de nosotros.</b></li>
                <li>Cristo, ten piedad de nosotros. </li>
                <li> <b> Cristo, ten piedad de nosotros.</b></li>
                <li>Señor, ten piedad de nosotros.</li>
                <li> <b> Señor, ten piedad de nosotros.</b></li>
                <br></br>
                <li>Cristo, óyenos. </li>
                <li> <b> Cristo, óyenos.</b></li>
                <li>Cristo, escúchanos. </li>
                <li> <b> Cristo, escúchanos.</b></li>
                <br></br>
                <li>Dios, Padre Celestial, ten piedad de nosotros.</li>
                 <li> <b>Ten piedad de nosotros. </b></li>
                <li>Dios Hijo, Redentor del mundo, </li>
                <li> <b>Ten piedad de nosotros. </b></li>
                <li>Dios, Espíritu Santo,</li>
                 <li> <b>Ten piedad de nosotros. </b></li>
                <li>Santísima Trinidad, que eres un solo Dios, </li>
                <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, Hijo del Eterno Padre, ten piedad de nosotros.</li>
                 <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, formado en el seno de la Virgen Madre por el Espíritu Santo, </li>
                <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, unido sustancialmente al Verbo de Dios,</li>
                <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, de infinita majestad, </li>
                <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, templo santo de Dios, </li>
                <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, tabernáculo del Altísimo,</li>
                <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, casa de Dios y puerta del cielo,</li>
                <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, horno ardiente de caridad,</li>
                <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, santuario de la justicia y del amor,</li>
                <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, lleno de bondad y de amor, </li>
                <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, abismo de todas las virtudes,</li>
                <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, digno de toda alabanza,</li>
                <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, Rey y centro de todos los corazones,</li>
                 <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, en quien se hallan todos los tesoros de la sabiduría, y de la ciencia, ten piedad de nosotros.</li>
                 <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, en quien reside toda la plenitud de la divinidad, ten piedad de nosotros.</li>
                 <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, en quien el Padre se complace, </li>
                <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, de cuya plenitud todos hemos recibido, </li>
                <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, deseado de los eternos collados,</li>
                <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, paciente y lleno de misericordia,</li>
                 <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, generoso para todos los que te invocan,</li>
                 <li> <b>ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, fuente de vida y santidad,</li>
                 <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, propiciación por nuestros pecados,</li>
                 <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, colmado de oprobios,</li>
                 <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, triturado por nuestros pecados, </li>
                <li> <b>Ten piedad de nosotros. </b></li>
                <li> Corazón de Jesús, hecho obediente hasta la muerte, </li>
                <li> <b>Ten piedad de nosotros. </b></li>
                <li> Corazón de Jesús, traspasado por una lanza,</li>
                 <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, fuente de todo consuelo,</li>
                 <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, vida y resurrección nuestra,</li>
                 <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, paz y reconciliación nuestra,</li>
                 <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, víctima por los pecadores,</li>
                <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, salvación de los que en ti esperan, </li>
                <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, esperanza de los que en ti mueren, </li>
                <li> <b>Ten piedad de nosotros. </b></li>
                <li>Corazón de Jesús, delicia de todos los santos,</li>
                 <li> <b>Ten piedad de nosotros. </b></li>
                 <br></br>
                <li> Cordero de Dios, que quitas el pecado del mundo, </li>
                <li> <b>Perdónanos Señor.</b></li>
                <li>Cordero de Dios, que quitas el pecado del mundo,</li>
                <li> <b>Óyenos Señor</b></li>
                <li>Cordero de Dios, que quitas el pecado del mundo, </li>
                <li> <b>Ten piedad de nosotros. </b></li>
                <br></br>
                <li>Jesús, manso y humilde de Corazón, </li>
                <li><b>haz nuestro corazón semejante al tuyo.</b></li>
                <br></br>
                <li>Oración</li>
                <li><b>Oh Dios todopoderoso y eterno, mira el Corazón de tu amantísimo Hijo, las alabanzas y satisfacciones que en nombre de los pecadores te ofrece y concede el perdón a éstos que piden misericordia en el nombre de tu mismo Hijo, Jesucristo, el cual vive y reina contigo por los siglos de los siglos. Amén. </b></li>
            </ul>
          </div>
        )}
      </div>
      {/* Litany For Souls in Purgatory */}
      <h2 onClick={() => togglePrayerVisibility(3)} style={{ cursor: 'pointer', color: "#187ae2" }}>
         Letanías Por Las Almas Del Purgatorio
         </h2>
      <div className='litany'>
        
         {expandedIndex === 3 && (
           <div className='litany-prayer'>
             <ul>
              <li>Dios omnipotente, Padre de bondad y de misericordia, apiádate de las benditas Almas del Purgatorio y ayuda a mis queridos padres y antepasados.</li>
             <br></br>
              <li> Señor ten Misericordia de nosotros. </li>
              <li> <b>Señor ten Misericordia de nosotros. </b></li>
              <li> Cristo ten Misericordia de nosotros.</li>
              <li> <b>Cristo ten Misericordia de nosotros.</b></li>
              <li> Señor ten Misericordia de nosotros.  </li>
              <li> <b>Señor ten Misericordia de nosotros. </b></li>
              <li> Cristo ten Misericordia de nosotros.  </li>
              <li> <b>Cristo ten Misericordia de nosotros.</b></li>
              <br></br>
              <li> Cristo, óyenos.</li>
              <li> <b> Cristo, óyenos.</b></li>
              <li> Cristo, escúchanos.</li>
             <li> <b> Cristo, escúchanos.</b></li>
             <br></br>
              <li> Dios Padre celestial; ten misericordia de nosotros.  </li>
              <li> <b> Ten misericordia de nosotros.</b></li>
              <li> Dios Hijo Redentor del mundo; </li>
              <li> <b> Ten misericordia de nosotros.</b></li>
              <li> Dios Espíritu Santo;</li>
              <li> <b> Ten misericordia de nosotros.</b></li>
              <li> Santísima Trinidad, un solo Dios; </li>
              <li> <b> Ten misericordia de nosotros.</b></li>
              <li> Santa María, Auxiliadora de las almas del purgatorio;</li>
              <li> <b> Ten misericordia de nosotros.</b></li>
              <br></br>
              <li> Por mis padres, abuelos, bisabuelos y tatarabuelos… ¡Jesús mío, misericordia!</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por mis hermanos y parientes más cercanos… </li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por mis benefactores temporales y espirituales…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por mis amigos y vecinos… </li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por cuantos debo amor y oración…  </li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por cuantos he perjudicado y dañado…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los que me han hecho daño… </li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los que están más próximos a la unión con Cristo…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los que más desean estar junto a Dios…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los que más sufren…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los que están lejos de la liberación…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los que menos auxilio reciben…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los que más lo merecen por sus servicios a la Iglesia…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los que fueron ricos aquí, y allí son los más pobres…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los poderosos, que ahora son como viles siervos…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los ciegos que ahora reconocen su ceguera…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los vanidosos que malgastaron su tiempo…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los pobres que no buscaron las riquezas divinas…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los tibios que muy poca oración han hecho…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los perezosos que han descuidado tantas obras buenas…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los de poca fe que descuidaron los santos Sacramentos…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los reincidentes que sólo por un milagro de la gracia se han salvado…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los padres que no vigilaron bien a sus hijos…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los superiores poco atentos a la salvación de sus súbditos…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los pobres hombres, que casi sólo se preocuparon del dinero y del placer…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los de espíritu mundano que no aprovecharon sus riquezas o talentos para el Cielo…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los necios, que vieron morir a tantos y no pensaron en su propia muerte…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los que no se aseguraron la vida eterna… </li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los que tienen una sentencia severa por las grandes responsabilidades encomendadas a ellos…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los pontífices, reyes y príncipes…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los obispos y sus consejeros… </li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los maestros y pastores de almas…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los sacerdotes de nuestra diócesis…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los sacerdotes y religiosos de la Iglesia católica…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los defensores de la santa fe… </li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los caídos en los campos de batalla… </li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los sepultados en los mares… </li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los muertos repentinamente… </li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por los fallecidos sin recibir los santos sacramentos…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <li> Por aquellos que morirán dentro de las próximas 24 horas…</li>
              <li> <b> ¡Jesús mío, misericordia!</b></li>
              <br></br>
              <li> Dale Señor, a todas las almas del purgatorio el descanso eterno. </li>
              <li><b> Y brillen para ellas la luz perpetua.</b></li>
              <li> Que descansen en paz.</li>
              <li><b> Amén.</b></li>
              <br></br>
              <li> Oremos:</li>
              <li> <b>Oh Dios, Creador y Redentor del mundo, perdona los pecados de tus servidores y servidoras, que la negligencia de los hombres olvida en el Purgatorio.
Te rogamos que nuestras oraciones les permitan obtener la liberación por la que tanto suspiran. Señor, que nos mandas orar por nuestros seres queridos, dígnate abrir las puertas del Cielo a las almas que partieron de este mundo y concédeles el descanso y la felicidad eterna. Te lo suplicamos por intercesión de tu Santa Madre y de todos los santos. Que así sea.</b></li>
<li> <b>Amén.</b></li>
             </ul>
          </div>
        )}
        </div>

  {/* Litany For Saints */}
   <h2 onClick={() => togglePrayerVisibility(4)} style={{ cursor: 'pointer', color: "#187ae2" }}>
         Letanías De Los Santos
         </h2>
  <div className='litany'>
         
      {expandedIndex === 4 && (
           <div className='litany-prayer'>
             <ul>
            <li>Señor, ten piedad de nosotros.</li>
            <li> <b>Señor, ten piedad de nosotros.</b></li>
            <li>Cristo, ten piedad de nosotros.</li>
            <li> <b>Cristo, ten piedad de nosotros.</b></li>
            <li> Señor, ten piedad de nosotros.</li>
            <li> <b>Señor, ten piedad de nosotros.</b></li>
            <br></br>
            <li> Cristo, óyenos.</li>
            <li><b>Cristo, óyenos.</b></li>
            <br></br>
            <li>Cristo escúchanos.</li>
            <li><b>Cristo escúchanos.</b></li>
            <br></br>
            <li> Dios Padre Celestial, ten misericordia de nosotros.</li>
            <li><b>Ten misericordia de nosotros.</b></li>
            <li>Dios Hijo, Redentor del mundo, </li>
            <li><b>Ten misericordia de nosotros.</b></li>
            <li>Dios Espíritu Santo,</li>
            <li><b>Ten misericordia de nosotros.</b></li>
            <li>Santísima Trinidad que eres un solo Dios,</li>
            <li><b>Ten misericordia de nosotros.</b></li>
            <br></br>
            <li>Santa María Inmaculada, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>Santa Madre de Dios, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>Santa Virgen de las Vírgenes, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Miguel, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li> San Gabriel, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Rafael, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>Todos los Santos Ángeles y Arcángeles,</li>
            <li><b>Rueguen por nosotros.</b></li>
            <li>Todos los santos coros de los bienaventurados Espíritus,</li>
            <li><b>Rueguen por nosotros.</b></li>
            <li>San Juan Bautista, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San José, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>Todos los Santos Patriarcas y Profetas,</li>
            <li><b>Rueguen por nosotros.</b></li>
            <li>San Pedro, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Pablo, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Andrés, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Juan, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>Santo Tomás, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Santiago, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Felipe, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Bartolomé, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Mateo, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Simón, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Tadeo, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Matías, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Bernabé, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Lucas, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Marcos, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>Todos los santos Apóstoles y Evangelistas,</li>
            <li><b>Rueguen por nosotros.</b></li>
            <li>Todos los santos Discípulos del Señor,</li>
            <li><b>Rueguen por nosotros.</b></li>
            <li>Todos los santos Inocentes,</li>
            <li><b>Rueguen por nosotros.</b></li>
            <li>San Esteban, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Lorenzo, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Vicente, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Fabián y San Sebastián,</li>
            <li><b>Rueguen por nosotros.</b></li>
            <li>San Juan y San Pablo,</li>
            <li><b>Rueguen por nosotros.</b></li>
            <li>San Damián y San Cosme,</li>
            <li><b>Rueguen por nosotros.</b></li>
            <li>San Gervasio, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>Todos los santos Mártires,</li>
            <li><b>Rueguen por nosotros.</b></li>
            <li>San Silvestre, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Gregorio, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Ambrosio, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Agustín, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Jerónimo, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Martín, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Nicolás, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>Todos los santos Pontífices y Confesores,</li>
            <li><b>Rueguen por nosotros.</b></li>
            <li>Todos los santos Doctores,</li>
            <li><b>Rueguen por nosotros.</b></li>
            <li>San Antonio, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Benito, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Bernardo, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>Santo Domingo, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Francisco de Asís, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Francisco Javier, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Ignacio, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Enrique, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>Santo Toribio, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>Todos los santos Sacerdotes y Levitas,</li>
            <li><b>Rueguen por nosotros.</b></li>
            <li>Todos los santos Monjes y Ermitaños,</li>
            <li><b>Rueguen por nosotros.</b></li>
            <li>Santa María Magdalena, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>Santa Agueda, (Ágata) </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>Santa Lucía, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>Santa Inés, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>Santa Cecilia, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>Santa Teresa de Jesús, </li>
            <li>Santa Rita, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>Santa Catalina, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>Santa Anastasia, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>Santa Rosa de Lima, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>Santa Teresa de los Andes, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>San Alberto Hurtado, </li>
            <li><b>Ruega por nosotros.</b></li>
            <li>Todas las santas Vírgenes, y Viudas, </li>
            <li><b>Rueguen por nosotros.</b></li>
            <br></br>
            <li>Todos los santos y santas de Dios, intercedan por nosotros,</li>
            <li>Sed propicios, perdónanos, Señor.</li>
            <li><b>Perdónanos, Señor.</b></li>
            <br></br>
            <li>Sed propicio, Óyenos, Señor.</li>
            <li><b>Óyenos, Señor.</b></li>
            <br></br>
            <li>De todo mal, líbranos Señor.</li>
            <li><b>Líbranos Señor.</b></li>
            <li>De todo pecado,</li>
            <li><b>Líbranos Señor.</b></li>
            <li>De vuestra ira,</li>
            <li><b>Líbranos Señor.</b></li>
            <li>De una muerte repentina e imprevista,</li>
            <li><b>Líbranos Señor.</b></li>
            <li>De las asechanzas del demonio,</li>
            <li><b>Líbranos Señor.</b></li>
            <li>De toda ira, odio y mala voluntad,</li>
            <li><b>Líbranos Señor.</b></li>
            <li>Del espíritu de fornicación,</li>
            <li><b>Líbranos Señor.</b></li>
            <li>Del rayo y de la tempestad,</li>
            <li><b>Líbranos Señor.</b></li>
            <li>De la muerte eterna,</li>
            <li><b>Líbranos Señor.</b></li>
            <li>Por el misterio de vuestra santa Encarnación,</li>
            <li><b>Líbranos Señor.</b></li>
            <li>Por vuestra venida,</li>
            <li><b>Líbranos Señor.</b></li>
            <li>Por vuestra Natividad,</li>
            <li><b>Líbranos Señor.</b></li>
            <li>Por vuestro Bautismo y santo ayuno,</li>
            <li><b>Líbranos Señor.</b></li>
            <li>Por vuestra Cruz y Pasión,</li>
            <li><b>Líbranos Señor.</b></li>
            <li>Por vuestra Muerte y Sepultura,</li>
            <li><b>Líbranos Señor.</b></li>
            <li>Por vuestra santa Resurrección,</li>
            <li><b>Líbranos Señor.</b></li>
            <li>Por vuestra, admirable Ascensión,</li>
            <li><b>Líbranos Señor.</b></li>
            <li>Por la venida del Espíritu Santo Consolador,</li>
            <li><b>Líbranos Señor.</b></li>
            <br></br>
            <li>Que levantes nuestros corazones a desear las cosas celestiales, te rogamos Señor.</li>
            <li><b>Te rogamos Señor.</b></li>
            <li>Que te dignes recompensar con bienes eternos a todos nuestros bienhechores,</li>
            <li><b>Te rogamos Señor.</b></li>
            <li>Que libres de la muerte eterna a nuestras almas y  las de nuestros hermanos y parientes,</li>
            <li><b>Te rogamos Señor.</b></li>
            <li>Que te dignes darnos y conservarnos los frutos de la tierra,</li>
            <li><b>Te rogamos Señor.</b></li>
            <li>Que te dignes conceder el eterno descanso a todos los fieles difuntos,</li>
            <li><b>Te rogamos Señor.</b></li>
            <li>Que te dignes oírnos,</li>
            <li><b>Te rogamos Señor.</b></li>
            <br></br>
            <li>Cordero de Dios, que quitas los pecados del mundo, perdónanos Señor.</li>
            <li><b> Perdónanos Señor.</b></li>
            <br></br>
            <li>Cordero de Dios, que quitas los pecados del mundo, óyenos Señor.</li>
            <li><b>Óyenos, Señor.</b></li>
            <br></br>
            <li>Cordero de Dios, que quitas los pecados del mundo, ten misericordia de nosotros.</li>
            <li><b>Ten misericordia de nosotros.</b></li>
            <br></br>
            <li>Cristo óyenos.</li>
            <li><b>Cristo óyenos.</b></li>
            <br></br>
            <li>Cristo, escuchadnos.</li>
            <li><b>Cristo, escuchadnos.</b></li>
            <br></br>
            <li>¡Oh Dios! ten piedad de nosotros.</li>
            <li><b>Ten misericordia de nosotros.</b></li>
            <br></br>
            <li>Cristo, apiádate de nosotros.</li>
            <li><b>Apiádate de nosotros.</b></li>
            <br></br>
            <li>¡Oh Dios! compadécete de nosotros.</li>
            <li><b>Compadécete de nosotros.</b></li>
            <br></br>
            <li><b>Padre nuestro...</b></li>
            <br></br>
            <li><b>Amen.</b></li>
    
             </ul>


             </div>
      )}
  </div>

    {/* Litany For Trust */}
    <h2 onClick={() => togglePrayerVisibility(5)} style={{ cursor: 'pointer', color: "#187ae2" }}>
         Letanía De La Confianza
         </h2>
  <div className='litany'>

      {expandedIndex === 5 && (
           <div className='litany-prayer'>
             <ul>
            <li>De la creencia de que tengo que ganar Tu amor.  </li>
            <li> <b> Líbrame Jesús. </b></li>
            <li>Del miedo a no ser digno de ser amado. </li>
            <li> <b> Líbrame Jesús. </b></li>
            <li>De la falsa seguridad de pensar que soy autosuficiente. </li>
            <li> <b> Líbrame Jesús. </b></li>
            <li>Del miedo de que confiar en ti me dejará en la miseria. </li>
            <li> <b> Líbrame Jesús. </b></li>
            <li>De toda sospecha de Tus palabras y promesas. </li>
            <li> <b> Líbrame Jesús. </b></li>
            <li>De la rebeldía contra depender de Ti como un niño. </li>
            <li> <b> Líbrame Jesús. </b></li>
            <li>De las negaciones y las reticencias a aceptar Tu voluntad. </li>
            <li> <b> Líbrame Jesús. </b></li>
            <li>De la ansiedad por el futuro. </li>
            <li> <b> Líbrame Jesús. </b></li>
            <li>Del resentimiento o la excesiva preocupación por el pasado. </li>
            <li> <b> Líbrame Jesús. </b></li>
            <li>Del incansable egoísmo en el momento presente. </li>
            <li> <b> Líbrame Jesús. </b></li>
            <li>De la incredulidad en Tu amor y presencia. </li>
            <li> <b> Líbrame Jesús. </b></li>
            <li>Del miedo a ser pedido dar más de lo que tengo. </li>
            <li> <b> Líbrame Jesús. </b></li>
            <li>De la creencia de que mi vida no tiene sentido o valor. </li>
            <li> <b> Líbrame Jesús. </b></li>
            <li>Del miedo a lo que el amor demanda. </li>
            <li> <b> Líbrame Jesús. </b></li>
            <li>Del desánimo. </li>
            <li> <b> Líbrame Jesús. </b></li>
            <br></br>
            <li>Que Tú estás continuamente sosteniéndome, apoyándome, amándome. Jesús, en Ti confío.</li>
            <li> <b> Jesús, en Ti confío. </b></li>
            <li>Que Tu amor va más allá de mis pecados y mis defectos, y me transforma.</li>
            <li> <b> Jesús, en Ti confío. </b></li>
            <li>Que no saber lo que el mañana traerá es una invitación a apoyarse en Ti.</li>
            <li> <b> Jesús, en Ti confío. </b></li>
            <li>Que Tú estás conmigo en mi sufrimiento.</li>
            <li> <b> Jesús, en Ti confío. </b></li>
            <li>Que mi sufrimiento, unido al Tuyo, dará fruto en esta vida y en la siguiente.</li>
            <li> <b> Jesús, en Ti confío. </b></li>
            <li>Que no me dejarás huérfano, que Tú estás presente en Tu Iglesia.</li>
            <li> <b> Jesús, en Ti confío. </b></li>
            <li>Que Tu plan es mejor que cualquier otra cosa.</li>
            <li> <b> Jesús, en Ti confío. </b></li>
            <li>Que Tú siempre me escuchas, y en Tu bondad siempre me respondes.</li>
            <li> <b> Jesús, en Ti confío. </b></li>
            <li>Que Tú me das la gracia para aceptar el perdón y para perdonar a los demás.</li>
            <li> <b> Jesús, en Ti confío. </b></li>
            <li>Que Tú me das toda la fuerza que necesito para lo que se me ha pedido.</li>
            <li> <b> Jesús, en Ti confío. </b></li>
            <li>Que mi vida es un regalo.</li>
            <li> <b> Jesús, en Ti confío. </b></li>
            <li>Que Tú me enseñarás a confiar en Ti. </li>
            <li> <b> Jesús, en Ti confío. </b></li>
            <li>Que Tú eres mi Señor y mi Dios.</li>
            <li> <b> Jesús, en Ti confío. </b></li>
            <li>Que yo soy Tu amado.</li>
            <li> <b> Jesús, en Ti confío. </b></li>

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
