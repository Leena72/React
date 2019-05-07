import React, { Component } from 'react';
class Middle3 extends Component {
    state = {  }
    render() { 
        return (  
        <div className="form-group middle ">
       
            <p>Select Transaction Type:</p>
            <div><input type="radio" name="fixed-payment" value="Current Month" />Customer sends funds to Motus</div>
            <div><input type="radio" name="fixed-payment" value="Current Month" />Motus pulls funds from customer</div>
     
        </div>
        );
    }
}
 
export default Middle3;