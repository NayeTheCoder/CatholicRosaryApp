import React, { useState, useEffect } from "react";
import '../../styles/PsalmsPage.css'
import useScreenSize from '../../utils/useScreenSize'

const psalms = [
	"El Señor es mi pastor: nada me falta; en verdes pastos él me hace reposar. A las aguas de descanso me conduce,y reconforta mi alma. Por el camino del bueno me dirige, por amor de su nombre.Aunque pase por quebradas oscuras, no temo ningún mal, porque tú estás conmigo con tu vara y tu bastón, y al verlas voy sin miedo.La mesa has preparado para mí frente a mis adversarios, con aceites perfumas mi cabeza y rellenas mi copa.Irán conmigo la dicha y tu favor mientras dura mi vida, mi mansión será la casa del Señora por largos, largos días.",
   "Ten piedad de mí, oh Dios, en tu bondad, por tu gran corazón, borra mi falta. Que mi alma quede limpia de malicia, purifícame de mi pecado. Pues mi falta yo bien la conozco y mi pecado está siempre ante mí;' contra ti, contra ti sólo pequé, lo que es malo a tus ojos yo lo hice. Por eso en tu sentencia tú eres justo, no hay reproche en el juicio de tus labios. Tú ves que malo soy de nacimiento, pecador desde el seno de mi madre. Mas tú quieres rectitud de corazón, y me enseñas en secreto lo que es sabio. Rocíame con agua, y quedaré limpio; lávame y quedaré más blanco que la nieve. Haz que sienta otra vez júbilo y gozo y que bailen los huesos que moliste. Aparta tu semblante de mis faltas, borra en mí todo rastro de malicia. Crea en mí, oh Dios, un corazón puro, renueva en mi interior un firme espíritu. No me rechaces lejos de tu rostro ni me retires tu espíritu santo. Dame tu salvación que regocija, y que un espíritu noble me dé fuerza. Mostraré tu camino a los que pecan, a ti se volverán los descarriados. Líbrame, oh Dios, de la deuda de sangre, Dios de mi salvación, y aclamará mi lengua tu justicia. Señor, abre mis labios y cantará mi boca tu alabanza.Un sacrificio no te gustaría, ni querrás si te ofrezco, un holocausto.Mi espíritu quebrantado a Dios ofreceré, pues no desdeñas a un corazón contrito.  ",
   "Tú que habitas al amparo del Altísimo y resides a la sombra del Omnipotente,dile al Señor: 'Mi amparo, mi refugio, mi Dios, en quien yo pongo mi confianza'. El te librará del lazo del cazador y del azote de la desgracia; te cubrirá con sus plumas y hallarás bajo sus alas un refugio. No temerás los miedos de la noche ni la flecha disparada de día,  ni la peste que avanza en las tinieblas, ni la plaga que azota a pleno sol. Aunque caigan mil hombres a tu lado y diez mil, a tu derecha, tú estarás fuera de peligro: su lealtad será tu escudo y armadura. Basta que mires con tus ojos y verás cómo se le paga al impío. Pero tú dices: 'Mi amparo es el Señor', tú has hecho del Altísimo tu asilo. La desgracia no te alcanzará ni la plaga se acercará a tu tienda: pues a los ángeles les ha ordenado que te escolten en todos tus caminos. En sus manos te habrán de sostener para que no tropiece tu pie en alguna piedra;' andarás sobre víboras y leones y pisarás cachorros y dragones. Pues a mí se acogió, lo libraré, lo protegeré, pues mi Nombre conoció. Si me invoca, yo le responderé, y en la angustia estaré junto a él, lo salvaré, le rendiré honores. Alargaré sus días como lo desea y haré que pueda ver mi salvación'."
];

const PsalmsPageSpanish = () => {
	const { width } = useScreenSize();
	const [expandedPsalm, setExpandedPsalm] = useState({"psalm_23":(width > 767 ?true:false), "psalm_51":(width > 767 ? true:false), "psalm_91":(width > 767 ? true:false)});
	const cursor = width > 767 ? "auto" : "pointer";
	const toggleExpand = (number) => {
		setExpandedPsalm({"psalm_23":number == 0 ? !expandedPsalm.psalm_23: expandedPsalm.psalm_23, "psalm_51":number == 1 ? !expandedPsalm.psalm_51: expandedPsalm.psalm_51, "psalm_91":number == 2 ? !expandedPsalm.psalm_91: expandedPsalm.psalm_91});
	};

	return (
		<>
			<h1 className="title">Salmos</h1>
			<div id="psalms-page">
				<div className="psalms-row">
						<div>
							<img id="psalm-pic1" className="psalms-image" src="./images/salmo_23.JPEG"/>
						</div>
						<div 
						style={{
							display: "flex",
							flexDirection: "column",
							marginTop: 0,
							marginBottom: expandedPsalm.psalm_91 ? "10px" : 0,
							color: "#333",
							fontSize: "18px",
							cursor: cursor
						}} 
						onClick={() => {
							if (width < 767)
								{
									toggleExpand(0)
								}
							}}>
							<h1 className="title">
								Salmo 23
							</h1>
						   {expandedPsalm.psalm_23 && (
								<p className="text-content" style={{ marginTop: 0 }}>{psalms[0]}</p>
							)}
						</div>
				</div>
				<div className="psalms-row">
						<div 
						style={{
							display: "flex",
							flexDirection: "column",
							marginTop: 0,
							marginBottom: expandedPsalm.psalm_51 ? "10px" : 0,
							color: "#333",
							fontSize: "18px",
							cursor: cursor
						}} 
						onClick={() => {
							if (width < 767)
								{
									toggleExpand(1)
								}
							}}>
							 <div id="mobile-image">
								<img className="psalms-image" src="./images/salmo_51.JPEG"/>
							</div>
							<h1 className="title">
								Salmo 51
							</h1>
							{expandedPsalm.psalm_51 && (
								<p className="text-content" style={{ marginTop: 0 }}>{psalms[1]}</p>
							)}
						</div>
						<div id="desktop-image">
							<img id="psalm-pic2" className="psalms-image" src="./images/salmo_51.JPEG"/>
						</div>
						
				</div>
				<div className="psalms-row">
						<div>
							<img id="psalm-pic3" className="psalms-image" src="./images/salmo_91.JPEG"/>
						</div>
						<div 
						style={{
							display: "flex",
							flexDirection: "column",
							marginTop: 0,
							marginBottom: expandedPsalm.psalm_91 ? "10px" : 0,
							color: "#333",
							fontSize: "18px",
							cursor: cursor
							  
						}} 
						onClick={() => {
							if (width < 767)
								{
									toggleExpand(2)
								}
							}}>
							<h1 className="title">
								Salmo 91
							</h1>
							{expandedPsalm.psalm_91 && (
								<p className="text-content" style={{ marginTop: 0 }}>{psalms[2]}</p>
							)}
						</div>
				</div>
			</div>
			</>
	);
};

export default PsalmsPageSpanish;


