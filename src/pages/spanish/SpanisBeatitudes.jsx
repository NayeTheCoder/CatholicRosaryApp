import { Link } from 'react-router-dom';
import '../../styles/PrayersPage.css';

const SpanisBeatitudes = () => {
  return (
    <div className="prayers-page">
      <h1 className="page-title">Las Bienaventuranzas</h1>
      <div className="quote">
        <p className="BeatitudesVerse">
        Mateo 5:1-12 <br />
          “Cuando vio a las multitudes, subió a la ladera de una montaña y se sentó. Sus discípulos se le acercaron, tomó él la palabra y comenzó a enseñarles diciendo: <br />
          ‘Dichosos los pobres en espíritu, porque el reino de los cielos les pertenece. <br />
          ‘Dichosos los que sufren, porque serán consolados. <br />
          ‘Dichosos los humildes, porque recibirán la tierra como herencia. <br />
          ‘Dichosos los que tienen hambre y sed de justicia, porque serán saciados. <br />
          ‘Dichosos los compasivos, porque serán tratados con compasión. <br />
          ‘Dichosos los de corazón limpio, porque ellos verán a Dios. <br />
          ‘Dichosos los que trabajan por la paz, porque serán llamados hijos de Dios. <br />
          ‘Dichosos los perseguidos por causa de la justicia, porque el reino de los cielos les pertenece. <br />
          ‘Dichosos serán ustedes cuando por mi causa la gente los insulte, los persiga y levante contra ustedes toda clase de calumnias. <br />
          ‘Alégrense y llénense de júbilo, porque les espera una gran recompensa en el cielo. Así también persiguieron a los profetas que los precedieron a ustedes.’”
        </p>
      </div>
      <img src="./images/beatitudes-img.PNG" alt="Beatitudes" />
    </div>
  );
};

export default SpanisBeatitudes;