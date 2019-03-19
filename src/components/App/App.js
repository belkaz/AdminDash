import React, { Component } from 'react';
import './App.scss';

import { connect } from 'react-redux'; 

import LoginPage from '../LoginPage/LoginPage';
import CMain from '../Main/Main';
import CAdmin from '../Admin/Admin';

class App extends Component {
    hz = () => {    
      switch ( this.props.showScreen ) {
        case 'user' : {
          return <CMain />
        };    
        case 'admin' : {
         return <CAdmin />;
        };
        default: { 
          return <LoginPage />
        }
    };
  }
  render() {
    return (      
      <div className="App">
        { this.hz() }
      </div>
    );
  }
}
let mapState = state => {
  return {
    showScreen : state.showScreen
  }
}

export default connect(mapState) (App);
