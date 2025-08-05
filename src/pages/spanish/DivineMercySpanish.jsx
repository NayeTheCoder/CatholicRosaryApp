import React, { useState, useEffect } from "react";
import "../../styles/DivineMercySpanish.css";
import { useNavigate } from "react-router-dom";
import Switch from "react-switch";

// Reusable prayer components
const Prayer = ({ title, children }) => (
  <div className="Divine-Mercy-prayer-Spanish">
    <h2>{title}</h2>
    <p>{children}</p>
  </div>
);

const DivineMercySpanish = () => {
  const [isPageOne, setIsPageOne] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsPageOne(!isPageOne);
  };
  // State to control visibility of specific mysteries (each with a unique index)
  const [visibleMysteries, setVisibleMysteries] = useState([]);

  // Function to toggle the visibility of the repeated lines
  const toggleVisibility = (index) => {
    setVisibleMysteries((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  // Data for the mystery sections (simplified)
  const mysteryData = [
    "En cada grano menor del Rosario, cuando normalmente se dice el Ave María, diga",
    "En cada grano menor del Rosario, cuando normalmente se dice el Ave María, diga",
    "En cada grano menor del Rosario, cuando normalmente se dice el Ave María, diga",
    "En cada grano menor del Rosario, cuando normalmente se dice el Ave María, diga",
    "En cada grano menor del Rosario, cuando normalmente se dice el Ave María, diga",
  ];

  useEffect(() => {
    if (!isPageOne) {
      navigate("/divine-mercy");
    }
  }, [isPageOne]);

  return (
    <>
      <div className="Divine-Mercy-container-Spanish">
        <h1>Divina Misericordia Coronilla</h1>
        <img
          src="https://2.bp.blogspot.com/-dr3TdWdX3rs/V_vvvgrAF_I/AAAAAAAADKU/97DfidLQ3f8B7C-jqtDL45JK4NICmMiMACLcB/s1600/0%2Bdivina-misericordia.jpg"
          alt="Divine Mercy Jesus appearing in front of St Faustina showing the rays of mercy"
          className="Divine-Mercy-image"
        />
        <p className="Divine-Mercy-subtitle">
          El senor es compasivo y misericordioso - Salmo 102
        </p>
        {/* Images side by side */}
        <div className="Divine-Mercy-images-containerSpanish">
          <img
            src="https://3.bp.blogspot.com/_KABQ0S7_Hfg/S8DH5k6q65I/AAAAAAAAAhQ/bMu-xsiXG1g/s1600/Divinamisericordia.jpg"
            alt="Imagen de la Divina Misericordia, Jesus en ti Confio"
            className="Divine-Mercy-image"
          />
          <img
            src="https://fundacioncarf.org/wp-content/uploads/2023/02/divina-misericordia-coronilla-600x800.png"
            alt="Divine Mercy Rosary Guide"
            className="Divine-Mercy-image"
          />
        </div>

        {/* The opening prayers */}
        <Prayer title="La señal de la Cruz">
          En el nombre del Padre, del Hijo y del Espíritu Santo. Amén.
        </Prayer>
        <Prayer title="Oración de Apertura">
          Expiraste, Jesús, pero la fuente de vida brotó para las almas y el mar
          de misericordia se abrió para el mundo entero. Oh fuente de vida,
          insondable Misericordia Divina, abarca al mundo entero y derrámate
          sobre nosotros
        </Prayer>
        <Prayer title="">
          Oh Sangre y Agua que brotaste del Corazón de Jesús, como una Fuente de
          Misericordia para nosotros (3 veces)
        </Prayer>
        <Prayer title="Padre Nuestro">
          Padre nuestro que estás en el cielo, santificado sea tu Nombre; venga
          a nosotros tu Reino; hágase tu voluntad en la tierra como en el cielo.
          Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como
          también nosotros perdonamos a los que nos ofenden; no nos dejes caer
          en la tentación, y líbranos del mal. Amén.
        </Prayer>
        <Prayer title="Ave Maria">
          Dios te salve, María, llena eres de gracia; el Señor es contigo.
          Bendita Tú eres entre todas las mujeres, y bendito es el fruto de tu
          vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros,
          pecadores, ahora y en la hora de nuestra muerte. Amén
        </Prayer>
        <Prayer title="Credo de los Apóstoles">
          Creo en Dios, Padre Todopoderoso, Creador del cielo y de la tierra.
          Creo en Jesucristo, su único Hijo, Nuestro Señor, Que fue concebido
          por obra y gracia del Espíritu Santo, nació de Santa María Virgen,
          padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y
          sepultado, descendió a los infiernos, al tercer día resucitó de entre
          los muertos, subió a los cielos y está sentado a la derecha de Dios,
          Padre todopoderoso. Desde allí ha de venir a juzgar a vivos y muertos.
          Creo en el Espíritu Santo, la santa Iglesia católica, la comunión de
          los santos, el perdón de los pecados, la resurrección de la carne y la
          vida eterna. Amén
        </Prayer>

        {/* <Prayer title="The Eternal Father">
        Eternal Father, I offer You the Body and Blood, Soul and Divinity of Your Dearly Beloved Son, Our Lord, Jesus Christ, in atonement for our sins and those of the whole world.
      </Prayer> */}

        {/* Render mystery sections dynamically */}
        {mysteryData.map((title, index) => (
          <div key={index} className="Divine-Mercy-mystery-container-Spanish">
            {/* Mystery title */}

            {/* Repeated prayer for each mystery */}
            <Prayer title="Padre Eterno">
              Padre Eterno, Te ofrezco el Cuerpo, la Sangre, el Alma y la
              Divinidad de Tu amadísimo Hijo, Nuestro Señor Jesucristo, como
              propiciación de nuestros pecados y los del mundo entero.
            </Prayer>
            <h2
              id={`mystery-${index}`}
              onClick={() => toggleVisibility(index)}
              style={{ cursor: "pointer" }}
            >
              {title} (Haz clic para mostrar la oración)
            </h2>

            {/* Expanding content */}
            {visibleMysteries.includes(index) && (
              <div className="Divine-Mercy-mystery-content-Spanish">
                <p>
                  Por Su dolorosa Pasión, ten misericordia de nosotros y del
                  mundo entero.
                </p>
                <p>
                  Por Su dolorosa Pasión, ten misericordia de nosotros y del
                  mundo entero.
                </p>
                <p>
                  Por Su dolorosa Pasión, ten misericordia de nosotros y del
                  mundo entero.
                </p>
                <p>
                  Por Su dolorosa Pasión, ten misericordia de nosotros y del
                  mundo entero.
                </p>
                <p>
                  Por Su dolorosa Pasión, ten misericordia de nosotros y del
                  mundo entero.
                </p>
                <p>
                  Por Su dolorosa Pasión, ten misericordia de nosotros y del
                  mundo entero.
                </p>
                <p>
                  Por Su dolorosa Pasión, ten misericordia de nosotros y del
                  mundo entero.
                </p>
                <p>
                  Por Su dolorosa Pasión, ten misericordia de nosotros y del
                  mundo entero.
                </p>
                <p>
                  Por Su dolorosa Pasión, ten misericordia de nosotros y del
                  mundo entero.
                </p>
                <p>
                  Por Su dolorosa Pasión, ten misericordia de nosotros y del
                  mundo entero.
                </p>
              </div>
            )}
          </div>
        ))}

        <Prayer title="Invocación: Al final de la corona, la siguiente oración se reza tres veces seguidas">
          Santo Dios, Santo Fuerte, Santo Inmortal, ten misericordia de nosotros
          y del mundo entero.
        </Prayer>

        <Prayer title="Oración para concluir (opcional)">
          Oh Dios Eterno, en quien la misericordia es infinita y el tesoro de
          compasión inagotable, vuelve a nosotros Tu mirada bondadosa y aumenta
          Tu misericordia en nosotros, para que en momentos difíciles no nos
          desesperemos ni nos desalentemos, sino que, con gran confianza, nos
          sometamos a Tu santa voluntad, que es el Amor y la Misericordia
          mismos. Amén.
        </Prayer>
      </div>
    </>
  );
};

export default DivineMercySpanish;