import React, { Component } from 'react';

import './PO3Panel.css' ;

import PO3Unit from '../PO3Unit/PO3Unit.js';

class PO3Panel extends Component {
    render() {
        return (
            <div className = 'PO3Panel'>
                <PO3Unit 
                    val = {this.props.rr[0]} 
                    unit = '16401' 
                    lef = '10'/>
                <PO3Unit 
                    val = {this.props.rr[1]} 
                    unit = '16402' 
                    lef = '70'/>
                <PO3Unit 
                    val = {this.props.rr[2]} 
                    unit = '16403' 
                    lef = '130'/>
                <PO3Unit 
                    val = {this.props.rr[3]} 
                    unit = '16404' 
                    lef = '190'/>
                <PO3Unit 
                    val = {this.props.rr[4]} 
                    unit = '16464' 
                    lef = '250'/>
            </div>
        )
    }
}

export default PO3Panel;