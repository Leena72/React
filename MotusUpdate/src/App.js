import React, { Component } from 'react';
import './sass/style.css';
import Header from './components/Header/Header';
import NewCustomer from './components/NewCustomer/NewCustomer';
import MainForm from './components/MainForm'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Customer from './components/Customer';


class App extends Component {

  render() {

    return (
      <div className="App">
        <Router>
          <Header />
          <Route
            exact
            path="/"
            component={MainForm}
          />
          <Route
            exact
            path="/customer"
            component={Customer}
          />
        </Router>
        <footer className="footer-component">
          <span className="footerText">&copy; Copyright 2019 Motus, LLC. All Rights Reserved</span>
        </footer>
      </div>
    );
  }
}


export default App;
