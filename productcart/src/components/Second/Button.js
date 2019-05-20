import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Button extends Component {
    state = {  }
    render() { 
        return (
            
            <Link to='/'><button className="btn_continue">Continue Shopping</button></Link>
            
          
         );
    }
}
 
export default Button;