import React, { Component } from 'react';

import Header from './component/Header'
import Main from './component/Main'
import Footer from './component/Footer'
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state={ count:0}
  }

  getCount = () => {
    // this.state.count++;
    this.setState({
    count:this.state.count+1
    });
    }

    
  render() {
    return (
   <div className="App">
   <Header  countnumber={this.state.count}/>
   <Main getCountFunct={this.getCount}/>
   <Footer/>
   </div>
    );
  }
}

export default App;
