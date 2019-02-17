import React , {Component} from 'react';

class Logo extends Component {

    render(){
        return(
            <div className="logo-wrapper">
                <img src={this.props.image} />
            </div>
        );
    }
    
}

export default Logo;