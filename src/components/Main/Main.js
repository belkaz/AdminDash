import React, { Component } from 'react';

import { Form, Button } from 'react-bootstrap';

import './Main.css';

class CMain extends Component {
    constructor ( props ) {
        super ( props );
        this.state = {
            fio : 'sad',
            code0 : '123',
            code1 : '123'
        }
    }
    findButClickHandler = () => {
        console.log('!!')
    }
    fioChangeHandler = ( e ) => {
        this.setState({ fio: e.targer.value })
    }
    code0ChangeHandler = (e) => {
        this.setState({ code0 : e.targer.value })
    }
    code1ChangeHandler = (e) => {
        this.setState({ code1 : e.targer.value})
    }
    render() {
        return (
            <div className = 'Main'>
                Main
                <Form className = 'UserForm'>
                    <Form.Group controlID = 'formBasicCode0'>
                        <Form.Label>FIO</Form.Label>
                        <Form.Control 
                                type = 'text'
                                onChange = {this.fioChangeHandler.bind(this)}
                                value = {this.state.fio}>
                            </Form.Control>
                        <Form.Label>CODE0</Form.Label>
                        <Form.Control 
                            type = 'number'
                            className = 'MainSearchCode0'
                            max = '99999'
                            value = {this.state.code0}
                            onChange = {this.code0ChangeHandler.bind(this)}>                                                     
                        </Form.Control>
                        <Form.Label>CODE1</Form.Label>
                        <Form.Control 
                            type = 'number'
                            className = 'MainSearchCode1'
                            max = '99999'
                            value = {this.state.code1}
                            onChange = {this.code1ChangeHandler.bind(this)}>                            
                        </Form.Control>                        
                    </Form.Group>
                    <Button 
                        variant = 'danger'
                        type = 'submit'
                        onClick = { this.findButClickHandler }>
                        Найти пользователя
                    </Button>
            </Form>                
            </div>
        )
    }
}
export default CMain;