
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Navbar, Nav, Container} from 'react-bootstrap';
function Header()
{
    return (
    <header>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/home"><h1 className="brand">TODO</h1></Navbar.Brand>
    
    
      
        <Nav.Link href="/Home" className="brand">Home</Nav.Link>
        <Nav.Link href="/Profile" className="brand">Profile</Nav.Link>
      
    
  </Container>
</Navbar>
    
    </header>
    );
}


export  default Header;