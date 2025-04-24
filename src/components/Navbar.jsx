import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'; // Import Bootstrap components
import './Navbar.css';


const CustomNavbar = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#">JESUS IS KING!!!!!</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse className="show" id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/CatholicRosaryApp/">Home</Nav.Link>

             {/* NavDropdown for English Rosaries */}
             <NavDropdown title="The Holy Rosary" id="navbar-dropdown-litanies">
              <NavDropdown.Item as={Link} to="/CatholicRosaryApp/long-rosary">The Holy Rosary With Bible Verses</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/CatholicRosaryApp/short-rosary">The Holy Rosary</NavDropdown.Item>
            </NavDropdown>
            {/* NavDropdown for Divine Mercy English/Spanish */}
            <NavDropdown title ="Divine Mercy Chaplet in English/ en Español">
              <NavDropdown.Item as={Link} to="/CatholicRosaryApp/divine-mercy">Divine Mercy Chaplet</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/CatholicRosaryApp/divine-mercySpanish">Divina Misericordia Coronilla </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/CatholicRosaryApp/spanish-rosary">El Santo Rosario</Nav.Link>

            {/* NavDropdown for Litanies and Letanias */}
            <NavDropdown title="Litanies" id="navbar-dropdown-litanies">
              <NavDropdown.Item as={Link} to="/CatholicRosaryApp/litanies">Litanies</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/CatholicRosaryApp/spanish-litany">Letanias</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/CatholicRosaryApp/prayers">Prayers</Nav.Link>

             {/* NavDropdown for Rosary Information */}
             <NavDropdown title="Rosary Information" id="navbar-dropdown-litanies">
              <NavDropdown.Item as={Link} to="/CatholicRosaryApp/rosary-facts">Rosary Info</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/CatholicRosaryApp/rosary-facts-spanish">Informacion Del Santo Rosario</NavDropdown.Item>
            </NavDropdown>
      
            <Nav.Link as={Link} to="/CatholicRosaryApp/resources">Resources</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;


