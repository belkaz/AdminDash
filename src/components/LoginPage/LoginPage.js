import React, { Component } from 'react';
import './Login.scss';
import { Form, Button } from 'react-bootstrap';

import { BrowserRouter as Router, 
  Route, 
  Switch,
  Redirect,
  Link } from 'react-router-dom';

class LoginPage extends Component {
  render() {
    return (
      <div className="App">
       <Form className = 'LoginForm'>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Login</Form.Label>
          <Form.Control type="text" placeholder="Enter email" />
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
          onClick = { ()=>{this.props.history.push("/main");}}>          
            LogIn          
        </Button>
        <Button variant="warning" type="submit">
          RegIn
        </Button>
      </Form>
      </div>
    );
  }
}

export default LoginPage;
