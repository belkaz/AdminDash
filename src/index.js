import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import LoginPage from './components/LoginPage/LoginPage';
import App from './components/App/App';

import { BrowserRouter as Router, 
            Route, 
            Switch,
            Redirect } from 'react-router-dom';

import { Provider } from 'react-redux';
import  { createStore }  from 'redux';
import red from './redux/rootReducer';
import initState from './redux/initState';

let store = createStore( red, initState )

ReactDOM.render(
    <Provider store = {store}>    
        <Router>            
            <Switch>
                <Route path ='/' exact component = {LoginPage}/>                
            </Switch>            
        </Router>             
    </Provider>
    , document.getElementById('root'));

