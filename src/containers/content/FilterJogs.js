import React, {Component} from 'react';
import './filter-jogs.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import {changeStateFilter} from "../../actions";

class FilterJogs extends Component{

    elementFilterWrapper = {};

    showFilterForm = () =>{
        return  this.props.currentStateFilter ? {bottom: -this.elementFilterWrapper.offsetHeight} : {bottom: "0"};
    };

    getFilterWrapper = (node) => {
        this.elementFilterWrapper = node;
    };


    render () {
        return (
            <div className="col-12 filtration-form-wrapper" ref={this.getFilterWrapper} style={this.showFilterForm()}>
                <form id="filtration" className="row justify-content-center" method="post">
                    <label className="col-md-2">
                        Date from
                        <input type="text" name="date_from" id="date_from"/>
                    </label>
                    <label className="col-md-2">
                        Date to
                        <input type="text" name="date_to" id="date_to"/>
                    </label>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentStateFilter: state.filter.stateFilter
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({

    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(FilterJogs);