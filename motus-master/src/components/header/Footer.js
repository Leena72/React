import React, { Component } from 'react';
import '../../mainstylesheet/mainstyle.css';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="footer">
                <p>&copy; Copyright 2019 Motus, LLC. All right reserved.</p>
            </div>
         );
    }
}
 
export default Footer;