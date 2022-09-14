import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navegacion() {
    
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Unica Certeza</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/episodios">Episodios</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default Navegacion