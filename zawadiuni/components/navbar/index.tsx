"use client"
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.scss";

const NavBar = () => {
  return (
    <Nav className="justify-content-center"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item className="navitem">
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item className="navitem">
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item className="navitem">
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item className="navitem">
        <Nav.Link eventKey="disabled">
          Disabled
        </Nav.Link>
      </Nav.Item>
      <NavDropdown className="navitem" title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

export default NavBar;