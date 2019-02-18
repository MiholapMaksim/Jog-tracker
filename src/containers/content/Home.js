import React, {Component} from 'react';
import './home.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {checkWindowWidth} from "../../actions";

class Home extends Component{

    componentDidMount() {
        window.addEventListener("resize", this.resize);
        this.resize();
    }

    resize = () => {
        this.props.checkWindowWidth(window.innerWidth);
    }

    getUser = async (e) => {
        e.preventDefault();
        let response = await fetch("https://jogtracker.herokuapp.com/api/v1/auth/user", {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer eb8cdf9e61521369da24ab55f0095f5da870881990d9b75daefef50333178daf"
                }
        }).then((response) => {
            return response.json();
        });
    }

    render () {
        return (
            <div className="panel-let-in">
                <div className="image-wrapper">
                    <img src={this.props.imageBear} />
                </div>
                <Link to="/jogs" onClick={this.getUser}>Let me in</Link>
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
    return bindActionCreators({checkWindowWidth: checkWindowWidth}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(Home);