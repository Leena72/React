import React, { Component } from 'react';
import '../../sass/style.css';
class DriverManagement extends Component {
    state = {  }
    render() { 
        return (
            
            <div>
            <form >
                <div className="driverManagement">
                <label className="category">Driver Management</label>
                <div className="enablecheck">
                    <div><input type="radio" name="driver-mgmt" value="Self-Services"/>Self-Service</div>
                     <div> <input type="radio" name="driver-mgmt" value="HRIS Field" />HRIS Field</div>
                     <div><input type="radio" name="driver-mgmt" value="Motus API" />Motus API</div>
                  
                </div>
                <div className="fixedpayment">
                    <label className="category">Fixed Payment Schedule</label>
                    <p>Applies to Fixed and Variable Product Only</p>
                    <div className="enablecheck"> 
                        <div><input type="radio" name="fixed-payment" value="Prior Month" />Prior Month (Arrears)</div>
                        <div><input type="radio" name="fixed-payment" value="Current Month" />Current Month (Upfront)</div>
                    </div>
                </div>
                </div>
            </form>
        </div>      
          
          );
    }
}
 
export default DriverManagement;