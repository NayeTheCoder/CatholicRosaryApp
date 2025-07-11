import React, { useState, useEffect } from "react";
import "./SpanishRosary.css";
import { useNavigate } from "react-router-dom";
import Switch from "react-switch";

const SpanishRosary = () => {
  const [isPageOne, setIsPageOne] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsPageOne(!isPageOne);
  };
  // State to control visibility of specific mysteries (each with a unique index)
  const [visibleMysteries, setVisibleMysteries] = useState([]);

  // Function to toggle the visibility of a mystery based on its index
  const toggleVisibility = (index) => {
    setVisibleMysteries((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  useEffect(() => {
    if (!isPageOne) {
      navigate("/long-rosary");
    }
  }, [isPageOne]);

  return (
    <>
      <div
        style={{
          position: "fixed",
          "bottom":"40px", "right":"40px",
          marginLeft: ".5rem",
          backgroundColor: "white",
          opacity: "80%",
          display: "flex",
          flexDirection: "column",
          "borderRadius": "5px",
          color: "black",
        }}
      >
        <span
          id="close"
          onClick={() => {
            document.getElementById("close").parentElement.remove();
            return false;
          }}
          style={{
            fontSize: "1.5rem",
            marginLeft: "auto",
            paddingRight: ".5rem",
            paddingLeft: ".5rem",
          }}
        >
          x
        </span>
        <span style={{ alignText: "center", fontSize: "1.25rem" }}>
          Español!
        </span>
        <label>
          <Switch onChange={handleToggle} checked={isPageOne} />
        </label>
      </div>

      <div className="el-rosario-container">
        <h1>El Santo Rosario</h1>

        <img
          src="https://catholic-link.com/wp-content/uploads/2017/03/7-1-2.jpg"
          alt="El Santo Rosario"
          className="rosary-image"
          style={{ width: "75%", height: "auto", marginBottom: "20px" }}
        />

        {/* Example of a prayer structure */}
        <div className="el-rosario">
          <h2>
            La señal de la Cruz <input type="checkbox" />
          </h2>
          <p>
            {" "}
            Por la señal de la Santa Cruz, de nuestros enemigos, líbranos Señor
            Dios nuestro. En el nombre del Padre, del Hijo y del Espíritu Santo.
          </p>
        </div>

        <div className="el-rosario">
          <h2>
            Credo de los Apóstoles <input type="checkbox" />
          </h2>
          <p>
            Creo en Dios Padre, Todopoderoso, Creador del cielo y de la tierra.
            Creo en Jesucristo su único Hijo, nuestro Señor, que fue concebido
            por obra y gracia del Espíritu Santo, nació de la Santa María
            Virgen, padeció bajo el poder de Poncio Pilato; fué crucificado,
            muerto y sepultado, descendió a los infiernos, al tercer día
            resucitó de entre los muertos, subió al cielo y está sentado a la
            derecha de Dios, Padre Todopoderoso. Desde allí ha de venir a juzgar
            a vivos y muertos. Creo en el Esprítu Santo, la Santa Iglesia
            Católica, la comunión de los santos, el perdón de los pecados, la
            resurrección de la carne y la vida eterna. Amén.{" "}
          </p>
        </div>
        <div className="el-rosario">
          <h2>
            Padre Nuestro <input type="checkbox" />
          </h2>
          <p>
            Padre nuestro, que estás en el cielo, santificado sea tu Nombre;
            venga a nosotros tu reino; hágase tu voluntad en la tierra como en
            el cielo. Danos hoy nuestro pan de cada día; perdona nuestras
            ofensas como también nosotros perdonamos a los que nos ofenden; no
            nos dejes caer en la tentación, y líbranos del mal. Amén.
          </p>
        </div>

        <div className="el-rosario">
          <h2> 3 Ave María</h2> <input type="checkbox" />{" "}
          <input type="checkbox" /> <input type="checkbox" />
          <p>
            Dios te salve, María, llena eres de gracia, el Seńor es contigo.
            Bendita eres entre todas las mujeres, y bendito es el fruto de tu
            vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros,
            pecadores, ahora y en la hora de nuestra muerte. Amén
          </p>
        </div>
        <div className="el-rosario">
          <h2>
            {" "}
            Gloria <input type="checkbox" />{" "}
          </h2>
          <p>
            Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el
            principio, ahora y siempre, y por los siglos de los siglos. Amén
          </p>
        </div>

        {/* This is the first Mystery section where when you click on the day it expands to show the text */}
        <div className="el-rosario">
          <h2>Primer Mysterio</h2>

          <h2
            id="glorious"
            onClick={() => toggleVisibility(0)}
            style={{ cursor: "pointer" }}
          >
            Misterios Gozosos (lunes y sábado)
          </h2>

          {/* The Glorious Mystery clickable*/}
          {visibleMysteries.includes(0) && (
            <div>
              <h3>
                El primer misterio gozoso: La Anunciación del Angel a Maria
              </h3>
              <p> Fruto del misterio: La humildad </p>
            </div>
          )}

          {/* The 1st Sorrowful Mystery clickable*/}
          <h2
            id="sorrowful"
            onClick={() => toggleVisibility(1)}
            style={{ cursor: "pointer" }}
          >
            Misterios Dolorosos(martes y viernes)
          </h2>

          {visibleMysteries.includes(1) && (
            <div>
              <h2>
                El primer misterio doloroso: la Agonia de Jesus en el huerto
              </h2>
              <p> Fruto del misterio: El dolor por el pecado</p>
            </div>
          )}

          {/* The 1st Joyful Mystery clickable*/}
          <h2
            id="joyful"
            onClick={() => toggleVisibility(2)}
            style={{ cursor: "pointer" }}
          >
            Misterios Gloriosos(miercoles y domingos)
          </h2>

          {visibleMysteries.includes(2) && (
            <div>
              <h2>
                El primer misterio Glorioso: La Resurreccion de Nuestro Senor
                Jesucristo
              </h2>
              <p>Fruto del misterio: La fe </p>
            </div>
          )}
          <h2
            id="luminous"
            onClick={() => toggleVisibility(3)}
            style={{ cursor: "pointer" }}
          >
            {/* The 1st Luminous Mystery clickable*/}
            Misterios Luminosos(jueves)
          </h2>

          {visibleMysteries.includes(3) && (
            <div>
              <h2>
                El primer misterio Luminoso: El Bautismo de Jesus en el Jordan
              </h2>
              <p> Fruto del misterio: La apertura al Espíritu Santo </p>
            </div>
          )}
        </div>

        <div className="el-rosario">
          <h2>
            Padre Nuestro <input type="checkbox" />
          </h2>
          <p>
            Padre nuestro, que estás en el cielo, santificado sea tu Nombre;
            venga a nosotros tu reino; hágase tu voluntad en la tierra como en
            el cielo. Danos hoy nuestro pan de cada día; perdona nuestras
            ofensas como también nosotros perdonamos a los que nos ofenden; no
            nos dejes caer en la tentación, y líbranos del mal. Amén.
          </p>
        </div>
        <div className="el-rosario">
          <h2> 10 Ave María</h2> <input type="checkbox" />{" "}
          <input type="checkbox" /> <input type="checkbox" />{" "}
          <input type="checkbox" /> <input type="checkbox" />{" "}
          <input type="checkbox" /> <input type="checkbox" />{" "}
          <input type="checkbox" /> <input type="checkbox" />{" "}
          <input type="checkbox" />
          <p>
            Dios te salve, María, llena eres de gracia, el Seńor es contigo.
            Bendita eres entre todas las mujeres, y bendito es el fruto de tu
            vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros,
            pecadores, ahora y en la hora de nuestra muerte. Amén
          </p>
        </div>
        <div className="el-rosario">
          <h2>
            {" "}
            Gloria <input type="checkbox" />
          </h2>
          <p>
            Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el
            principio, ahora y siempre, y por los siglos de los siglos. Amén
          </p>
        </div>
        <div className="el-rosario">
          <h2>
            {" "}
            Maria Madre de Gracias <input type="checkbox" />
          </h2>
          <p>
            María, Madre de gracia, Madre de misericordia. En la vida y en la
            muerte ampáranos Gran Señora.
          </p>
        </div>
        <div className="el-rosario">
          <h2>
            {" "}
            Oh Jesús mío <input type="checkbox" />
          </h2>
          <p>
            Oh Jesús mío, perdona nuestros pecados y líbranos del fuego del
            infierno, lleva al cielo a todas las almas y socorre especialmente a
            las más necesitadas de tu divina misericordia.
          </p>
        </div>
        <div className="el-rosario">
          <h2>
            {" "}
            Oración del Perdón <input type="checkbox" />
          </h2>
          <p>
            ¡Jesus, yo creo, adoro, espero y te amo! Te pido perdón por los que
            no creen, no adoran, no esperan, no te aman. Amen.
          </p>
        </div>

        {/* This is the second Mystery section where when you click on the day it expands to show the text */}
        <div className="el-rosario">
          <h2>Segundo Mysterio</h2>

          <h2
            id="glorious"
            onClick={() => toggleVisibility(4)}
            style={{ cursor: "pointer" }}
          >
            Misterios Gozosos (lunes y sábado)
          </h2>

          {/* The 2nd Glorious Mystery clickable*/}
          {visibleMysteries.includes(4) && (
            <div>
              <h3>
                El segundo misterio gozoso: La visitacion de Maria a su prima
                Santa Isabel
              </h3>
              <p> Fruto del misterio: El amor al prójimo</p>
            </div>
          )}

          {/* The 2nd Sorrowful Mystery clickable*/}
          <h2
            id="sorrowful"
            onClick={() => toggleVisibility(5)}
            style={{ cursor: "pointer" }}
          >
            Misterios Dolorosos(martes y viernes)
          </h2>

          {visibleMysteries.includes(5) && (
            <div>
              <h2>
                El segundo misterio doloroso: la Flagelacion de nuestro Senor
                Jesucristo
              </h2>
              <p>Fruto del misterio: La pureza</p>
            </div>
          )}

          {/* The 2nd Joyful Mystery clickable*/}
          <h2
            id="joyful"
            onClick={() => toggleVisibility(6)}
            style={{ cursor: "pointer" }}
          >
            Misterios Gloriosos(miercoles y domingos)
          </h2>

          {visibleMysteries.includes(6) && (
            <div>
              <h2>
                El segundo misterio Glorioso: La Ascension de Nuestro Senor
                Jesucristo
              </h2>
              <p>Fruto del misterio: La esperanza</p>
            </div>
          )}
          <h2
            id="luminous"
            onClick={() => toggleVisibility(7)}
            style={{ cursor: "pointer" }}
          >
            {/* The 2nd Luminous Mystery clickable*/}
            Misterios Luminosos(jueves)
          </h2>

          {visibleMysteries.includes(7) && (
            <div>
              <h2>
                El segundo misterio Luminoso: La Autorevelacion de Jesus en las
                bodas de Cana
              </h2>
              <p> Fruto del misterio: A Jesús a través de María</p>
            </div>
          )}
        </div>
        <div className="el-rosario">
          <h2>
            Padre Nuestro <input type="checkbox" />
          </h2>
          <p>
            Padre nuestro, que estás en el cielo, santificado sea tu Nombre;
            venga a nosotros tu reino; hágase tu voluntad en la tierra como en
            el cielo. Danos hoy nuestro pan de cada día; perdona nuestras
            ofensas como también nosotros perdonamos a los que nos ofenden; no
            nos dejes caer en la tentación, y líbranos del mal. Amén.
          </p>
        </div>
        <div className="el-rosario">
          <h2> 10 Ave María</h2> <input type="checkbox" />{" "}
          <input type="checkbox" /> <input type="checkbox" />{" "}
          <input type="checkbox" /> <input type="checkbox" />{" "}
          <input type="checkbox" /> <input type="checkbox" />{" "}
          <input type="checkbox" /> <input type="checkbox" />{" "}
          <input type="checkbox" />
          <p>
            Dios te salve, María, llena eres de gracia, el Seńor es contigo.
            Bendita eres entre todas las mujeres, y bendito es el fruto de tu
            vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros,
            pecadores, ahora y en la hora de nuestra muerte. Amén
          </p>
        </div>
        <div className="el-rosario">
          <h2>
            {" "}
            Gloria <input type="checkbox" />
          </h2>
          <p>
            Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el
            principio, ahora y siempre, y por los siglos de los siglos. Amén
          </p>
        </div>
        <div className="el-rosario">
          <h2>
            {" "}
            Maria Madre de Gracias <input type="checkbox" />
          </h2>
          <p>
            María, Madre de gracia, Madre de misericordia. En la vida y en la
            muerte ampáranos Gran Señora.
          </p>
        </div>
        <div className="el-rosario">
          <h2>
            {" "}
            Oh Jesús mío <input type="checkbox" />
          </h2>
          <p>
            Oh Jesús mío, perdona nuestros pecados y líbranos del fuego del
            infierno, lleva al cielo a todas las almas y socorre especialmente a
            las más necesitadas de tu divina misericordia.
          </p>
        </div>
        <div className="el-rosario">
          <h2>
            {" "}
            Oración del Perdón <input type="checkbox" />
          </h2>
          <p>
            ¡Jesus, yo creo, adoro, espero y te amo! Te pido perdón por los que
            no creen, no adoran, no esperan, no te aman. Amen.
          </p>
        </div>

        {/* This is the third Mystery section where when you click on the day it expands to show the text */}
        <div className="el-rosario">
          <h2>Tercer Mysterio</h2>

          <h2
            id="glorious"
            onClick={() => toggleVisibility(8)}
            style={{ cursor: "pointer" }}
          >
            Misterios Gozosos (lunes y sábado)
          </h2>

          {/* The 3rd Glorious Mystery clickable*/}
          {visibleMysteries.includes(8) && (
            <div>
              <h3>
                El tercer misterio gozoso: El Nacimiento de Jesus en Belen{" "}
              </h3>
              <p> Fruto del misterio: La pobreza en espíritu</p>
            </div>
          )}

          {/* The 3rd Sorrowful Mystery clickable*/}
          <h2
            id="sorrowful"
            onClick={() => toggleVisibility(9)}
            style={{ cursor: "pointer" }}
          >
            Misterios Dolorosos(martes y viernes)
          </h2>

          {visibleMysteries.includes(9) && (
            <div>
              <h2>
                El tercer misterio doloroso: La Coronacion de espinas a Nuestro
                Senor Jesucristo{" "}
              </h2>
              <p>Fruto del misterio: El valor </p>
            </div>
          )}

          {/* The 3rd Joyful Mystery clickable*/}
          <h2
            id="joyful"
            onClick={() => toggleVisibility(10)}
            style={{ cursor: "pointer" }}
          >
            Misterios Gloriosos(miercoles y domingos)
          </h2>

          {visibleMysteries.includes(10) && (
            <div>
              <h2>El tercer misterio Glorioso: La Venida del Espiritu Santo</h2>
              <p> Fruto del misterio: El amor hacia Dios</p>
            </div>
          )}
          <h2
            id="luminous"
            onClick={() => toggleVisibility(11)}
            style={{ cursor: "pointer" }}
          >
            {/* The 3rd Luminous Mystery clickable*/}
            Misterios Luminosos(jueves)
          </h2>

          {visibleMysteries.includes(11) && (
            <div>
              <h2>
                El tercer misterio Luminoso: Jesus anuncia el Reino de Dios e
                invita a la Conversion
              </h2>
              <p> Fruto del misterio: El arrepentimiento y confianza en Dios</p>
            </div>
          )}
        </div>

        <div className="el-rosario">
          <h2>
            Padre Nuestro <input type="checkbox" />
          </h2>
          <p>
            Padre nuestro, que estás en el cielo, santificado sea tu Nombre;
            venga a nosotros tu reino; hágase tu voluntad en la tierra como en
            el cielo. Danos hoy nuestro pan de cada día; perdona nuestras
            ofensas como también nosotros perdonamos a los que nos ofenden; no
            nos dejes caer en la tentación, y líbranos del mal. Amén.
          </p>
        </div>
        <div className="el-rosario">
          <h2> 10 Ave Maria</h2> <input type="checkbox" />{" "}
          <input type="checkbox" /> <input type="checkbox" />{" "}
          <input type="checkbox" /> <input type="checkbox" />{" "}
          <input type="checkbox" /> <input type="checkbox" />{" "}
          <input type="checkbox" /> <input type="checkbox" />{" "}
          <input type="checkbox" />
          <p>
            Dios te salve, María, llena eres de gracia, el Seńor es contigo.
            Bendita tú eres entre todas las mujeres, y bendito es el fruto de tu
            vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros,
            pecadores, ahora y en la hora de nuestra muerte. Amén
          </p>
        </div>
        <div className="el-rosario">
          <h2>
            {" "}
            Gloria <input type="checkbox" />{" "}
          </h2>
          <p>
            Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el
            principio, ahora y siempre, y por los siglos de los siglos. Amén
          </p>
        </div>
        <div className="el-rosario">
          <h2>
            {" "}
            Maria Madre de Gracias <input type="checkbox" />
          </h2>
          <p>
            María, Madre de gracia, Madre de misericordia. En la vida y en la
            muerte ampáranos Gran Señora.
          </p>
        </div>
        <div className="el-rosario">
          <h2>
            {" "}
            Oh Jesús mío <input type="checkbox" />
          </h2>
          <p>
            Oh Jesús mío, perdona nuestros pecados y líbranos del fuego del
            infierno, lleva al cielo a todas las almas y socorre especialmente a
            las más necesitadas de tu divina misericordia.{" "}
          </p>
        </div>
        <div className="el-rosario">
          <h2>
            {" "}
            Oración del Perdón <input type="checkbox" />
          </h2>
          <p>
            ¡Jesus, yo creo, adoro, espero y te amo! Te pido perdón por los que
            no creen, no adoran, no esperan, no te aman. Amen.
          </p>
        </div>

        {/* This is the fourth Mystery section where when you click on the day it expands to show the text */}
        <div className="el-rosario">
          <h2>Cuarto Mysterio</h2>

          <h2
            id="glorious"
            onClick={() => toggleVisibility(12)}
            style={{ cursor: "pointer" }}
          >
            Misterios Gozosos (lunes y sábado)
          </h2>

          {/* The 4th Glorious Mystery clickable*/}
          {visibleMysteries.includes(12) && (
            <div>
              <h3>
                El cuarto misterio gozoso: La Presentacion de Jesus en el Templo{" "}
              </h3>
              <p> Fruto del misterio: La obediencia </p>
            </div>
          )}

          {/* The 4th Sorrowful Mystery clickable*/}
          <h2
            id="sorrowful"
            onClick={() => toggleVisibility(13)}
            style={{ cursor: "pointer" }}
          >
            Misterios Dolorosos(martes y viernes)
          </h2>

          {visibleMysteries.includes(13) && (
            <div>
              <h2>
                El cuarto misterio doloroso: Jesus sube al Calvario con la cruz
                a cuestas{" "}
              </h2>
              <p> Fruto del misterio: La paciencia </p>
            </div>
          )}

          {/* The 4th Joyful Mystery clickable*/}
          <h2
            id="joyful"
            onClick={() => toggleVisibility(14)}
            style={{ cursor: "pointer" }}
          >
            Misterios Gloriosos(miercoles y domingos)
          </h2>

          {visibleMysteries.includes(14) && (
            <div>
              <h2>
                El cuarto misterio Glorioso: La Asuncion de la Virgen Maria
              </h2>
              <p>Fruto del misterio: La gracia de una muerte feliz </p>
            </div>
          )}
          <h2
            id="luminous"
            onClick={() => toggleVisibility(15)}
            style={{ cursor: "pointer" }}
          >
            {/* The 4th Luminous Mystery clickable*/}
            Misterios Luminosos(jueves)
          </h2>

          {visibleMysteries.includes(15) && (
            <div>
              <h2>El cuarto misterio Luminoso: La Transfiguracion de Jesus </h2>
              <p>Fruto del misterio: Deseo de santidad </p>
            </div>
          )}
        </div>

        <div className="el-rosario">
          <h2>
            Padre Nuestro <input type="checkbox" />
          </h2>
          <p>
            Padre nuestro, que estás en el cielo, santificado sea tu Nombre;
            venga a nosotros tu reino; hágase tu voluntad en la tierra como en
            el cielo. Danos hoy nuestro pan de cada día; perdona nuestras
            ofensas como también nosotros perdonamos a los que nos ofenden; no
            nos dejes caer en la tentación, y líbranos del mal. Amén.
          </p>
        </div>
        <div className="el-rosario">
          <h2> 10 Ave María</h2> <input type="checkbox" />{" "}
          <input type="checkbox" /> <input type="checkbox" />{" "}
          <input type="checkbox" /> <input type="checkbox" />{" "}
          <input type="checkbox" /> <input type="checkbox" />{" "}
          <input type="checkbox" /> <input type="checkbox" />{" "}
          <input type="checkbox" />
          <p>
            Dios te salve, María, llena eres de gracia, el Seńor es contigo.
            Bendita tú eres entre todas las mujeres, y bendito es el fruto de tu
            vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros,
            pecadores, ahora y en la hora de nuestra muerte. Amén
          </p>
        </div>
        <div className="el-rosario">
          <h2>
            {" "}
            Gloria <input type="checkbox" />{" "}
          </h2>
          <p>
            Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el
            principio, ahora y siempre, y por los siglos de los siglos. Amén
          </p>
        </div>
        <div className="el-rosario">
          <h2>
            {" "}
            Maria Madre de Gracias <input type="checkbox" />
          </h2>
          <p>
            María, Madre de gracia, Madre de misericordia. En la vida y en la
            muerte ampáranos Gran Señora.
          </p>
        </div>
        <div className="el-rosario">
          <h2>
            {" "}
            Oh Jesús mío <input type="checkbox" />
          </h2>
          <p>
            Oh Jesús mío, perdona nuestros pecados y líbranos del fuego del
            infierno, lleva al cielo a todas las almas y socorre especialmente a
            las más necesitadas de tu divina misericordia.
          </p>
        </div>
        <div className="el-rosario">
          <h2>
            {" "}
            Oración del Perdón <input type="checkbox" />
          </h2>
          <p>
            ¡Jesus, yo creo, adoro, espero y te amo! Te pido perdón por los que
            no creen, no adoran, no esperan, no te aman. Amen.
          </p>
        </div>

        {/* This is the fifth Mystery section where when you click on the day it expands to show the text */}
        <div className="el-rosario">
          <h2>Quinto Mysterio</h2>

          <h2
            id="glorious"
            onClick={() => toggleVisibility(16)}
            style={{ cursor: "pointer" }}
          >
            Misterios Gozosos (lunes y sábado)
          </h2>

          {/* The 5th Glorious Mystery clickable*/}
          {visibleMysteries.includes(16) && (
            <div>
              <h3>
                El quinto misterio gozoso: Jesus es perdido y hallado en el
                templo{" "}
              </h3>
              <p> Fruto del misterio: El gozo en hallar a Jesús</p>
            </div>
          )}

          {/* The 4th Sorrowful Mystery clickable*/}
          <h2
            id="sorrowful"
            onClick={() => toggleVisibility(17)}
            style={{ cursor: "pointer" }}
          >
            Misterios Dolorosos(martes y viernes)
          </h2>

          {visibleMysteries.includes(17) && (
            <div>
              <h2>
                El quinto misterio doloroso: La crucifixion y muerte de Nuestro
                Senor Jesucristo{" "}
              </h2>
              <p>Fruto del misterio: La perseverancia</p>
            </div>
          )}

          {/* The 5th Joyful Mystery clickable*/}
          <h2
            id="joyful"
            onClick={() => toggleVisibility(18)}
            style={{ cursor: "pointer" }}
          >
            Misterios Gloriosos(miercoles y domingos)
          </h2>

          {visibleMysteries.includes(18) && (
            <div>
              <h2>
                El quinto misterio Glorioso: La Coronacion de la Virgen Maria{" "}
              </h2>
              <p>
                Fruto del misterio: La confianza en la intercesión de María{" "}
              </p>
            </div>
          )}
          <h2
            id="luminous"
            onClick={() => toggleVisibility(19)}
            style={{ cursor: "pointer" }}
          >
            {/* The 5th Luminous Mystery clickable*/}
            Misterios Luminosos(jueves)
          </h2>

          {visibleMysteries.includes(19) && (
            <div>
              <h2>
                El quinto misterio Luminoso: La Institucion de La Eucaristia
              </h2>
              <p>Fruto del misterio: La adoración </p>
            </div>
          )}
        </div>

        <div className="el-rosario">
          <h2>
            Padre Nuestro <input type="checkbox" />{" "}
          </h2>
          <p>
            Padre nuestro, que estás en el cielo, santificado sea tu Nombre;
            venga a nosotros tu reino; hágase tu voluntad en la tierra como en
            el cielo. Danos hoy nuestro pan de cada día; perdona nuestras
            ofensas como también nosotros perdonamos a los que nos ofenden; no
            nos dejes caer en la tentación, y líbranos del mal. Amén.
          </p>
        </div>
        <div className="el-rosario">
          <h2> 10 Ave María</h2> <input type="checkbox" />{" "}
          <input type="checkbox" /> <input type="checkbox" />{" "}
          <input type="checkbox" /> <input type="checkbox" />{" "}
          <input type="checkbox" /> <input type="checkbox" />{" "}
          <input type="checkbox" /> <input type="checkbox" />{" "}
          <input type="checkbox" />
          <p>
            Dios te salve, María, llena eres de gracia, el Seńor es contigo.
            Bendita tú eres entre todas las mujeres, y bendito es el fruto de tu
            vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros,
            pecadores, ahora y en la hora de nuestra muerte. Amén
          </p>
        </div>
        <div className="el-rosario">
          <h2>
            {" "}
            Gloria <input type="checkbox" />{" "}
          </h2>
          <p>
            Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el
            principio, ahora y siempre, y por los siglos de los siglos. Amén
          </p>
        </div>
        <div className="el-rosario">
          <h2>
            {" "}
            Maria Madre de Gracias <input type="checkbox" />{" "}
          </h2>
          <p>
            María, Madre de gracia, Madre de misericordia. En la vida y en la
            muerte ampáranos Gran Señora.
          </p>
        </div>
        <div className="el-rosario">
          <h2>
            {" "}
            Oh Jesús mío <input type="checkbox" />{" "}
          </h2>
          <p>
            Oh Jesús mío, perdona nuestros pecados y líbranos del fuego del
            infierno, lleva al cielo a todas las almas y socorre especialmente a
            las más necesitadas de tu divina misericordia.
          </p>
        </div>
        <div className="el-rosario">
          <h2>
            {" "}
            Oración del Perdón <input type="checkbox" />
          </h2>
          <p>
            ¡Jesus, yo creo, adoro, espero y te amo! Te pido perdón por los que
            no creen, no adoran, no esperan, no te aman. Amen.
          </p>
        </div>
        <div className="el-rosario">
          <h2>
            {" "}
            Salve Regina <input type="checkbox" />{" "}
          </h2>
          <p>
            Dios te Salve, Reina y Madre de misericordia, vida, dulzura y
            esperanza nuestra, Dios te salve. A ti llamamos los desterrados
            hijos de Eva; a ti suspiramos, gimiendo y llorando, en este valle de
            lágrimas. Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos
            tus ojos misericordiosos, y, después de este destierro, muéstranos a
            Jesús, fruto bendito de tu vientre. ¡Oh, clemente, oh piadosa, oh
            dulce Virgen María! Ruega por nosotros, Santa Madre de Dios. Para
            que seamos dignos de alcanzar las promesas de Nuestro Señor
            Jesucristo. Amén
          </p>
        </div>
      </div>
    </>
  );
};

export default SpanishRosary;


// Still need checkboxes for this page

// links to different litany's at the end !!



// Misterios del Rosario
// https://catolicosdemaria.com/misterios-del-rosario/
// This link offers more of an explanation for ea mystery in Spanish
// https://hozana.org/es/oracion/santo-rosario/misterios