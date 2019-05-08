import React, { Component } from 'react';
import DriverManagement from './DriverManagment';
import PaymentMethod from './PaymentMethod';
// import '../../sass/style.css'
import Enable from './Enable';
class AssignProduct extends Component {

    // saveAndContinue = (e) => {
    //     e.preventDefault();
    //     this.props.nextStep()
    //     // this.handleSubmit(e);
    // }

    render() { 
        return ( 
            <div>
            <div className="assignProduct" >
           <Enable/>
            <PaymentMethod/>
            <DriverManagement/>
         
            </div>
            
          <div className="buttons">
          <button type="submit" onClick={this.props.backStep } className=" cancel" variant="primary">  <i className="fas fa-arrow-left"></i>Back </button>
            
          <button type="submit" onClick={this.props.nextStep } className="btn btn-primary nextbtn" variant="primary">Next  <i className="fas fa-arrow-right"></i></button>
            </div>
            </div>
         );
    }
}
 
export default AssignProduct;

