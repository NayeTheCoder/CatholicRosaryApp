import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';  // Import Navbar
import LongRosary from './components/LongRosary';  // Import LongRosary component
import ShortRosary from './components/ShortRosary'; // Import ShortRosary component
import SpanishRosary from './components/SpanishRosary'; //Import SpanishRosary component
import PrayersPage from './components/PrayersPage';  // Import PrayersPage component
import RosaryFacts from './components/RosaryFacts';
import MysteriesPage from './components/MysteriesPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>  {/* Use Routes instead of Switch */}
        <Route path="/" element={<h1 align="center">Welcome to the Catholic Resource App</h1>} /> {/* Use element */}
        <Route path="/long-rosary" element={<LongRosary />} /> {/* Use element */}
        <Route path="/short-rosary" element={<ShortRosary/>} /> {/* Use element */}
        <Route path="/spanish-rosary" element={<SpanishRosary/>} /> {/*Use element */}
        <Route path="/prayers" element={<PrayersPage />} /> {/* Use element */}
        <Route path="/rosary-facts" element={<RosaryFacts/>} /> {/* Use element */}
        <Route path="/mystery-page" element={<MysteriesPage/>} /> {/* Use element */}
      </Routes>
    </Router>
  );
};

export default App;





