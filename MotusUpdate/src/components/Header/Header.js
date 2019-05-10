import React, { Component } from 'react';
import './../../sass/style.css';
// import { Navbar, Nav, Form } from 'react-bootstrap';
// import Customer from './../Customer';
import logo from './../../assets/logo.png';
import {
    Link
} from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <header>
             
                <div className="logo-navbar">
                    <div className="logo-div">
                        <img className="logo" src={logo} alt="Logo" />
                    </div>
                    <div className="navBar">
                        <ul>
                            <li><Link to='/'>Home </Link></li>
                            <li><Link to='/customer'>Customer </Link></li>

                            <li><a href="#">Reports</a></li>
                            <li><a href="#">Help</a></li>
                        </ul>
                    </div>
                </div>

                <div className="search">
                    <span className="search-icon"><i className="fas fa-search"></i></span>
                    <span><i className="fas fa-user-circle"></i></span>
                </div>
                {/* </div> */}

            </header>


            
        );
    }
}

export default Header;