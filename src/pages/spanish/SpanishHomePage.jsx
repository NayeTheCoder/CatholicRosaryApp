import React, { useState, useEffect } from "react";
import "../../styles/HomePage.css";
import { Link } from 'react-router-dom';

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const SpanishHomePage = () => {
  let numQuotes = 7;
  const [randNum, setRandNum] = useState(0);
  const quotes = [
    'Juan 3:16 ¡Así amó Dios al mundo! Le dio al Hijo Unico, para que quien cree en él no se pierda, sino que tenga vida eterna.',
    "Efesios 2:8 “Ustedes han sido salvados por la fe, y lo han sido por gracia. Esto no vino de ustedes, sino que es un don de Dios;' “",
    "Juan 14:6 “Jesús contestó: 'Yo soy el Camino, la Verdad y la Vida. Nadie va al Padre sino por mí. “",
    "Juan 15:5 “Yo soy la vid y ustedes las ramas. El que permanece en mí y yo en él, ése da mucho fruto, pero sin mí, no pueden hacer nada.”",
    "Romanos 5:8 “Pero Dios dejó constancia del amor que nos tiene: Cristo murió por nosotros cuando todavía éramos pecadores. “",
    "2 Pedro 3:9 “El Señor no se demora en cumplir su promesa, como algunos dicen, sino que es generoso con ustedes, y no quiere que se pierda nadie, sino que todos lleguen a la conversión.”",
  ];

  useEffect(() => {
    setRandNum(getRndInteger(0, numQuotes));
  }, []);

  return (
    <>
    <h1 style={{ color: "white", fontFamily: "Ariel", fontSize: "3rem" }}>
      Bienvenidos a un Recurso Catolico.
    </h1>
      <img src="./images/deepimg-1748482512937.png" height="500em" />
      <h1 style={{ color: "white", fontFamily: "Ariel" }} align="center">
        {quotes[randNum]}{" "}
      </h1>
	  <p style={{ color: "gray"}}> Este video muestra lo que realmente sucede en la misa. </p>
      <iframe className="video" width="800" height="500" src="https://www.youtube.com/embed/vgfDCmxvm4g?autoplay=1&mute=1&cc_load_policy=1" title="The Real Presence: The Mass" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <p style={{ color: "white", fontFamily: "Ariel"}}>
        Visita la pagina The Real Presence:  
        <a href="https://therealpresence.com/" >https://therealpresence.com/</a>
      </p>
    </>
  );
};

export default SpanishHomePage;
