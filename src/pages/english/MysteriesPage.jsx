import React from 'react';

const MysteriesPage = () => {
    // Define which mysteries are associated with each day
    const rosaryMystery = {
        Joyful: ['Monday', 'Saturday'],
        Luminous: ['Thursday'],
        Sorrowful: ['Tuesday', 'Friday'],
        Glorious: ['Wednesday', 'Sunday']
    };

    // Get the current day of the week
    const dayOfWeek = new Date().toLocaleString('en-us', { weekday: 'long' }).toLowerCase();

    console.log("DAY OF THE WEEK: "+dayOfWeek)

    // Find which mysteries correspond to the current day
    const mysteryForToday = Object.keys(rosaryMystery).filter(mystery =>
        rosaryMystery[mystery].includes(dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1))
    );

    return (
        <div>
            <h1>Mystery of the Rosary for {dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)}</h1>
            <ul>
                {mysteryForToday.length > 0 ? (
                    mysteryForToday.map((mystery, index) => (
                        <li key={index}>
                            <a href={`/rosary/mysteries/${mystery.toLowerCase()}`}>{mystery.charAt(0).toUpperCase() + mystery.slice(1)} Mystery</a>
                        </li>
                    ))
                ) : (
                    <li>No Rosary Mysteries for today</li>
                )}
            </ul>
        </div>
    );
};



export default MysteriesPage;

// This page is not showing up yet - I am not sure why
// I was wanting to test to see if it even works in pulling the correct day/mystery

// site for the names/ spiritual fruit credit
// RECOMMEND TO OTHERS TO READ THE MYSTERIES ON THE PAGE THAT TELL THE STORY OF JESUS' LIFE. 
// https://www.catholiccompany.com/content/joyful-mysteries-of-the-rosary

// For short rosary only the name and spiritual fruit. 
// The Joyful Mysteries
// 1 THE ANNUNCIATION Spiritual Fruit: Humility
// 2 THE VISITATION Spiritual Fruit: Love of Neighbor
// 3 THE NATIVITY Spiritual Fruit: Poverty of Spirit
// 4 THE PRESENTATION Spiritual Fruit: Purity of Mind and Body
// 5 THE FINDING OF JESUS IN THE TEMPLE Spiritual Fruit: Obedience

// The Glorious Mysteries 
// 1. THE RESURRECTION Spiritual Fruit: Faith
// 2. THE ASCENSION Spiritual Fruit: Christian Hope
// 3. THE DESCENT OF THE HOLY SPIRIT Spiritual Fruit: Gifts of the Holy Spirit
// 4. THE ASSUMPTION Spiritual Fruit: To Jesus Through Mary
// 5. THE CORONATION Spiritual Fruit: Grace of Final Perseverance

// The Sorrowful Mysteries
// 1. THE AGONY IN THE GARDEN Spiritual Fruit: God's Will Be Done
// 2. THE SCOURGING AT THE PILLAR Spiritual Fruit: Mortification of the Senses
// 3. THE CROWNING WITH THORNS Spiritual Fruit: Reign of Christ in Our Heart
// 4. THE CARRYING OF THE CROSS Spiritual Fruit: Patient Bearing of Trials
// 5. THE CRUCIFIXION Spiritual Fruit: Pardoning of Injuries

//The Luminous Mysteries
//1. THE BAPTISM OF THE LORD Spiritual Fruit: Gratitude For the Gift of Faith
//2. THE WEDDING OF CANA Spiritual Fruit: Fidelity
//3. PROCLAMATION OF THE KINGDOM Spiritual Fruit: Desire for Holiness
//4. THE TRANSFIGURATION Spiritual Fruit: Spiritual Courage
//5. THE INSTITUTION OF THE EUCHARIST Spiritual Fruit: Love of Our Eucharistic Lord




// This link is for the long Rosary.
// https://www.usccb.org/how-to-pray-the-rosary
// This link will help with the bible verses for ea. Mystery.





