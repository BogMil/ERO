import React, { Component } from 'react';
import Login from './components/Login';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { Redirect } from 'react-router';
import TestPage from './components/TestPage';
import Table from './components/Table';
import PrivatePage from './components/PrivatePage';
import { Grid, Col, Row } from 'react-bootstrap';


const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      rest.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to="/login" />
    )} />
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      show: false,
    }

    this.authenticate = this.authenticate.bind(this);
    this.logout = this.logout.bind(this);
  }

  authenticate(username, password) {
    if (username === 'lemi' && password === 'test') {
      this.setState({ isAuthenticated: true });
      return true;
    }
  }

  logout() {
    this.setState({ isAuthenticated: false });
  }

  render() {
    return (
      <Router>
        <div>
          <NavigationBar isAuthenticated={this.state.isAuthenticated} />
          <Grid>

            <Route path='/table' exact  component={Table}/>

            <Route path='/login' exact
              render={() => <Login isValidUser={this.authenticate} />} />

            <PrivateRoute
              path="/private"
              component={PrivatePage}
              isAuthenticated={this.state.isAuthenticated} />

            <PrivateRoute
              path="/test"
              component={TestPage}
              isAuthenticated={this.state.isAuthenticated} />

            <h1>{this.state.isAuthenticated ? 'authenticated' : 'not authenticated'}</h1>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
