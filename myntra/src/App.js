import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navbar';
import CarouselUp from './components/CarouselUp';
import CardTop from './components/CardTop';
import CarouselDown from './components/CarouselDown';
import Products from './components/Products';

class App extends Component {
  render() {
    return (
      <div className="App">
            <Navigation />
            <CarouselUp />
            <CardTop />
            <CarouselDown />
            <Products />
      </div>
    );
  }
}

export default App;