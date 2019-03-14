import React, { Component } from 'react';
import './App.scss';

import { connect } from 'react-redux'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        !  {this.props.id}   
      </div>
    );
  }
}

let mapState = state => {
  return {
    id : state.id
  }
}

export default connect(mapState) (App);
