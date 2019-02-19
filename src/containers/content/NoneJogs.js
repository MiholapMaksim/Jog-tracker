import React , {Component} from 'react';
import './none-jogs.css';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {checkActivePage} from "../../actions";

class NoneJogs extends Component {

    handlerClickLink = (e) => {
        this.props.checkActivePage(e.currentTarget.attributes.href.nodeValue);
    };

    render(){
        return(
            <div className="col-md-4 panel-not-found">
                <div className="image-wrapper">
                    <img src="../images/panel/sad-rounded-square-emoticon.svg"/>
                </div>
                <p>Nothing is there</p>
                <NavLink to="/add-jog" activeClassName="active" onClick={this.handlerClickLink}>Create your jog first</NavLink>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        checkActivePage: checkActivePage
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(NoneJogs);