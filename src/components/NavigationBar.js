import React, { Component } from 'react';
import {Nav,Navbar,NavDropdown,NavItem,MenuItem} from 'react-bootstrap';
import { BrowserRouter as Router,Route,Redirect, withRouter,Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import TestPage from './TestPage';

class NavigationBar extends Component {

  constructor(props){
    super(props);

  }

  render() {
    // if(!this.props.isAuthenticated){
    //   return (<div>You need to log in</div>);
    // }
    return (
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              {this.props.isAuthenticated && <a href="#brand">React-Bootstrap</a>}
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
              <LinkContainer to = '/table'>
                <NavItem eventKey={1}>
                  table
                </NavItem>
              </LinkContainer >
              <LinkContainer to="/login">
                <NavItem eventKey={2}>Login</NavItem>
              </LinkContainer>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <LinkContainer to="/private">
                  <NavItem eventKey={3.1}>Private</NavItem>
                </LinkContainer>
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
    )
  }
}

export default NavigationBar