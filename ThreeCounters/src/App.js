
import React, { Component } from 'react';
import './App.css';
import Counter from './component/Counter';
import CounterAll from './component/CounterAll';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state =
    {
      counter1 : 0,
      counter2 : 0,
      counter3 : 0
    }
  }

  increment = (counterName, counterVal) =>
    {
      counterVal++; 
        this.setState({
          [counterName]: counterVal
        });
    }

  decrement = (counterName, counterVal) =>
    {
      counterVal--; 
        this.setState({
          [counterName]: counterVal
        });
    }

  increaseAll = () =>
    {
      this.state.counter1++;
      this.state.counter2++;
      this.state.counter3++;
      this.setState({
        counter1:this.state.counter1,
        counter2:this.state.counter2,
        counter3:this.state.counter3
      });
    }

  decreaseAll = () =>
    {
      this.state.counter1--;
      this.state.counter2--;
      this.state.counter3--;
      this.setState({
        counter1:this.state.counter1,
        counter2:this.state.counter2,
        counter3:this.state.counter3
      });
    }

  render() {
    return (
      <div className="App">
        <h1>COUNTER</h1>
        <Counter
          count={this.state.counter1}
          increment={() => {this.increment('counter1',this.state.counter1)}} 
          decrement={() => {this.decrement('counter1',this.state.counter1)}}
        />

        <Counter
          count={this.state.counter2}
          increment={() => {this.increment('counter2',this.state.counter2)}} 
          decrement={() => {this.decrement('counter2',this.state.counter2)}}
        />

        <Counter
          count={this.state.counter3}
          increment={() => {this.increment('counter3',this.state.counter3)}} 
          decrement={() => {this.decrement('counter3',this.state.counter3)}}
        />

         <CounterAll increaseAll={this.increaseAll} decreaseAll={this.decreaseAll}/> 
      </div>
    );
  }
}

export default App