import React, { useState, useEffect } from 'react';
import '../../styles/PrayersPage.css';

const prayers = [
	{
		id:0, 
		title: "Padre Nuestro",
		prayerText:"Padre nuestro que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu Reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas,como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal. Amén.",
	},
	{
		id:1,
		title: "Dios te Salve, Maria",
		prayerText:"Dios te salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén.",
	},
	{
		id:2,
		title: "La Señal De La Cruz",
		prayerText:"En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén.",
	},
	{
		id:3,
		title: "Gloria",
		prayerText:"Gloria al Padre, al Hijo y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.",
	},
	{
		id:4,
		title: "Ángel de la Guarda",
		prayerText:"Ángel de la Guarda, dulce compañía, no me desampares ni de noche ni de día. No me dejes solo que me perdería. Ni vivir, ni morir en pecado mortal. Jesús en la vida, Jesús en la muerte, Jesús para siempre. Amén.",
	},
	{
		id:5,
		title: "Oración de Ofrecimiento de la Mañana",
		prayerText:"Oh Jesús,por tu Sagrado Corazón,te ofrezco todas las oraciones,trabajos, alegrías y sufrimientos de este día,en unión con el Santo Sacrificio de la Misa en todo el mundo.Te ofrezco mi vida,en particular por las intenciones del Papa para este mes. Amén.",
	},
	{
		id:6,
		title: "El Credo de Nicea",
		prayerText:"Creo en un solo Dios, Padre todopoderoso, Creador del cielo y de la tierra, de todo lo visible y lo invisible. Creo en un solo Señor, Jesucristo, Hijo único de Dios, nacido del Padre antes de todos los siglos: Dios de Dios, Luz de Luz, Dios verdadero de Dios verdadero, engendrado, no creado, de la misma naturaleza del Padre, por quien todo fue hecho; que por nosotros lo hombres, y por nuestra salvación bajó del cielo, y por obra del Espíritu Santo se encarnó de María, la Virgen, y se hizo hombre; y por nuestra causa fue crucificado en tiempos de Poncio Pilato; padeció y fue sepultado, y resucitó al tercer día, según las Escrituras, y subió al cielo, y está sentado a la derecha del Padre; y de nuevo vendrá con gloria para juzgar a vivos y muertos, y su reino no tendrá fin. Creo en el Espíritu Santo, Señor y dador de vida, que procede del Padre y del Hijo, que con el Padre y el Hijo recibe una misma adoración y gloria, y que habló por los profetas. Creo en la Iglesia, que es una, santa, católica y apostólica. Confieso que hay un solo bautismo para el perdón de los pecados. Espero la resurrección de los muertos y la vida del mundo futuro. Amén.",
	},
	{
		id:7,
		title: "Gloria",
		prayerText:"Gloria a Dios en el cielo, y en la tierra paz a los hombres que ama el Señor. Por tu inmensa gloria te alabamos, te bendecimos, te adoramos, te glorificamos, te damos gracias, Señor Dios, Rey celestial, Dios Padre todopoderoso Señor, Hijo único, Jesucristo. Señor Dios, Cordero de Dios, Hijo del Padre; tú que quitas el pecado del mundo, ten piedad de nosotros; tú que quitas el pecado del mundo, atiende nuestra súplica; tú que estás sentado a la derecha del Padre, ten piedad de nosotros; porque sólo tú eres Santo, sólo tú Señor, sólo tú Altísimo, Jesucristo, con el Espíritu Santo en la gloria de Dios Padre. Amén.",
	},
	{
		id:8,
		title: "El Credo",
		prayerText:"Creo en Dios, Padre todopoderoso, creador del Cielo y de la Tierra. Creo en Jesucristo su único Hijo, Nuestro Señor, que fue concebido por obra y gracia del Espíritu Santo; nació de Santa María Virgen; padeció bajo el poder de Poncio Pilato; fue crucificado, muerto y sepultado; descendió a los infiernos; al tercer día resucitó de entre los muertos; subió a los cielos y está a la diestra de Dios Padre; desde allí ha de venir a juzgar a los vivos y a los muertos. Creo en el Espíritu Santo, en la Santa Iglesia Católica, a comunión de los Santos en el perdón de los pecados la resurrección de los muertos y la vida eterna. Amén.",
	},
	{
		id:9,
		title: "Acto de Contrición",
		prayerText:"Dios mío, me arrepiento de todo corazón de todo lo malo que he hecho y de todo lo bueno que he dejado de hacer, porque pecando te he ofendido a ti, que eres el sumo bien y digno de ser amado sobre todas las cosas. Propongo firmemente, con tu gracia, cumplir la penitencia, no volver a pecar y evitar las ocasiones de pecado.Perdóname, Señor, por los méritos de la pasión de nuestro Salvador Jesucristo. Amén.",
	},
	{
		id:10,
		title: "La Oración de Jesús",
		prayerText:"Señor Jesucristo, Hijo de Dios, ten piedad de mí, que soy un pecador.",
	},
	{
		id:11,
		title: "Ángelus",
		prayerText:"El ángel del Señor anunció a María. Y concibió por obra y gracia del Espíritu Santo. Dios te salve, María... He aquí la esclava del Señor. Hágase en mí según tu palabra. Dios te salve, María... Y el Verbo de Dios se hizo carne. Y habitó entre nosotros. Dios te salve, María... Ruega por nosotros, Santa Madre de Dios, para que seamos dignos de alcanzar las promesas de Jesucristo. Oremos Oh Padre, Infunde en nuestra alma tu gracia. Tú, que en la anunciación del Ángel nos has revelado la encarnación de tu Hijo, por su pasión y su cruz condúcenos a la gloria de la resurrección. Por Cristo, Nuestro Señor. Amén.",
	},
	{
		id:12,
		title: "Anima Christi",
		prayerText:"Alma de Cristo, santifícame Cuerpo de Cristo, sálvame Sangre de Cristo, embriágame Agua del costado de Cristo, lávame Pasión de Cristo, confórtame Oh buen Jesús, óyeme Dentro de tus llagas, escóndeme No permitas que me separe de Tí Del maligno enemigo, defiéndeme En la hora de mi muerte, llámame Y mándame ir a Tí Para que con Tus santos Te alabe Por los siglos de los siglos. Amén.",
	},
	{
		id:13,
		title: "Alabanzas Divinas",
		prayerText:"Bendito sea Dios. Bendito sea su santo Nombre. Bendito sea Jesucristo, Dios y Hombre verdadero. Bendito sea el Nombre de Jesús. Bendito sea su Sacratísimo Corazón. Bendita sea su Preciosísima Sangre. Bendito sea Jesús en el Santísimo Sacramento del Altar. Bendito sea el Espíritu Santo Paráclito. Bendita sea la excelsa Madre de Dios, María Santísima. Bendita sea su Santa e Inmaculada Concepción. Bendita sea su gloriosa Asunción. Bendito sea el nombre de María Virgen y Madre. Bendito sea San José, su castísimo esposo. Bendito sea Dios en sus Ángeles y en sus Santos.",
	},
	{
		id:14,
		title: "Salve Regina",
		prayerText:"Dios te salve, Reina y Madre de misericordia; vida, dulzura y esperanza nuestra, Dios te salve.A ti llamamos los desterrados hijos de Eva, a ti suspiramos, gimiendo y llorando en este valle de lágrimas. Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos y, después de este destierro, Muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clementísima, oh piadosa, oh dulce Virgen María!. Ruega por nosotros, Santa Madre de Dios, para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo. Amén.",
	},
	{
		id:15,
		title: "Memorare",
		prayerText:"¡Oh piadosísima Virgen María!,que nunca se ha oído decir que ninguno de los que han acudido a tu protección,implorado tu socorro solicitado tu auxilio,haya sido desamparado.Animado por esta confianza a Ti acudo,¡Oh Virgen de las vírgenes!, Madre. A Ti vengo, ante Ti me postro, pecador.Gimiendo y llorando, ante tu presencia me presento.No desprecies mis súplicas, ¡oh Madre del Verbo divino!,antes bien, escucha y acoge mis plegarias. Amén.",
	},
	{
		id:16,
		title: "Oh Jesús Mío (Oración de Fátima)",
		prayerText:"O mi Jesús, perdónanos nuestros pecados, líbranos del fuego del infierno. Lleva a todas las almas al cielo, especialmente a las más necesitadas de tu divina misericordia. Amén.",
	},

]

const CommonPrayersSpanish = () => {

  return (
	<div>
		<h1 className='page-title'><b>Oraciones Comunes</b></h1>
	<div className="prayer-box">
	  <ul>
		{prayers.map((prayer) => (
		  <li key={prayer.id}>
			<h3 className="prayer-title">{prayer.title}</h3>
			<p>{prayer.prayerText}</p>
		  </li>
		))}
	  </ul>
	</div>
	</div>
  );
};

export default CommonPrayersSpanish;

