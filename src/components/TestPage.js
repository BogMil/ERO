import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

class TestPage extends Component {

  constructor(props){
    super(props);

    this.state={
      redirectToHome:false
    }

    this.logout=this.logout.bind(this);
  }

  logout(e){
    e.preventDefault();
    this.props.logout();
  }

  render() {

    if(this.state.redirectToHome)
      return (<Redirect to='/'/>);

    return (
      <div>
            <h1>Test Page</h1>
            <button onClick={this.logout}>logout</button>
            <button onClick={()=>{this.setState({redirectToHome:true})}}>Home</button>
            
      </div>
    )
  }
}

export default TestPage;
