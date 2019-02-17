import React, {Component} from 'react';
import './header.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Logo from './Logo';

class Header extends Component{
    render () {
        return (
            <header>
                <div className="col-12 header-wrapper">
                    <div className="row header">
                        <Logo image={this.props.imageLogo} />
                    </div>
                </div>    
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        imageLogo: state.images.currentLogo
    };
}


export default connect(mapStateToProps)(Header);