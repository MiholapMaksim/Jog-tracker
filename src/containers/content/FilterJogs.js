import React, {Component} from 'react';
import './filter-jogs.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getDataFormFilter, changeStateFilter, checkStateFilter} from "../../actions";

class FilterJogs extends Component{

    elementFilterWrapper = {};

    componentWillUnmount(){
        this.props.changeStateFilter(true);
        this.props.checkStateFilter(false);
    }

    showFilterForm = () =>{
        return  this.props.currentStateFilter ? {bottom: -this.elementFilterWrapper.offsetHeight} : {bottom: "0"};
    };

    getFilterWrapper = (node) => {
        this.elementFilterWrapper = node;
    };

    getCorrectDate = (regexp, value) =>{
        let arrayDate = regexp.exec(value);
        let date = new Date(arrayDate[3], arrayDate[2] - 1, arrayDate[1]);
        return date.getTime()  / 1000;
    };

    getFormData = (e) => {
        e.preventDefault();
        let regexp = new RegExp('(\\d{2})[.](\\d{2})[.](\\d{4})$');
        let dateFrom = e.target.elements.date_from.value;
        let dateTo = e.target.elements.date_to.value;
        if ((regexp.test(dateFrom) && regexp.test(dateTo)) || (dateFrom === "" && dateTo === "")) {
            let dateForm = {
                dateFrom: "",
                dateTo: ""
            };
            if (dateFrom !== "") {
                dateForm = {
                    dateFrom:  dateFrom,
                    dateTo:  dateTo
                };
            }
            this.props.getDataFormFilter(dateForm);
        }
        else{
            alert("Format date: 'dd.mm.yyyy'");
        }

    };

    render () {
        return (
            <div className="col-12 filtration-form-wrapper" ref={this.getFilterWrapper} style={this.showFilterForm()}>
                <form id="filtration" className="row justify-content-center" method="post" onSubmit={this.getFormData}>
                    <label className="col-md-2">
                        Date from
                        <input type="text" name="date_from" id="date_from" defaultValue={this.props.dataForm.dateFrom}/>
                    </label>
                    <label className="col-md-2">
                        Date to
                        <input type="text" name="date_to" id="date_to" defaultValue={this.props.dataForm.dateTo}/>
                    </label>
                    <input type="submit" style={{"display":"none"}} />
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentStateFilter: state.filter.stateFilter,
        dataForm: state.filter.dataForm
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        getDataFormFilter: getDataFormFilter,
        checkStateFilter: checkStateFilter,
        changeStateFilter: changeStateFilter
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(FilterJogs);