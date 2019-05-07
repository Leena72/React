import React, { Component } from 'react'
import AssignProduct from './assignProduct/AssignProduct'
import CompanyDetails from './addCompanyinfo/CompanyDetails'
import SetAdmin from './SetAdmin/ThirdForm';

export class Master extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      step: 1,
    }
  }


  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  render() {
    const { step, companyName, companyAlias } = this.state;
    const data_values = { companyName, companyAlias};

    switch(step){
      case 1:
      return <CompanyDetails
                nextStep = {this.nextStep}
             
                />
      case 2: 
      return <AssignProduct
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
             
              />
              
      case 3: 
      return <SetAdmin
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
              
              />
      default:
      return <div>No page rendered</div>
    }
    // return (
    //   <div>
    //     <button className="back-btn" onClick={this.handleBack}>Back</button>
    //     { this.state.back && <AddCompanyDetails/> }
    //     <button className="next-btn" onClick={this.handleNext}>Nexttt</button>
    //     { this.state.next && <div>NEXTTTT</div>}
    //   </div>
    // );
  }
}

export default Master;