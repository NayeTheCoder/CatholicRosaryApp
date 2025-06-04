import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'; // Import Bootstrap components
import './Navbar.css';


const CustomNavbar = () => {
  return (
    <Navbar defaultExpanded expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand className="mx-auto" href="/">JESUS IS KING!!!!!</Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="mx-auto">
                {/* Link to Holy Rosary page */}
                <Nav.Link as={Link} to="/CatholicRosaryApp/long-rosary">The Holy Rosary</Nav.Link> {/* will lead to its own page */}
                {/*Link to Divine Mercy Chaplet*/}
                <Nav.Link as={Link} to="/CatholicRosaryApp/divine-mercy">Divine Mercy Chaplet</Nav.Link> {/* will lead to its own page */}
                {/* Link to prayers page */}
                <Nav.Link as={Link} to="/CatholicRosaryApp/prayers">Prayers</Nav.Link>

                {/* More dropdown*/}
                <NavDropdown title="More">
                  <NavDropdown.Item as={Link} to="/CatholicRosaryApp/litanies">Litanies</NavDropdown.Item> {/* will also have link to toggle eng/span */}
                  <NavDropdown.Item as={Link} to="/CatholicRosaryApp/resources">Resources</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/CatholicRosaryApp/rosary-facts">Rosary Information</NavDropdown.Item>
                </NavDropdown> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;


