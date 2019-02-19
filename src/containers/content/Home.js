import React, {Component} from 'react';
import './home.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {checkWindowWidth, changeStatusAuthenticate} from "../../actions";

class Home extends Component{

    componentDidMount() {
        window.addEventListener("resize", this.resize);
        this.resize();
    }

    resize = () => {
        this.props.checkWindowWidth(window.innerWidth);
    };

    getToken = async (e) => {
        let response = await fetch("https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin", {
            body: "uuid=hello",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST"
        });

        let responseToken = await response.json();
        localStorage.setItem('access_token', responseToken.response.access_token);
        localStorage.setItem('token_type', responseToken.response.token_type);
        this.props.changeStatusAuthenticate(!!localStorage.getItem("access_token") );
    };

    render () {
        return (
            <div className="panel-let-in">
                <div className="image-wrapper">
                    <img src={this.props.imageBear} />
                </div>
                <Link to="/jogs" onClick={this.getToken}>Let me in</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        imageBear: state.images.currentBear
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        checkWindowWidth: checkWindowWidth,
        changeStatusAuthenticate: changeStatusAuthenticate
    }, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(Home);