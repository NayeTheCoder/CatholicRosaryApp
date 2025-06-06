import React, { useState, useEffect } from 'react';
import './RosaryFactsSpanish.css';
import { useNavigate } from 'react-router-dom';
import Switch from "react-switch";

const RosaryFactsSpanish = () => {
     const [isPageOne, setIsPageOne] = useState(true);
          const navigate = useNavigate();
    
          const handleToggle = () => {
            setIsPageOne(!isPageOne);
          };

          useEffect(() => {
              if(!isPageOne) {
                navigate('/CatholicRosaryApp/rosary-facts');
              }
            }, [isPageOne]);
    return (
        <>
        <div style={{"position":"fixed", "marginLeft":".5rem", "backgroundColor":"white","opacity":"80%", "display":"flex", "flexDirection":"column"}}>
          <span id="close" onClick ={()=>{document.getElementById("close").parentElement.remove(); return false;}} style={{"fontSize":"1.5rem", "marginLeft":"auto", "paddingRight":".5rem", "paddingLeft":".5rem"}}>x</span>
      <span style={{"alignText":"center","fontSize":"1.25rem"}}>Español!</span>
      <label>
        <Switch onChange={handleToggle} checked={isPageOne} />
      </label>
    </div>
        <div className="page-container">
            <h1>Informacion Del Santo Rosario</h1>    
            <h2>Las 15 Promesas de Nuestra Señora para los que recan el Rosario</h2>

            <div>
                <p>A todos aquellos que reciten mi rosario devotamente, les prometo mi especial protección y grandes gracias.</p>
                <p>Aquellos que perseveren en la recitación de mi rosario recibirán gracias señaladas.</p>
                <p>El rosario será una poderosa armadura contra el infierno; destruirá el vicio, librará del pecado y disipará la herejía.</p>
                <p>El rosario hará florecer la virtud y las buenas obras, y obtendrá para las almas las más abundantes misericordias divinas; alejará los corazones de los hombres del amor al mundo y los llevará al amor de Dios, y los elevará al deseo de las cosas eternas. ¡Cuántas almas se santificarán por este medio!</p>
                <p>Aquellos que se confíen a mí a través del rosario no perecerán.</p>
                <p>Aquellos que reciten mi rosario devotamente, meditando en sus misterios, no serán vencidos por la adversidad. El pecador se convertirá; el justo crecerá en gracia y se hará digno de la vida eterna.</p>
                <p>Aquellos verdaderamente devotos a mi rosario no morirán sin los Sacramentos de la Iglesia.</p>
                <p>Aquellos que reciten mi rosario fielmente encontrarán, durante su vida y en la hora de su muerte, la luz de Dios, la plenitud de sus gracias y compartirán los méritos de los bienaventurados.</p>
                <p>Yo libraré muy pronto del purgatorio a las almas devotas de mi rosario.</p>
                <p>Los verdaderos hijos de mi rosario gozarán de gran gloria en el cielo.</p>
                <p>Lo que pidáis por mi rosario, lo obtendréis.</p>
                <p>Aquellos que propaguen mi rosario serán ayudados por mí en todas sus necesidades.</p>
                <p>He obtenido de mi Hijo que todos los miembros de la Cofradía del Rosario tengan como intercesores, en vida y en la muerte, a toda la corte celestial.</p>
                <p>Aquellos que reciten mi rosario fielmente son todos mis queridos hijos, los hermanos y hermanas de Jesucristo.</p>
                <p>La devoción a mi rosario es una gran señal de predestinación.</p>
            </div>
        </div>
        </>
    );
};

export default RosaryFactsSpanish;