import React from 'react';
import {Navbar, Nav }  from 'react-bootstrap'
import {NavLink} from 'react-router-dom'


const Header = () => (
    <div>
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand><NavLink exact to="/">Legion Dummy App</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <NavLink to="/articles">Articles</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
    </div>
)

export default Header