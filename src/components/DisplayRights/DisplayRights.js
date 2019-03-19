import React, { Component } from 'react';

import { connect } from 'react-redux';

import './DisplayRights.css';

import PO0Panel from './DisplayModules/PO0Panel/PO0Panel';
import PO1Panel from './DisplayModules/PO1Panel/PO1Panel';
import PO2Panel from './DisplayModules/PO2Panel/PO2Panel';
import PO3Panel from './DisplayModules/PO3Panel/PO3Panel';
import SinglePO from './DisplayModules/SinglePO/SinglePO';

class DisplayRights extends Component {
    constructor ( props ) {
        super ( props );
        this.state = {
          po0 : ['0','0','1','0','0'],
          po1 : ['-', '-', '-', '-', '-'],
          po2 : ['-', '-', '-', '-', '-'],
          po3 : ['-', '-', '-', '-', '-'],
          po4 : '0',
          po5 : '1',
          po6 : '0',
          po7 : '1'
        }
      }
    render() {
        return (
            <div className = 'DisplayRights'>
                { this.props.FIO } 
                <PO0Panel rr = { {} }/>
                <PO1Panel rr = { {} }/>
                <PO2Panel rr = { {} }/>
                <PO3Panel rr = { {} }/>
                <SinglePO po = 'PO4' ch = { '' } tt = '450'/>
                <SinglePO po = 'PO5' ch = { '' } tt = '500'/>
                <SinglePO po = 'PO6' ch = { '' } tt = '550'/>
                <SinglePO po = 'PO7' ch = { '' } tt = '600'/>
            </div>
        )
    }
}

let mapToState = state => {
    return {
        user : state.user
    }
}

export default connect(mapToState)(DisplayRights)