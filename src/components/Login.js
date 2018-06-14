import React, { Component } from 'react';
import { Form,
        FormGroup,
        FormControl,
        Row,
        Col,
        Button } from 'react-bootstrap';
import { Redirect } from 'react-router';

class Login extends Component {

  constructor(props){
    super(props);

    this.state={
      redirectToHome : false,
      email : '',
      password : ''
    };

    this.onLoginClicked = this.onLoginClicked.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onLoginClicked(e){
    e.preventDefault();

    if(this.props.isValidUser(this.state.email,this.state.password)){
      this.setState({redirectToHome:true});
    }
    else{alert('Wrong credentials')}
  }

  onChangeEmail(e){
    this.setState({email:e.target.value});
  }

  onChangePassword(e){
    this.setState({password:e.target.value});
  }

  render() {

    if(this.state.redirectToHome){
      return <Redirect to='/home' />
    }

    return (
      <div>
        <Row>
          <Form horizontal >
            <FormGroup controlId="email">
              <Col lgOffset={3} lg={6}>
                <FormControl type="email" 
                placeholder="Email"  
                defaultValue={this.state.email}
                onChange = {this.onChangeEmail}/>
              </Col>              
            </FormGroup>

            <FormGroup controlId="password">
              <Col lgOffset={3} lg={6}>
                <FormControl type="password" 
                placeholder="Password" 
                defaultValue={this.state.password}
                onChange = {this.onChangePassword}/>
              </Col>
            </FormGroup>

            <FormGroup >
              <Col style={{textAlign:'center'}} lgOffset={3} lg={6} >
                <Button  type="submit" onClick={this.onLoginClicked}>
                Login
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Row>        
      </div>
      
    )
  }
}


export default Login;