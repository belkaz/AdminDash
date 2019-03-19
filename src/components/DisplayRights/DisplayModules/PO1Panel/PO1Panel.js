import React, { Component } from 'react';

import './PO1Panel.css' ;

import PO1Unit from '../PO1Unit/PO1Unit.js';

class PO1Panel extends Component {
    render() {
        return (
            <div className = 'PO1Panel'>
                <PO1Unit 
                    val = {this.props.rr[0]} 
                    unit = '16401' 
                    lef = '10'/>
                <PO1Unit 
                    val = {this.props.rr[1]} 
                    unit = '16402' 
                    lef = '110'/>
                <PO1Unit 
                    val = {this.props.rr[2]}
                    unit = '16403' 
                    lef = '210'/>
                <PO1Unit 
                    val = {this.props.rr[3]}
                    unit = '16404' 
                    lef = '310'/>
                <PO1Unit 
                    val = {this.props.rr[4]} 
                    unit = '16464' 
                    lef = '410'/>
            </div>
        )
    }
}

export default PO1Panel;