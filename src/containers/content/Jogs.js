import React , {Component} from 'react';
import './jogs.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setJogs, changeStatusResponseGetJogs} from "../../actions";
import JogItem from "../../components/content/JogItem";

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

    getCorrectDate = (date) => {
        let fullDate = new Date(date * 1000);
        return (
            (fullDate.getDay().toString().length > 1 ? fullDate.getDay() : "0" + fullDate.getDay())
            + "."
            + (fullDate.getMonth().toString().length > 1 ? fullDate.getMonth() + 1 : "0" + (fullDate.getMonth() + 1))
            + "."
            + fullDate.getFullYear()
        ).toString();
    };

    showJogs = () => {
        if (this.props.jogs.length > 0){
            return (
                <div className="col-md-2 list-jogs-wrapper">
                    <div className="row">
                        {this.props.jogs.map((jog) =>{
                            return(
                                <JogItem key={jog.id} jog={jog} getCorrectDate={this.getCorrectDate}/>
                            )
                        })}
                    </div>
                </div>
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
        jogs: state.jogs.list_jogs
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        changeStatusResponseGetJogs: changeStatusResponseGetJogs,
        setJogs: setJogs
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Jogs);