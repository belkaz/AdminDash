import React, { Component } from 'react';
import './App.scss';

import { connect } from 'react-redux'; 

import LoginPage from '../LoginPage/LoginPage';
// import CMain from '../Main/Main';
// import CAdmin from '../Admin/Admin';

class App extends Component {     
  constructor ( props ) {
    super ( props );
    this.state = {
      curPage : this.props.curPage
    }
  }
  render() {
    return (
      <div className = 'App'>
      {this.state.curPage}
      {this.props.curPage}
        <LoginPage />
      </div>
    )
  }
}

const mapState = state => {
  return {
    curPage : state.showScreen
  }
}

export default connect(mapState) (App);
