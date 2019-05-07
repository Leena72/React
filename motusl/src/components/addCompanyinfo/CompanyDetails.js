import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCompanyInfo } from '../action/action';
import '../../sass/style.css';

class CompanyDetails extends Component {
    constructor(props) {
        super(props);
        console.log('props', props)
        this.state = {
            ...props.company,
      };
    }
    

        componentWillMount(props)
        {
            console.log("values are:",this.props);
        }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state);
    }

    handleSubmit = () => {
        
        const { addCompanyInfo } = this.props;
        console.log(this.state);
        addCompanyInfo({ ...this.state });

    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep()
        this.handleSubmit(e);
    }

    render() {
        const {c_name,c_alias,industry_type,manager, country , add1 , add2, city_name , state, zip_code, phone_number }=this.state;
       
        return (
          <div>
                <div className="demo"> 
                     <input type="checkbox" />  This is a Demo Company
                </div>
            <form className="formwrapper" onSubmit={this.handleSubmit}>
                <div className="companyDetails">
                    <div className="form-group">
                        <label>Company Name</label>
                        <input type="text" name="c_name" value={c_name} onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label>Company Alias</label>
                        <input type="text" name="c_alias" value={c_alias} onChange={this.handleChange} required/>
                    </div>

                </div>

                <div className="account-info">
                    <div className="form-group">
                        <h2 className="heading">Account Information</h2>
                        <p>Industry</p>
                        <select name= "industry_type" className="form-control selecttech " value={industry_type} onChange={this.handleChange} required>
                            <option>Select</option>
                            <option>Finance</option>
                            <option>Techology</option>
                        </select>
               </div>
                 <div className="form-group  ">
                        <label>Account Manager</label>
                        <select name="manager" className="form-control selecttech" value={manager} onChange={this.handleChange} required>
                            <option>Select</option>
                            <option>Manager 1</option>
                            <option>Manager 2</option>
                        </select>
                    </div>
                    <div className="date">
                        <p>Start Date</p>
                        <input type="date" ></input>
                    </div>
                   
                </div>

                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <div className="form-group">
                        <label>Country</label>
                        <select name = "country" value={country} className="form-control" onChange={this.handleChange} required>
                            
                            <option>India</option>
                            <option>US</option>
                        </select>
                    </div>

                    <div className="form-group" >
                        <label>Billing Address Line1</label>
                        <input type="text" name="add1" value={add1} onChange={this.handleChange} className="form-control" required placeholder="Street Address, P.O Box" />
                    </div>
                    <div className="form-group">
                        <label>Billing Address Line2</label>
                        <input type="text" name="add2" value={add2}  onChange={this.handleChange} className="form-control" required placeholder="Building, Suite, Floor etc" />
                    </div>

                    <div className="form-group">
                        <label>City</label>
                        <input type="text" name="city_name" value={city_name} onChange={this.handleChange} className="form-control" required />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>State</label>
                            <select className="form-control" name="state" value={state} onChange={this.handleChange} required>
                                <option>Delhi</option>
                                <option>New York</option>
                              
                            </select>
                     </div>

                        <div className="form-group">
                            <label>ZIP Code</label>
                            <input type="text" name="zip_code" value={zip_code} onChange={this.handleChange} className="form-control"required />
                        </div>
                 </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" name="phone_number" value={phone_number}  onChange={this.handleChange} className="form-control" required />
                    </div>
                </div>
              
               </form>
               <div className="buttons">
                    <button type="cancel" className="cancel" >Cancel</button>
                    <button type="submit" onClick={this.saveAndContinue} className="nextbtn" variant="primary">Next  <i className="fas fa-arrow-right"></i></button>
          
               </div>
               </div>
        );
    }
}

const mapStateToProps = state => ({
   company:state.Company,

    // ...state.company
})

const mapDispatchToProps = dispatch => ({
    addCompanyInfo: (data) => dispatch(addCompanyInfo(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetails);