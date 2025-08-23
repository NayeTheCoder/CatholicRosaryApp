import { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';  // Import Navbar
import LongRosary from './pages/english/LongRosary';  // Import LongRosary component
import ShortRosary from './pages/english/ShortRosary'; // Import ShortRosary component
import DivineMercy from './pages/english/DivineMercy';
import DivineMercySpanish from './pages/spanish/DivineMercySpanish';
import SpanishRosary from './pages/spanish/SpanishRosary'; //Import SpanishRosary component
import PrayersPage from './pages/english/PrayersPage';  // Import PrayersPage component
import Litanies from './pages/english/Litanies';
import SpanishLitany from './pages/spanish/SpanishLitany';
import RosaryFacts from './pages/english/RosaryFacts';
import MysteriesPage from './pages/english/MysteriesPage';
import RosaryFactsSpanish from './pages/spanish/RosaryFactsSpanish';
import Resources from './pages/english/Resources';
import HomePage from './pages/english/HomePage';
import ChatBot from './components/ChatBot';
import NotFound from './NotFound';
import CommonPrayers from './pages/english/CommonPrayers';
import PsalmsPage from './pages/english/PsalmsPage';
import Beatitudes from './pages/english/Beatitudes';
import SpanishHomePage from './pages/spanish/SpanishHomePage';
import SpanishPrayersPage from './pages/spanish/SpanishPrayerPage';
import DailyReading from './pages/english/DailyReading';
import SpanishDailyReading from './pages/spanish/SpanishDailyReading'
import PsalmsPageSpanish from './pages/spanish/PsalmsPageSpanish';
import CommonPrayersSpanish from './pages/spanish/CommonPrayersSpanish';
import MapPage from './pages/english/MapPage';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <ChatBot/>
      <Routes> 
        <Route exact path="/" element={<HomePage/>} /> {/* Use element */}
        <Route exact path="/spanish" element={<SpanishHomePage/>} /> {/* Use element */}
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
        <Route path="/prayers/Spanish-Litany" element={<SpanishLitany/>} />
        <Route path="/prayers/common-prayers" element={<CommonPrayers/>}/>
        <Route path="/prayers/psalms-page" element={<PsalmsPage/>}/>
        <Route path="/beatitudes" element={<Beatitudes/>} />
        <Route path="/spanish-prayers" element={<SpanishPrayersPage/>}/>
        <Route path="/daily-reading" element={<DailyReading/>}/>
        <Route path="/daily-reading-spanish" element={<SpanishDailyReading/>}/>
        <Route path="/prayers/psalms-page-spanish" element={<PsalmsPageSpanish/>}/>
        <Route path="/prayers/common-prayers-spanish" element={<CommonPrayersSpanish/>}/>
        <Route path="/resources/shrine-map" element={<MapPage/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default App;

