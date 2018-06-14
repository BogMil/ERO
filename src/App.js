import React, { Component } from 'react';
import Login from './components/Login';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { Redirect } from 'react-router';
import TestPage from './components/TestPage';
import { Grid, Col, Row } from 'react-bootstrap';
import MasterPage from './components/MasterPage';


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
      this.setState((prevState) => ({ isAuthenticated: !prevState.isAuthenticated }));
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
          <Link to="/test" >Link below</Link>
          <Grid>
            <div>
              <Route path="/" Component {MasterPage} >

                <Route path='/login' exact
                  render={() => <Login isValidUser={this.authenticate} />} />

                <Route path='/test' exact render={() => {
                  if (!this.state.isAuthenticated) {
                    return (<Redirect to='/' />);
                  }
                  else {
                    return (
                      <TestPage logout={this.logout} />
                    );
                  }
                }} />

              </Route>

              <Link to="/test" >Link to test page</Link>
            </div>

            <h1>{this.state.isAuthenticated ? 'authenticated' : 'not authenticated'}</h1>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
