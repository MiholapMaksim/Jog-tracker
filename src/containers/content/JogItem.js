import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {bindActionCreators} from "redux";
import {checkActivePage, getActiveJog} from "../../actions";
import connect from "react-redux/es/connect/connect";

class JogItem extends Component {

    handlerClickLink = (e) => {
        this.props.checkActivePage(e.currentTarget.attributes.href.nodeValue);
        let activeJog = Object.assign({}, this.props.jog, {
            date: this.props.getCorrectDate(this.props.jog.date)
        });
        this.props.getActiveJog(activeJog);
    };

    render(){
        return(
            <Link to="/add-jog" className="col-12 item" onClick={this.handlerClickLink}>
                <div className="row align-items-center">
                    <div className="col-md-5 col-6 image-wrapper">
                        <img src="../images/panel/icon.svg"/>
                    </div>
                    <div className="col-md-7 col-6 desc-wrapper">
                        <p className="date">{this.props.getCorrectDate(this.props.jog.date)}</p>
                        <p><span>Distance:</span> {this.props.jog.distance} km</p>
                        <p><span>Time:</span> {this.props.jog.time} min</p>
                    </div>
                </div>
            </Link>
        )
    }
}

function mapStateToProps(state) {
    return {

    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        checkActivePage: checkActivePage,
        getActiveJog: getActiveJog
    }, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(JogItem);