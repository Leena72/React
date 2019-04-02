import React, { Component } from 'react';
class CounterAll extends Component
{
    constructor(props) 
    {
      super(props);
    }

    render() {
      return (
        <div className="counterAll">
          <button onClick={this.props.increaseAll}>Increase All</button>
          <button onClick={this.props.decreaseAll}>Decrease All</button>
        </div>
      );
    }
}   

export default CounterAll;