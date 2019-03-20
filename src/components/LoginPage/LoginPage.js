import React, { Component } from 'react';
import './Login.scss';
import { Form, Button } from 'react-bootstrap';

import { AtryToLog } from '../../redux/actions/tryTolog';

import { connect } from 'react-redux';

class LoginPage extends Component {
  constructor ( props ) {
    super ( props );
    this.state = {
      login : ''
    }
  }
  loginTextHandler = (e) => {
    this.setState ({login: e.target.value})   
  }
  tryToLog = () => {
    this.props.login( this.state.login )
  } 
  render() {
    return (
      <div className="App">
       <Form className = 'LoginForm'>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Login</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter email" 
            onChange = { this.loginTextHandler.bind(this)}/>
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        {/* <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button 
          variant="primary" 
          type="submit"
          onClick = { ()=>{    
              console.log ( this.props.showScreen) ;                       
              this.tryToLog();
              console.log ( this.state.login +'  '+this.props.showScreen) ; }}>              
          Submit
        </Button>
      </Form>
      </div>
    );
  }
}

let mapState = state => {
  return {
      showScreen : state.showScreen
    } 
}

let dispEv = dispatch => {
  return {
    login: logpass => dispatch(AtryToLog(logpass)),
  }
}

export default connect(mapState, dispEv) (LoginPage);
