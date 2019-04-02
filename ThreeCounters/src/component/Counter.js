import React, { Component } from 'react';
class Counter extends Component
{
    constructor(props) 
    {
      super(props);
    }
    
    render() {
      return (
        <div className="counter">
          <button onClick={this.props.increment}>+</button>
          <span>{this.props.count}</span>
          <button onClick={this.props.decrement}>-</button>
        </div>
      );
    }
}   

export default Counter;
