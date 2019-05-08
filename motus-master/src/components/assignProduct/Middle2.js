import React, { Component } from 'react';
class Middle2 extends Component {
    state = {  }
    render() { 
        return (  
        <div className="form-group middle ">
            <p>How often should we calculate incurred tax?</p>
            <select className="form-control selecttech" >
                <option>Annually</option>
                <option>Quarterly</option>
            </select>
            <p>What month should we calculate incurred tax?</p>
            <div><input type="radio" name="fixed-payment" value="Current Month" />November</div>
            <div><input type="radio" name="fixed-payment" value="Current Month" />December</div>
     
        </div>
        );
    }
}
 
export default Middle2;