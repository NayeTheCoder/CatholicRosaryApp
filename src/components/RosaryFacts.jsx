import React, { useState } from 'react';
import './RosaryFacts.css';
import { useNavigate } from 'react-router-dom';
import Switch from "react-switch";

const RosaryFacts = () => {
    const [isPageOne, setIsPageOne] = useState(false);
    const navigate = useNavigate();
    
    const handleToggle = () => {
        setIsPageOne(!isPageOne);
        if (!isPageOne) {
            navigate('/Rosary-facts-Spanish'); // Navigate to /page-one when switching from page two
        }
    };

    return (
        <>
        <div 
        style={{
            position:"fixed", 
            bottom:"40px", 
            right:"40px", 
            marginLeft:".5rem", 
            backgroundColor:"white",
            opacity:"80%", 
            display:"flex", 
            flexDirection:"column", 
            borderRadius:"5px", 
            color:"black"}}>
            <span id="close" onClick ={()=>{document.getElementById("close").parentElement.remove(); return false;}} style={{"fontSize":"1.5rem", "marginLeft":"auto", "paddingRight":".5rem", "paddingLeft":".5rem"}}>x</span>
      <span style={{"alignText":"center","fontSize":"1.25rem"}}>Español!</span>
      <label>
        <Switch onChange={handleToggle} checked={isPageOne} />
      </label>
    </div>
        <div className="page-container" style={{backgroundColor: "#ffc60c"}}>
            <h1>Rosary Information</h1>    
            <h2>The 15 Promises of Our Lady to Those Who Pray the Rosary</h2>

            <div>
                <p>To all those who shall recite my rosary devoutly, I promise my special protection and very great graces.</p>
                <p>Those who shall persevere in the recitation of my rosary shall receive signal graces.</p>
                <p>The rosary shall be a very powerful armor against hell; it will destroy vice, deliver from sin, and dispel heresy.</p>
                <p>The rosary will make virtue and good works flourish, and will obtain for souls the most abundant divine mercies; it will draw the hearts of men from the love of the world to the love of God, and will lift them to the desire of eternal things. How many souls shall sanctify themselves by this means!</p>
                <p>Those who trust themselves to me through the rosary shall not perish.</p>
                <p>Those who shall recite my rosary devoutly, meditating on its mysteries, shall not be overwhelmed by misfortune. The sinner shall be converted; the just shall grow in grace and become worthy of eternal life.</p>
                <p>Those truly devoted to my rosary shall not die without the Sacraments of the Church.</p>
                <p>Those who faithfully recite my rosary shall find during their life and at the hour of their death the light of God, the fullness of his graces, and shall share in the merits of the blessed.</p>
                <p>I shall deliver very promptly from purgatory the souls devoted to my rosary.</p>
                <p>The true children of my rosary shall enjoy great glory in heaven.</p>
                <p>What you ask through my rosary, you shall obtain.</p>
                <p>Those who propagate my rosary will be aided by me in all their necessities.</p>
                <p>I have obtained from my Son that all the members of the Rosary Confraternity shall have as their intercessors, in life and in death, the entire celestial court.</p>
                <p>Those who recite my rosary faithfully are all my beloved children, the brothers and sisters of Jesus Christ.</p>
                <p>Devotion to my rosary is a great sign of predestination.</p>
            </div>
        </div>
        </>
    );
};

export default RosaryFacts;



