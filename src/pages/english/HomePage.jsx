import React, { useState, useEffect } from "react";
import "../../styles/HomePage.css";
import { Link } from 'react-router-dom';

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const HomePage = () => {
  let numQuotes = 7;
  const [randNum, setRandNum] = useState(0);
  const quotes = [
    'John 3:16 "For God so loved the world that he gave his only Son, so that everyone who believes in him might not perish but might have eternal life"',
    "Ephesians 2:8-9 “For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.”",
    "John 15:5 “I am the vine, you are the branches. Those who abide in me and I in them bear much fruit, because apart from me you can do nothing.”",
    "John 14:6 “Jesus said to him, ‘I am the way, and the truth, and the life. No one comes to the Father except through me.'”",
    "2 Corinthians 5:7 “For we walk by faith, not by sight.”",
    "Romans 5:8 “But God proves his love for us in that while we still were sinners Christ died for us.”",
    "2 Peter 3:9 “The Lord is not slow about his promise, as some think of slowness but is patient with you, not wanting any to perish, but all to come to repentance.”",
  ];

  useEffect(() => {
    setRandNum(getRndInteger(0, numQuotes));
  }, []);

  return (
    <>
    <h1 style={{ color: "white", fontFamily: "Ariel", fontSize: "3rem" }}>
      Welcome to A Catholic Resource!
    </h1>
    <h3 style={{ color: "white", fontFamily: "Lucida Console", fontSize: "1.5rem" }}>
      Designed to help you learn to pray the Rosary STEP BY STEP</h3>

      <img src="./images/deepimg-1748482512937.png" height="500em" />
      <h1 style={{ color: "white", fontFamily: "Ariel" }} align="center">
        {quotes[randNum]}{" "}
      </h1>
	  <p style={{ color: "gray"}}> 28 min film -A must watch! </p>
      <iframe className="video" width="800" height="500" src="https://www.youtube.com/embed/vgfDCmxvm4g?autoplay=0&mute=1&cc_load_policy=1" title="The Real Presence: The Mass" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <p style={{ color: "white", fontFamily: "Ariel"}}>
        Visit The Real Presence Website:  
        <a target="_blank" rel="noopener norefferer" href="https://therealpresence.com/" >https://therealpresence.com/</a>
      </p>
    </>
  );
};

export default HomePage;
