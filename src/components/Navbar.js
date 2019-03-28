import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown}  from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavbarComponent extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Legion Dummy App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="#moracha">Moracha</Nav.Link>
      <Nav.Link href="#moracha">Keith</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Login</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">Sign Up</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      </div>
      </Router>
    )
  }
}

export default NavbarComponent
