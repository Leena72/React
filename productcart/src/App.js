import React from 'react';
// import logo from './logo.svg';
import Product from './components/First/Product';
import WineryForm from './components/Second/WineryForm';
import Checkout from './components/Third/Checkout';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
// import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
      
      <Route
        exact strict
        path="/"
        component={Product}
      />
      
      <Route
      exact strict
      path="/Cart"
      component={WineryForm}
    />

    <Route
      exact strict
      path="/Checkout"
      component={Checkout}
    />
    
      </Router>

     {/*<Product/>
     <WineryForm/>*/}
    </div>
  );
}

export default App;
