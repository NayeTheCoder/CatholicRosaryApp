import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Navbar.css'; // Import the custom CSS file for the navbar

const Navbar = () => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">JESUS IS KING!!!!!</a>
        </div>
        <ul className="nav navbar-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/long-rosary"> The Holy Rosary With Meditations</Link></li>
          <li><Link to="/short-rosary"> The Holy Rosary without Meditations</Link></li>
          <li><Link to="/spanish-rosary"> El Santo Rosario</Link></li>
          <li><Link to="/prayers">Prayers</Link></li> {/* Link to the Prayers page */}
          <li><Link to="/rosary-facts"> Rosary Info</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
