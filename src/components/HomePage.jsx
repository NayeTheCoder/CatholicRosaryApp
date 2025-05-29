import React, { useState } from 'react';
// import './HomePage.css'; if added

const HomePage = () => {

	const quotes = [
		"John 3:16 \"For God so loved the world that he gave his only Son, so that everyone who believes in him might not perish but might have eternal life\"", 
		"Romans 12:12 \"Be joyful in hope, patient in affliction, faithful in prayer.\"",
		"John 20:29 \"Then Jesus told him, ‘Because you have seen me, you have believed; blessed are those who have not seen and yet have believed.’\"",
	];

	function getRand () {
		return Math.floor(Math.random() * 100) % 3;
	};

	let randNum = getRand();
	console.log(randNum);

	return (
		<>
		<h1 align="center"> {quotes[randNum]}</h1>
		</>
	)
  	// return (<h1 align="center">John 3:16 "For God so loved the world that he gave his only Son, so that everyone who believes in him might not perish but might have eternal life" </h1>)
}
	

export default HomePage;
