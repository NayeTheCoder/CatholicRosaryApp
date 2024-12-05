import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Navbar.css'; // Import the custom CSS file for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">JESUS IS KING!!!!!</a>
        </div>
        <ul className="navbar-nav">
          <li><Link to="/CatholicRosaryApp/" className="nav-link">Home</Link></li>
          <li><Link to="/CatholicRosaryApp/long-rosary" className="nav-link">The Holy Rosary With Bible Verses</Link></li>
          <li><Link to="/CatholicRosaryApp/short-rosary" className="nav-link">The Holy Rosary</Link></li>
          <li><Link to="/CatholicRosaryApp/divine-mercy" className="nav-link"> Divine Mercy Prayer</Link></li>
          <li><Link to="/CatholicRosaryApp/spanish-rosary" className="nav-link">El Santo Rosario</Link></li>
          <li><Link to="/CatholicRosaryApp/litanies" className="nav-link"> Litanies </Link></li>
          <li><Link to="/CatholicRosaryApp/spanish-litany" className="nav-link"> Letanias</Link></li>
          <li><Link to="/CatholicRosaryApp/prayers" className="nav-link">Prayers</Link></li>
          <li><Link to="/CatholicRosaryApp/rosary-facts-spanish" className="nav-link">Informacion Del Santo Rosario</Link></li>
          <li><Link to="/CatholicRosaryApp/rosary-facts" className="nav-link">Rosary Info</Link></li>
          <li><Link to="/CatholicRosaryApp/resources" className="nav-link">Resources</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

