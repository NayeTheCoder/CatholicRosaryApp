import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';  // Import Navbar
import LongRosary from './components/LongRosary';  // Import LongRosary component
import ShortRosary from './components/ShortRosary'; // Import ShortRosary component
import DivineMercy from './components/DivineMercy';
import SpanishRosary from './components/SpanishRosary'; //Import SpanishRosary component
import PrayersPage from './components/PrayersPage';  // Import PrayersPage component
import Litanies from './components/Litanies';
import RosaryFacts from './components/RosaryFacts';
import MysteriesPage from './components/MysteriesPage';
import RosaryFactsSpanish from './components/RosaryFactsSpanish';
import Resources from './components/Resources';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>  {/* Use Routes instead of Switch */}
        <Route path="/CatholicRosaryApp" element={<h1 align="center">John 3:16 "For God so loved the world that he gave his only Son, so that everyone who believes in him might not perish but might have eternal life" </h1>} /> {/* Use element */}
        <Route path="/CatholicRosaryApp/long-rosary" element={<LongRosary />} /> {/* Use element */}
        <Route path="/CatholicRosaryApp/short-rosary" element={<ShortRosary/>} /> {/* Use element */}
        <Route path="/CatholicRosaryApp/divine-mercy" element={<DivineMercy/>} /> {/* Use element */}
        <Route path="/CatholicRosaryApp/spanish-rosary" element={<SpanishRosary/>} /> {/*Use element */}
        <Route path="/CatholicRosaryApp/prayers" element={<PrayersPage />} /> {/* Use element */}
        <Route path="/CatholicRosaryApp/rosary-facts" element={<RosaryFacts/>} /> {/* Use element */}
        <Route path="/CatholicRosaryApp/mystery-page" element={<MysteriesPage/>} /> {/* Use element */}
        <Route path="/CatholicRosaryApp/Rosary-facts-Spanish" element={<RosaryFactsSpanish/>} />
        <Route path="/CatholicRosaryApp/Resources" element={<Resources/>} />
        <Route path="/CatholicRosaryApp/Litanies" element={<Litanies/>} />
      </Routes>
    </Router>
  );
};

export default App;
