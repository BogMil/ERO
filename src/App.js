import React, { Component } from 'react';
import Login from './components/Login';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { Redirect } from 'react-router';
import TestPage from './components/TestPage'; 
import { Grid, Col, Row } from 'react-bootstrap';

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
      this.setState((prevState) => ({ isAuthenticated: true }));
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
          <NavigationBar isAuthenticated={this.state.isAuthenticated}/>
          <Grid>
              <Route path='/login' exact
                render={() => <Login isValidUser={this.authenticate} />} />

              <Route path='/test' exact render={() => {
                if (!this.state.isAuthenticated) {
                  return (<Redirect to='/login' />);
                }
                else {
                  return (
                    <TestPage logout={this.logout} />
                  );
                }
              }} />

            <h1>{this.state.isAuthenticated ? 'authenticated' : 'not authenticated'}</h1>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
