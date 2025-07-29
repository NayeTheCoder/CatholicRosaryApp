import {useState} from 'react'
import { Link } from 'react-router-dom'; // Import Link from React Router
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'; // Import Bootstrap components
import './Navbar.css';

const CustomNavbar = () => {
  const [ spanish, setSpanish ] = useState(false);

  return (
    <>
    { !spanish && <Navbar style={{"borderRadius":"5px"}} defaultExpanded expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand className="navbar-brand" href="/CatholicRosaryApp/">A Catholic Resource</Navbar.Brand>
          <Navbar.Toggle className="tog-button" aria-controls="navbar-nav" />
            <Navbar.Collapse className="mx-auto" id="navbar-nav">
              <Nav className="nav mx-auto">
                {/* Link to Holy Rosary page */}
                <Nav.Link className="link" as={Link} to="/long-rosary">The Holy Rosary</Nav.Link> {/* will lead to its own page */}
                {/*Link to Divine Mercy Chaplet*/}
                <Nav.Link className="link" as={Link} to="/divine-mercy">Divine Mercy Chaplet</Nav.Link> {/* will lead to its own page */}
                {/* Link to prayers page */}
                <Nav.Link className="link" as={Link} to="/prayers">Prayers</Nav.Link>

                {/* More dropdown*/}
                <NavDropdown className="link mx-auto" title="More">
                  <NavDropdown.Item className="drop-item" as={Link} to="/beatitudes">The Beatitudes</NavDropdown.Item> {/* will also have link to toggle eng/span */}
                  <NavDropdown.Item className="drop-item" as={Link} to="/resources">Resources</NavDropdown.Item>
                  <NavDropdown.Item className="drop-item" as={Link} to="/rosary-facts">Rosary Information</NavDropdown.Item>
                </NavDropdown> 
                <Nav.Link className="link" as={Link} to="/spanish" onClick={()=>{ setSpanish(true)}} title="Spanish Site"> Sitio Español</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>}
    {/* Spanish Navbar */}
    {spanish && <Navbar style={{"borderRadius":"5px"}} defaultExpanded expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand className="navbar-brand"><Link className='link' style={{fontStyle: "none", color: "black"}} to="/spanish" >Un Recurso Catolico </Link></Navbar.Brand>
          <Navbar.Toggle className="tog-button" aria-controls="navbar-nav" />
            <Navbar.Collapse className="mx-auto" id="navbar-nav">
              <Nav className="nav mx-auto">
                {/* Link to Holy Rosary page */}
                <Nav.Link className="link" as={Link} to="/spanish-rosary">El Santo Rosario</Nav.Link> {/* will lead to its own page */}
                {/*Link to Divine Mercy Chaplet*/}
                <Nav.Link className="link" as={Link} to="/divine-mercySpanish">Divina Misericordia</Nav.Link> {/* will lead to its own page */}
                {/* Link to prayers page */}
                <Nav.Link className="link" as={Link} to="/prayers">Rezos</Nav.Link>

                {/* More dropdown*/}
                <NavDropdown className="link mx-auto" title="Mas">
                  {/* <NavDropdown.Item className="drop-item" as={Link} to="/beatitudes">The Beatitudes</NavDropdown.Item> will also have link to toggle eng/span */}
                  {/* <NavDropdown.Item className="drop-item" as={Link} to="/resources">Resources</NavDropdown.Item> */}
                  <NavDropdown.Item className="drop-item" as={Link} to="/Rosary-facts-Spanish">Informacion del Rosario</NavDropdown.Item>
                </NavDropdown> 
                <Nav.Link className="link" as={Link} to="/spanish-homepage" onClick={()=>{setSpanish(false)}} title="Spanish Site">English Site</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>}
    </>
  );
};

export default CustomNavbar;


