import React, { Component } from 'react';
import Login from './components/Login';
import NavigationBar from './components/NavigationBar';
import {BrowserRouter as Router, Link}  from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { Redirect } from 'react-router';
import  TestPage  from './components/TestPage';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import { Grid,Col,Row } from 'react-bootstrap';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isAuthenticated:false,
      show: false,
    }

    this.authenticate=this.authenticate.bind(this);
    this.logout=this.logout.bind(this);
  }

  authenticate(username,password){
    if(username==='lemi' && password==='test'){
      this.setState((prevState)=>({isAuthenticated:!prevState.isAuthenticated}));
      return true;
    }
  }

  logout(){
    this.setState({isAuthenticated:false});
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <Grid>
        <Router>
          <div>
            <Route path='/' exact 
              render={() => <Login isValidUser={this.authenticate}/>} />
                
            <Route path='/test' exact render = {()=>{
                if(!this.state.isAuthenticated){
                  return (<Redirect to='/'/>);         
                }
                else{
                  return(
                  <TestPage logout={this.logout}/>
                  );
                }
              }}/>
          

          <Link to ="/test" >Link to test page</Link>
          </div>
        </Router>

        <h1>{this.state.isAuthenticated ? 'authenticated' : 'not authenticated'}</h1>
      </Grid>
      </div>
    );
  }
}

export default App;
