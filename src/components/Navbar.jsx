import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'; // Import Bootstrap components
import './Navbar.css';


const CustomNavbar = () => {
  return (
    <Navbar style={{"borderRadius":"5px"}} defaultExpanded expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand className="navbar-brand" href="/CatholicRosaryApp/">A Catholic Resources</Navbar.Brand>
          <Navbar.Toggle className="tog-button" aria-controls="navbar-nav" />
            <Navbar.Collapse className="mx-auto" id="navbar-nav">
              <Nav className="nav mx-auto">
                {/* Link to Holy Rosary page */}
                <Nav.Link className="link" as={Link} to="/CatholicRosaryApp/long-rosary">The Holy Rosary</Nav.Link> {/* will lead to its own page */}
                {/*Link to Divine Mercy Chaplet*/}
                <Nav.Link className="link" as={Link} to="/CatholicRosaryApp/divine-mercy">Divine Mercy Chaplet</Nav.Link> {/* will lead to its own page */}
                {/* Link to prayers page */}
                <Nav.Link className="link" as={Link} to="/CatholicRosaryApp/prayers">Prayers</Nav.Link>

                {/* More dropdown*/}
                <NavDropdown className="link mx-auto" title="More">
                  <NavDropdown.Item className="drop-item" as={Link} to="/CatholicRosaryApp/litanies">Litanies</NavDropdown.Item> {/* will also have link to toggle eng/span */}
                  <NavDropdown.Item className="drop-item" as={Link} to="/CatholicRosaryApp/resources">Resources</NavDropdown.Item>
                  <NavDropdown.Item className="drop-item" as={Link} to="/CatholicRosaryApp/rosary-facts">Rosary Information</NavDropdown.Item>
                </NavDropdown> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;


