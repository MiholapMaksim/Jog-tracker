import React , {Component} from 'react';
import './jogs.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {setJogs, changeStatusResponseGetJogs, checkActivePage} from "../../actions";
import JogItem from "../../components/content/JogItem";
import NoneJogs from "./NoneJogs";

class Jogs extends Component {

    async componentDidMount() {
        let response = await fetch("https://jogtracker.herokuapp.com/api/v1/data/sync", {
            headers: {
                Accept: "application/json",
                Authorization: localStorage.getItem("token_type") + " " + localStorage.getItem("access_token")
            }
        });
        let responseJogs = await response.json();
        this.props.setJogs(responseJogs.response.jogs);
        this.props.changeStatusResponseGetJogs(response.ok);
    }

    handlerClickLink = (e) => {
        this.props.checkActivePage(e.currentTarget.attributes.href.nodeValue);
    };

    getCorrectDate = (date) => {
        let fullDate = new Date(date * 1000);
        return (
            (fullDate.getDate().toString().length > 1 ? fullDate.getDate() : "0" + fullDate.getDate())
            + "."
            + (fullDate.getMonth().toString().length > 1 ? fullDate.getMonth() + 1 : "0" + (fullDate.getMonth() + 1))
            + "."
            + fullDate.getFullYear()
        ).toString();
    };

    showJogs = () => {
        if (this.props.jogs.length > 0){
            return (
                <>
                    <div className="col-md-2 list-jogs-wrapper">
                        <div className="row">
                            {this.props.jogs.map((jog) =>{
                                if ((this.props.dataFilter.dateFrom < jog.date && this.props.dataFilter.dateTo > jog.date) || (this.props.dataFilter.dateFrom === ""))
                                    return(
                                        <JogItem key={jog.id} jog={jog} getCorrectDate={this.getCorrectDate}/>
                                    )
                            })}
                        </div>
                    </div>
                    <Link to="/add-jog" className="add-jog" onClick={this.handlerClickLink}><img src="images/panel/add.svg"/></Link>
                </>
            )
        }
        else{
            return (
                <NoneJogs />
            )
        }
    };

    render(){
        return(
            <>
                {this.props.status  ?
                    this.showJogs()
                 : ""
                }

            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        status: state.jogs.statusResponse,
        jogs: state.jogs.list_jogs,
        dataFilter: state.filter.dataForm
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        changeStatusResponseGetJogs: changeStatusResponseGetJogs,
        setJogs: setJogs,
        checkActivePage: checkActivePage
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Jogs);