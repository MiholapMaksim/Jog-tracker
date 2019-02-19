import React, {Component} from 'react';
import './header.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Logo from './Logo';
import Menu from './Menu';
import {Route} from "react-router-dom";
import Jogs from "../content/Jogs";

class Header extends Component{
    render () {
        return (
            <header>
                <div className="col-12 header-wrapper">
                    <div className="row header">
                        <Logo image={this.props.imageLogo} />
                        {this.props.status ? <Menu /> : ""}

                    </div> 
                </div>  
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        imageLogo: state.images.currentLogo,
        status: state.page.statusAuthenticate
    };
}


export default connect(mapStateToProps)(Header);