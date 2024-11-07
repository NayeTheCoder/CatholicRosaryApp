import React, { useState, useEffect } from 'react';

const PrayersPage = () => {
  const [prayers, setPrayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const excludeTitles = ["Sign of the Cross", "Prayer to Your Guardian Angel"];

  useEffect(() => {
    const fetchPrayers = async () => {
      try {
        const response = await fetch("https://the-collection-of-catholic-prayers-api.vercel.app/v1/basic_prayers");
        
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Error ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        console.log(data);  // Log to check the data structure

        const filteredPrayers = data.filter(prayer => !excludeTitles.includes(prayer.title));
        setPrayers(filteredPrayers);  // Set the filtered prayers
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrayers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Basic Prayers</h1>
      <ul>
        {prayers.map((prayer) => (
          <li key={prayer.id}>
            <h3>{prayer.tilte}</h3>
            <p>{prayer.prayerText}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrayersPage;

