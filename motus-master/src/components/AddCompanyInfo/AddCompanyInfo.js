import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addCompanyInfo} from '../action/Action';
import '../../mainstylesheet/mainstyle.css';

class AddCompanyInfo extends Component {
    constructor(props) {
        console.log("constructor called with props",props)
        super(props);
        this.state = {
            ...props.company,
        }
    }

    componentWillMount(props){
        console.log("CWM called")
        // // this.setState({
        //     ...props.company
        // })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleCheck = (e) => {
        let name = e.target.name;
        this.setState({
            [name]: !this.state[name]
        });
    }

    handleSubmit = (event) => {
        const {addCompanyInfo} = this.props;
        console.log("Data after Input--> ", this.state);
        addCompanyInfo({...this.state});
        this.props.nextStep();
        event.preventDefault();
    }

    // saveAndContinue = (e) => {
    //     e.preventDefault();
    //     this.props.nextStep()
    //     this.handleSubmit(e);
    // }
    render() {
        let {c_name, c_alias, date, industry_type, manager, country, addr1, addr2, city, state, zipcode, phone} = this.state;

        return (
            <div>
                    <div className="demo"> 
                    <label> <input type="checkbox" />  This is a Demo Company</label> 
                    </div>
                    <form className="formwrapper" onSubmit={this.handleSubmit}>
                     <div className="formcontent" >
                            <div className="companyDetails">
                                <div className="form-group">
                                    <label>Company Name</label>
                                    <input type="text" name="c_name" value={c_name} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Company Alias</label>
                                    <input type="text" name="c_alias" value={c_alias} onChange={this.handleChange} />
                                </div>
                            </div>


                            <div className="account-info">
                                <div className="form-group">
                                <h2 className="heading">Account Information</h2>
                                <p>Industry</p>
                                <select name= "industry_type" className="form-control " value={industry_type} onChange={this.handleChange}  >
                                   
                                    <option>Finance</option>
                                    <option>Techology</option>
                                </select>
                                </div>
                                <div className="form-group  ">
                                        <label>Account Manager</label>
                                        <select name="manager" className="form-control " value={manager} onChange={this.handleChange} >
                                          
                                            <option>Manager 1</option>
                                            <option>Manager 2</option>
                                        </select>
                                    </div>
                                    <div className="date">
                                    <p>Start Date</p>
                                    <input type="date" name="date" className="form-control" value={date}
                                    onChange={this.handleChange}></input>
                                </div>
                            </div>

                            
                            <div className="contact-info">
                                <h2>Contact Information</h2>
                                <div className="form-group">
                                    <label>Country</label>
                                    <select name="country" className="form-control " value={country}
                                            onChange={this.handleChange}>
                                        <option value="United States">United States</option>
                                        <option>India</option>
                                    
                                    </select>
                                </div>
                                    <div className="form-group">
                                        <label>Billing Address Line1</label>
                                        <input type="text" name="addr1" className="form-control" value={addr1}
                                            onChange={this.handleChange} placeholder="Street Address, P.O. Box"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Billing Address Line2</label>
                                        <input type="text" name="addr2" className="form-control" value={addr2}
                                            onChange={this.handleChange} placeholder="Building, Suite, Floor, etc"/>
                                    </div>
                                    <div className="form-group">
                                        <label>City</label>
                                        <input type="text" name="city" className="form-control" value={city}
                                            onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>State</label>
                                            <select name="state" className="form-control " value={state}
                                                    onChange={this.handleChange}>
                                                
                                                <option>New Delhi</option>
                                                <option>New York</option>
                                                
                                            </select>
                                        </div>

                                        <div className="col form-group">
                                            <label>ZIP Code</label>
                                            <input type="text" name="zipcode" className="form-control" value={zipcode}
                                                onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input type="tel" name="phone" className="form-control" value={phone}
                                            onChange={this.handleChange}/>
                                    </div>
                                </div>
                  
                    </div>
                    <div className="buttons">
                    <button  className="cancel"  >Cancel</button>
                    <button type="submit" className="btn btn-primary next-btn" variant="primary">Next  <i className="fas fa-arrow-right"></i></button>
                    </div>
                    </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    company: state.Company,
})

const mapDispatchToProps = dispatch => ({
    addCompanyInfo: (data) => dispatch(addCompanyInfo(data))
})

export default  connect(mapStateToProps, mapDispatchToProps)(AddCompanyInfo);