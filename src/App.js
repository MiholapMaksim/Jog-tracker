import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './containers/header/Header';
import Home from './containers/content/Home';
import Info from './components/content/Info';
import Jogs from './containers/content/Jogs';

class App extends Component{

    render () {
        return (
            <>
                <Header />
                <div className="col-12 content-wrapper">
                    <div className="row align-items-center justify-content-center h-100">
                        <Route exact path="/" component={Home} />
                        {this.props.status ? <Route path="/jogs" component={Jogs} /> : ""}
                        <Route path="/info" component={Info} />
                    </div>
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        status: state.page.statusResponse
    };
}

export default connect(mapStateToProps)(App);