import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux"
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import ItemsListReducer from "./redux/reducers/ItemsListReducer";
import RoutedApp from "./containers/RoutedApp";


const combinedReducers = combineReducers({ItemsListReducer});
const middleware = applyMiddleware(  promise(), thunk ,logger);
const store = createStore(combinedReducers,middleware);



ReactDOM.render(
    <Provider store ={store}>
        <RoutedApp></RoutedApp>
    </Provider>


    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
