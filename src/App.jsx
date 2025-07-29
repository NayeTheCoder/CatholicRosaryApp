import { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';  // Import Navbar
import LongRosary from './components/LongRosary';  // Import LongRosary component
import ShortRosary from './components/ShortRosary'; // Import ShortRosary component
import DivineMercy from './components/DivineMercy';
import DivineMercySpanish from './components/DivineMercySpanish';
import SpanishRosary from './components/SpanishRosary'; //Import SpanishRosary component
import PrayersPage from './components/PrayersPage';  // Import PrayersPage component
import Litanies from './components/Litanies';
import SpanishLitany from './components/SpanishLitany';
import RosaryFacts from './components/RosaryFacts';
import MysteriesPage from './components/MysteriesPage';
import RosaryFactsSpanish from './components/RosaryFactsSpanish';
import Resources from './components/Resources';
import HomePage from './components/HomePage';
{/*import Assistant from './components/Assistant';*/}
import NotFound from './NotFound';
import BasicPrayers from './components/BasicPrayers';
import PsalmsPrayers from './components/PsalmsPage';
import Beatitudes from './components/Beatitudes';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes> 
        <Route exact path="/" element={<HomePage/>} /> {/* Use element */}
        <Route path="/long-rosary" element={<LongRosary />} /> {/* Use element */}
        <Route path="/short-rosary" element={<ShortRosary/>} /> {/* Use element */}
        <Route path="/divine-mercy" element={<DivineMercy/>} /> {/* Use element */}
        <Route path="/divine-mercySpanish" element={<DivineMercySpanish/>} /> {/* Use element */}
        <Route path="/spanish-rosary" element={<SpanishRosary/>} /> {/*Use element */}
        <Route path="/prayers" element={<PrayersPage />} /> {/* Use element */}
        <Route path="/rosary-facts" element={<RosaryFacts/>} /> {/* Use element */}
        <Route path="/mystery-page" element={<MysteriesPage/>} /> {/* Use element */}
        <Route path="/Rosary-facts-Spanish" element={<RosaryFactsSpanish/>} />
        <Route path="/Resources" element={<Resources/>} />
        <Route path="/prayers/litanies" element={<Litanies/>} />
        <Route path="/Spanish-Litany" element={<SpanishLitany/>} />
        <Route path="/prayers/basic-prayers" element={<BasicPrayers/>}/>
        <Route path="/prayers/psalms-page" element={<PsalmsPage/>}/>
        <Route path="/beatitudes" element={<Beatitudes/>} />
        {/*<Route path="/chat-bot" element={<Assistant/>} />*/}
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default App;

