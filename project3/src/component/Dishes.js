import React, { Component } from 'react';

class Dishes extends Component {
    render() {
        return (
           <div className="list-div">
               <p>Menu</p>
               <ul>
                  {this.props.dish.map(list=> (
                  <li key={list.name} className="dish-name" onClick={()=>console.log(list.cost,list.ingredients)}>{list.name}</li>
               ))}
               </ul>
               <button className="btn" onClick={this.props.additems}>Add Dish</button>
           </div>
         );
    }
}

export default Dishes;