import React , {Component } from 'react';
import {Navbar,Nav,Form,FormControl} from 'react-bootstrap';
import './Navbar.css';
class Navigation extends Component{
    render(){
        return(
            <div>
                <Navbar bg="white" variant="light" className="mynav">
                <Navbar.Brand href="#home">
                <img src="https://www.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/08/26/Pictures/_baac5fc4-6b4e-11e6-b93e-ca6aaea15854.jpg" alt="Logo" />
                </Navbar.Brand>
                    <Nav className="mr-auto">
                            <Nav.Link href="#men" >MEN</Nav.Link>
                            <Nav.Link href="#women">WOMEN</Nav.Link>
                            <Nav.Link href="#kids">KIDS</Nav.Link>
                            <Nav.Link href="#homeAndLiving">HOME & LIVING</Nav.Link>
                            <Nav.Link href="#discover">DISCOVER</Nav.Link>
                    </Nav>
                    <Form inline>
                        <i className="fas fa-search"></i>
                        <FormControl type="text" placeholder="search for product brands and more" className="mr-sm-2" />
                        <Nav className="nav-icons">
                            <Nav.Link  href="#"><i className="far fa-user"></i></Nav.Link>
                            <Nav.Link  href="#"><i className="far fa-bookmark"></i></Nav.Link>
                            <Nav.Link  href="#"><i className="fas fa-shopping-bag"></i></Nav.Link>
                        </Nav>
                           
                        <Nav className="nav-icons-text">
                            <Nav.Link href="#">Profile</Nav.Link>
                            <Nav.Link href="#">Wishlist</Nav.Link>
                            <Nav.Link href="#">Bag</Nav.Link>
                        </Nav>
                    </Form>
                </Navbar>
            </div>
        );
    }
}

export default Navigation ;