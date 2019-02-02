import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

// handy animations in pure css
// author: http://daneden.me/animate
import './animate.css'
import './navbar.css'

export default function NavBar() {
  return (
    <React.Fragment>
      <Navbar className="navbar-custom" collapseOnSelect expand="md">
      {/* React through a handy error.
      Emojis should be wrapped in <span>, have role="img" and aria-labelledby */}
        <Navbar.Brand href="/"><span role="img" aria-labelledby="cat1">🐱</span> Cat API</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/*
          ml-auto handy boostrap auto margins
          https://getbootstrap.com/docs/4.0/utilities/flex/
          */}
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/breeds">
              <Nav.Link className="animated rubberBand">Breeds</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
}
