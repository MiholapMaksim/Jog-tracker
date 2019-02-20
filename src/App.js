import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import Header from './containers/header/Header';
import Home from './containers/content/Home';
import Info from './components/content/Info';
import Jogs from './containers/content/Jogs';
import AddJog from './containers/content/AddJog';
import {checkActivePage} from "./actions";

class App extends Component{

    render () {
        return (
            <>
                <Header />
                <div className="col-12 content-wrapper">
                    <div className="row align-items-center justify-content-center h-100">
                        <Route exact path="/" component={Home} />
                         <Route path="/jogs" render={() => {
                            if (this.props.status)
                                return <Jogs />;
                            else{
                                this.props.checkActivePage("/");
                                return <Redirect to="/" />;
                            }
                        }} />
                        <Route path="/info" component={Info} />
                        <Route path="/add-jog" component={AddJog} />
                    </div>
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        status: state.page.statusAuthenticate,
        currentPage: state.page.currentPage,
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        checkActivePage: checkActivePage
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App);