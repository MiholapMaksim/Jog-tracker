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

    render () {
        return (
            <div className="panel-let-in">
                <div className="image-wrapper">
                    <img src={this.props.imageBear} />
                </div>
                <Link to="/jogs" >Let me in</Link>
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