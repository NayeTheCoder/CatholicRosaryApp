import React, { useState, useEffect } from "react";
import '../../styles/PsalmsPage.css'
import useScreenSize from '../../utils/useScreenSize'

const psalms = [
     "The Lord is my shepherd, I shall not want; he makes me lie down in green pastures. He leads me beside still waters, he restores my soul. He leads me in paths of righteousness for his name's sake. Even though I walk through the valley of the shadow of death, I fear no evil; for you are with me; your rod and your staff, they comfort me. You prepare a table before me in the presence of my enemies; you anoint my head with oil, my cup overflows. Surely goodness and mercy shall follow me all the days of my life; and I shall dwell in the house of the Lord for ever.",
   "Have mercy on me, O God, according to your merciful love; according to your abundant mercy blot out my transgressions. Wash me thoroughly from my iniquity and cleanse me from my sin! For I know my transgressions and my sin is ever before me. Against you, you only, have I sinned, and done that which is evil in your sight, so that you are justified in your sentence and blameless in your judgment. Behold I was brought forth in iniquity, and in sin did my mother conceive me. Behold, you desire truth in the inward being; therefore teach me wisdom in my secret heart. Purge me with hyssop, and I shall be clean; wash me, and I shall be whiter than snow. Make me hear joy and gladness; let the bones which You have broken rejoice. Hide Your face from my sins, and blot out all my iniquities. Create in me a clean heart, O God, and put a new and right spirit within me. Cast me not away from your presence, and take not your holy spirit from me. Restore to me the joy of your salvation and uphold me with a willing spirit. Then I will teach transgressors your ways, and sinners will return to you. Deliver me from bloodguilt, O God, O God of my salvation, and my tongue will sing aloud of your deliverance. O Lord, open my lips, and my mouth shall show forth your praise. For you take no delight in sacrifice; were I to give a burnt offering, you would not be pleased. The sacrifice acceptable to God is a broken spirit; a broken and contrite heart, O God, you will not despise. Do good to Zion in your good pleasure; rebuild the walls of Jerusalem, then will you delight in right sacrifices, in burnt offerings and whole burnt offerings; then bulls will be offered on your altar.",
   "He who dwells in the shelter of the Most High, who abides in the shadow of the Almighty, will say to the Lord, 'My refuge and my fortress; my God, in who I trust.' For he will deliver you from the snare of the fowler and from the deadly pestilence; he will cover you with pinions, and under his wings you will find refuge; his faithfullness is a shield and buckler. You will not fear the terror of the night, nor the arrow that flies by day, nor the pestilence that stalks in darkness, nor the destruction that wastes at noonday. A thousand may fall at your side, ten thousand at your right hand; but it will not come near you. You will only look with your eyes and see the recompense of the wicked. Because you have made the Lord your refuge, the Most High your habitation, no evil shall befall you, no scourge come near your tent. For he will give his angels charge of you to guard you in all your ways. On their hands they will bear you up, lest you dash your foot against a stone. You will tread on the lion and the adder, the young lion and the serpent you will trample under foot. Because he clings to me in love, I will deliver him; I will protect him, because he knows my name. When he calls to me, I will answer him; I will be with him in trouble, I will rescue him and honor him. With long life I will satisfy him, and show him my salvation."
];

const PsalmsPage = () => {
    const { width } = useScreenSize();
    const [expandedPsalm, setExpandedPsalm] = useState({"psalm_23":(width > 767 ?true:false), "psalm_51":(width > 767 ? true:false), "psalm_91":(width > 767 ? true:false)});
    const cursor = width > 767 ? "auto" : "pointer";
    const toggleExpand = (number) => {
        setExpandedPsalm({"psalm_23":number == 0 ? !expandedPsalm.psalm_23: expandedPsalm.psalm_23, "psalm_51":number == 1 ? !expandedPsalm.psalm_51: expandedPsalm.psalm_51, "psalm_91":number == 2 ? !expandedPsalm.psalm_91: expandedPsalm.psalm_91});
    };

    return (
        <>
            <h1 className="title">Psalms</h1>
            <div id="psalms-page">
                <div className="psalms-row">
                        <div>
                            <img id="psalm-pic1" className="psalms-image" src="./images/psalm_23.JPEG"/>
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
                                Psalm 23
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
                                <img className="psalms-image" src="./images/psalm_51.JPEG"/>
                            </div>
                            <h1 className="title">
                                Psalm 51
                            </h1>
                            {expandedPsalm.psalm_51 && (
                                <p className="text-content" style={{ marginTop: 0 }}>{psalms[1]}</p>
                            )}
                        </div>
                        <div id="desktop-image">
                            <img id="psalm-pic2" className="psalms-image" src="./images/psalm_51.JPEG"/>
                        </div>
                        
                </div>
                <div className="psalms-row">
                        <div>
                            <img id="psalm-pic3" className="psalms-image" src="./images/psalm_91.JPEG"/>
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
                                Psalm 91
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

export default PsalmsPage;


