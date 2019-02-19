import React , {Component} from 'react';
import './menu.css';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {checkActivePage, checkStateMenu, changeStateMenu, changeStateFilter, checkStateFilter} from "../../actions";

class Menu extends Component {
    
    elementHeader = {};

    changeMenuMobile = () =>{
        this.props.changeStateMenu(this.props.currentStateMenu);
        this.props.checkStateMenu(!this.props.currentStateMenu);
    };

    handlerClickLink = (e) => {
        this.props.checkActivePage(e.currentTarget.attributes.href.nodeValue);
        if (window.innerWidth < 768){
            this.elementHeader.classList.remove('menu_state_open');
            this.changeMenuMobile();
        }
    };

    handlerClickOpenMenu = (e) => {
        this.elementHeader = this.elementHeader !== {} ? e.currentTarget.parentElement : {};
        if (this.props.currentStateMenu)
            this.elementHeader.classList.remove('menu_state_open');
        else
            this.elementHeader.classList.add('menu_state_open');
        if (window.innerWidth < 768){
            this.changeMenuMobile();
        }
    };

    openFilterForm = () => {
        this.props.changeStateFilter(this.props.currentStateFilter);
        this.props.checkStateFilter(!this.props.currentStateFilter);
    };

    render(){
        return(
            <>
                <ul className="menu">
                    <li><NavLink to="/jogs" activeClassName="active" onClick={this.handlerClickLink}>Jogs</NavLink></li>
                    <li><NavLink to="/info" activeClassName="active" onClick={this.handlerClickLink}>Info</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active" onClick={this.handlerClickLink}>Contact us</NavLink></li>
                </ul>
                <a className="filtration-button" onClick={this.openFilterForm}><img src={this.props.currentImageFilter} /></a>
                <div className="menu_icon" onClick={this.handlerClickOpenMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentPage: state.page.currentPage,
        currentLogo: state.images.currentLogo,
        currentStateMenu: state.page.stateMenu,
        currentStateFilter: state.filter.stateFilter,
        currentImageFilter: state.images.currentFilter
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        checkActivePage: checkActivePage,
        checkStateMenu: checkStateMenu,
        changeStateMenu: changeStateMenu,
        changeStateFilter: changeStateFilter,
        checkStateFilter: checkStateFilter
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Menu);