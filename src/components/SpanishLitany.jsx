import React, { useState } from 'react';
import './SpanishLitany.css';

const SpanishLitany = () => {
  // State to manage visibility of prayer sections
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to toggle the visibility of the prayer section
  const togglePrayerVisibility = (index) => {
    // Toggle the section: if it's open, close it; if it's closed, open it
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
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
              <li>Trono de la sabiduría, , ruega por nosotros. </li>
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
                <li>orazón de Jesús, Hijo del Eterno Padre, ten piedad de nosotros.</li>
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
    </div>
  );
};

export default SpanishLitany;


// Spanish  Litany link 
// https://www.vatican.va/special/rosary/documents/litanie-lauretane_sp.html



// humility litany
// https://www.ewtn.com/es/catolicismo/devociones/letanias-de-humildad-15167