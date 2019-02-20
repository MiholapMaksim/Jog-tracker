import React , {Component} from 'react';
import './add-jog.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {checkActivePage} from "../../actions";

class AddJog extends Component {

    elementSubmit = {};
    statusAdd = false;

    getElementSubmit = (node) => {
        this.elementSubmit = node;
    };

    handlerClickLink = (e) => {
        this.props.checkActivePage(e.currentTarget.attributes.href.nodeValue);
    };

    handlerClickSave = (e) => {
        this.elementSubmit.click();
        !this.statusAdd ? e.preventDefault() : this.props.checkActivePage(e.currentTarget.attributes.href.nodeValue);
    };

    addJog = async (e) => {
        e.preventDefault();
        let dataForm = {
            distance: e.target.elements.distance.value,
            time: e.target.elements.time.value,
            date: e.target.elements.date.value
        };
        let regexp = new RegExp('(\\d{2})[.](\\d{2})[.](\\d{4})');
        if (dataForm.distance !== "" && dataForm.time !== "" && dataForm.date !== "" && regexp.test(dataForm.date)){
            this.statusAdd = true;
            let response = await fetch("https://jogtracker.herokuapp.com/api/v1/data/jog", {
                body: "date=" + dataForm.date + "&time=" + dataForm.time + "&distance=" + dataForm.distance,
                headers: {
                    Accept: "application/json",
                    Authorization: localStorage.getItem("token_type") + " " + localStorage.getItem("access_token"),
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                method: "POST"
            });
            await response.json().ok ? alert("Save") : alert("Not save");

        }else{
            this.statusAdd = false;
            alert("Incorrect Data");
        }

    };

    render(){
        return(
            <div className="panel-add-run">
                <form id="add-run" method="post" onSubmit={this.addJog}>
                    <label>
                        Distance
                        <input type="number" name="distance" id="distance"/>
                    </label>
                    <label>
                        Time
                        <input type="number" name="time" id="time"/>
                    </label>
                    <label>
                        Date
                        <input type="text" name="date" id="date"/>
                    </label>
                    <Link to="/jogs" onClick={this.handlerClickSave}>Save</Link>
                    <input type="submit" style={{"display":"none"}} ref={this.getElementSubmit}/>
                </form>
                <Link to="/jogs" className="cancel" onClick={this.handlerClickLink}> <img src="images/panel/cancel.svg"/></Link>
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

export default connect(mapStateToProps, matchDispatchToProps)(AddJog);