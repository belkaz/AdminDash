import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/App/App';

import { Provider } from 'react-redux';
import  { createStore }  from 'redux';

import red from './redux/rootReducer';
import initState from './redux/initState';

let store = createStore( red, initState );
    
ReactDOM.render(    
    <Provider store = {store}>  
        <App />            
    </Provider>
    , document.getElementById('root'));

