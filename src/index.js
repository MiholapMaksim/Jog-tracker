import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {BrowserRouter as Router, Route} from "react-router-dom";
import allReducers from './reducers';
import Header from './containers/header/Header';
import Home from './containers/content/Home';
import Info from './components/content/Info';

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <Header />
        <div className="col-12 content-wrapper">
            <div className="row align-items-center justify-content-center h-100">
                <Router>
                    <>
                        <Route exact path="/" component={Home} />
                        <Route path="/info" component={Info} />
                    </>
                </Router>
            </div>
        </div>
    </Provider>, 
    document.getElementById('page'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
