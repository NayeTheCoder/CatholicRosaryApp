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



