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
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/long-rosary" className="nav-link">The Holy Rosary With Bible Verses</Link></li>
          <li><Link to="/short-rosary" className="nav-link">The Holy Rosary</Link></li>
          <li><Link to="./divine-mercy" ClassName="nav-link"> Divine Mercy Prayer</Link></li>
          <li><Link to="/spanish-rosary" className="nav-link">El Santo Rosario</Link></li>
          <li><Link to="/prayers" className="nav-link">Prayers</Link></li>
          <li><Link to="/rosary-facts-spanish" className="nav-link">Informacion Del Santo Rosario</Link></li>
          <li><Link to="/rosary-facts" className="nav-link">Rosary Info</Link></li>
          <li><Link to="/resources" className="nav-link">Resources</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

