import React, { useState } from "react";

const psalms = [
    {
        number: 23,
        text: "The Lord is my shepherd, I shall not want; he makes me lie down in green pastures. He leads me beside still waters, he restores my soul. He leads me in paths of righteousness for his name's sake. Even though I walk through the valley of the shadow of death, I fear no evil; for you are with me; your rod and your staff, they comfort me. You prepare a table before me in the presence of my enemies; you anoint my head with oil, my cup overflows. Surely goodness and mercy shall follow me all the days of my life; and I shall dwell in the house of the Lord for ever."
    },
    {
        number: 51,
        text: "Have mercy on me, O God, according to your merciful love; according to your abundant mercy blot out my transgressions. Wash me thoroughly from my iniquity and cleanse me from my sin! For I know my transgressions and my sin is ever before me. Against you, you only, have I sinned, and done that which is evil in your sight, so that you are justified in your sentence and blameless in your judgment. Behold I was brought forth in iniquity, and in sin did my mother conceive me. Behold, you desire truth in the inward being; therefore teach me wisdom in my secret heart. Purge me with hyssop, and I shall be clean; wash me, and I shall be whiter than snow. Make me hear joy and gladness; let the bones which you have broken rejoice. Hide your face from my sins, and blot out all my iniquities. Create in me a clean heart, O God, and put a new and right spirit within me. Cast me not away from your presence, and take not your holy spirit from me. Restore to me the joy of your salvation and uphold me with a willing spirit. Then I will teach transgressors your ways, and sinners will return to you. Deliver me from bloodguilt, O God, O God of my salvation, and my tongue will sing aloud of your deliverance. O Lord, open my lips, and my mouth shall show forth your praise. For you take no delight in sacrifice; were I to give a burnt offering, you would not be please. The sacrifice acceptable to God is a broken spirit broken and contrite heart, O God, you will not despise. Do good to Zion in your good pleasure; rebuild the walls of Jerusalem, then will you delight in right sacrifices, in burnt offerings and whole burnt offerings; then bulls will be offerd on your altar."
    },
    {
        number: 91,
        text: "He who dwells in the shelter of the Most High, who abides in the shadow of the Almighty, will say to the Lord, 'My refuge and my fortress; my God, in who I trust.' For he will deliver you from the snare of the fowler and from the deadly pestilence; he will cover you with pinions, and under his wings you will find refuge; his faithfullness is a shield and buckler. You will not fear the terror of the night, nor the arrow that flies by day, nor the pestilence that stalks in darkness, nor the destruction that wastes at noonday. A thousand may fall at your side, ten thousand at your right hand; but it will not come near you. You will only look with your eyes and see the recompense of the wicked. Because you have made the Lord your refuge, the Most High your habitation, no evil shall befall you, no scourge come near your tent. For he will give his angels charge of you to guard you in all your ways. On their hands they will bear you up, lest you dash your foot against a stone. You will tread on the lion and the adder, the young lion and the serpent you will trample under foot. Because he clings to me in love, I will deliver him; I will protect him, because he knows my name. When he calls to me, I will answer him; I will be with him in trouble, I will rescue him and honor him. With long life I will satisfy him, and show him my salvation."
    },
];

const PsalmsPage = () => {
    const [expandedPsalm, setExpandedPsalm] = useState(null);

    const toggleExpand = (number) => {
        setExpandedPsalm(expandedPsalm === number ? null : number);
    };

    return (
        <div style={{ padding: "20px", }}>
            <h1>Psalms</h1>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    alignItems: "center",
                    flexDirection: "column", 
                    justifyContent: "center"
                }}
            >
                {psalms.map(({ number, text }) => {
                    const isExpanded = expandedPsalm === number;

                    return (
                        <div
                            key={number}
                            style={{
                                width: "250px",
                                border: "1px solid #ccc",
                                borderRadius: "8px",
                                padding: "15px",
                                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                                backgroundColor: "#f9f9f9",
                                cursor: "pointer",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <h3
                                onClick={() => toggleExpand(number)}
                                style={{
                                    marginTop: 0,
                                    marginBottom: isExpanded ? "10px" : 0,
                                    color: "#333",
                                    textTransform: "uppercase",
                                    fontSize: "18px",
                                    cursor: "pointer"
                                }}
                            >
                                Psalm {number}
                            </h3>

                            {isExpanded && (
                                <p style={{ marginTop: 0 }}>{text}</p>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PsalmsPage;


