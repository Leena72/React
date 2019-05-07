import React, { Component } from 'react';
import '../../sass/style.css';
class PaymentMethod extends Component {
    state = {  }
    render() { 
        return (
            
                <form className="paymentMethod">
                <label className="category">Payment Method</label>
                <p>Applies to Fixed & Variable Rates and Cent Per Mile product only</p>
                    <div className="enablecheck">
                       <div> <input type="radio" name="payment-method" value="Direct Deposit" /><label>Direct Deposit</label></div>
                       <div> <input type="radio" name="payment-method" value="Concur" /><label>Concur</label></div> 
                       <div> <input type="radio" name="payment-method" value="Payroll File" /><label>Payroll File</label></div> 
                   </div>

                </form>
           
          
          );
    }
}
 
export default PaymentMethod;