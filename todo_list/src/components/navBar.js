import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <>
          <Navbar style={{top: 0, left: 0, position: "fixed"}}  bg="transparent" data-bs-theme="dark">
            <Container>
                <h1 style={{color: "whitesmoke", marginRight: "20px"}}>TODO</h1>
              <Nav className="me-auto">
                <Nav.Link href="/" >Home</Nav.Link>
                <Nav.Link href="/task">Tasks</Nav.Link>
                <Nav.Link href="/completed">Completed</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          </>
        )  
}

export default NavBar