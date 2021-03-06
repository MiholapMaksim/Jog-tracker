import React, {Component} from 'react';
import './header.css';
import {connect} from 'react-redux';
import Logo from '../../components/header/Logo';
import Menu from './Menu';
import FilterJogs from "../content/FilterJogs";


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
                {this.props.currentPage === "/jogs" && <FilterJogs />}
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        imageLogo: state.images.currentLogo,
        status: state.page.statusAuthenticate,
        currentPage: state.page.currentPage
    };
}

export default connect(mapStateToProps)(Header);