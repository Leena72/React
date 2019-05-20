import React, { Component } from 'react';
import Table from '../Second/Table';
import Yourdetails from './Yourdetails';
class Checkout extends Component {
    state = {  }
    render() { 
        return (

                <div className="thirdform">
                    <p>CHECKOUT</p>
                    <Table/>
                    <div className="subtotal">
                        <span>Shipping:</span>
                    </div>
                    <div className="subtotal">
                        <span>Totol:</span>
                    </div>
                    <p>Your Details</p>
                    <div className="details">
                   
                    <Yourdetails/>
                    </div>
                   
                    <div className="autofill"><label>Same as Billing<input className="checkbox" type="checkbox"></input></label></div>
                    
                    <div className="details"><Yourdetails/></div>
                    <button className="btn_continue">Submit</button>
                </div>
          );
    }
}
 
export default Checkout;