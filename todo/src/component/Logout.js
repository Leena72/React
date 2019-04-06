import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Logout extends Component
{

    render(){

  
    return (
        <div>
            {
                this.props.isValidated ? 
                <div>{this.props.toggleValidation()}
                <h1>logout</h1></div> :  <Redirect to="/" />
            }
        </div>
    )
    
}

    }

export default Logout;