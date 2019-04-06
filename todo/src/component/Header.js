import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component
{
    
    render()
    {
        return(
            <div className="Header">
                <h1>To Do List</h1>
                <nav>
                    {console.log(this.props)}
        { this.props.validate ? <Link className="link" to="/logout">Logout</Link> 
                    : <Link className="link" to="/">Login</Link> }

                </nav>
            </div>
        );
    }
}

export default Header;