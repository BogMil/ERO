import React, { Component } from 'react';
import {Nav,Navbar,NavDropdown,NavItem,MenuItem} from 'react-bootstrap';
import { BrowserRouter as Router,Route,Redirect, withRouter,Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import TestPage from './TestPage';

class NavigationBar extends Component {
  render() {
    return (
      <Router>
        <div>
        <Link to="/test">Link test</Link>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to = '/test'>
                <NavItem eventKey={1}>
                  Link to test with COntainer
                </NavItem>
              </LinkContainer >
              <NavItem eventKey={2} href="#">
                Link
              </NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Link Right
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link Right
              </NavItem>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      </div>
    </Router>
    )
  }
}

export default (NavigationBar)