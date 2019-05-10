import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCompanyInfo } from '../actions/action';
import './../../sass/style.css';

class AddCompanyDetails extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            ...this.props.companyvalues
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { addCompanyInfo } = this.props;
        addCompanyInfo({ ...this.state });
        this.props.nextStep();

    }

    render() {

        let { companyname, companyalias, selectcompany, selectmanager, date, country, line1, line2, city, state, zipcode, phone } = this.state;
        return (
            <div className="addCompanyinfo">
                <div className="demo-checkbox">
                    <div className="checkboxwrapper">
                    <input
                    type="checkbox"
                    name="demo-company"
                    value="demo" />
                    <label>This is a demo company</label>
                </div>
            </div>

            <form className="form-step1" onSubmit={this.handleSubmit}>
                <div className="form-width">
                    <div className="companyInfo">
                        <div className="form-elements">
                            <label className="category">Company Name</label>
                            <input
                                // required
                                type="text"
                                name="companyname"
                                value={companyname}
                                onChange={this.handleChange} />
                        </div>

                        <div className="form-elements">
                            <label className="category">Company Alias</label>
                            <input
                                // required
                                type="text"
                                name="companyalias"
                                value={companyalias}
                                onChange={this.handleChange} />
                        </div>

                        <div className="category account-section">

                            <div className="form-elements">
                                <h2 className="heading">Account Information</h2>
                                <label className="category">Industry</label>
                                <select required
                                    className="select-option"
                                    name="selectCompany"
                                    value={selectcompany}
                                    onChange={this.handleChange}>
                                    <option>Select</option>
                                    <option>Technology</option>
                                    <option>Financial</option>
                                </select>
                            </div>
                            <div className="form-elements">
                                <label className="category">Account Manager</label>
                                <select required
                                    className="select-option"
                                    name="selectManager"
                                    value={selectmanager}
                                    onChange={this.handleChange}>
                                    <option>Select</option>
                                    <option>John</option>
                                    <option>Sam</option>
                                </select>
                            </div>
                            <label className="category">Start Date</label>
                            <input
                                // required
                                className="date-picker"
                                name="date"
                                value={date}
                                type="date"
                                onChange={this.handleChange}></input>
                        </div>
                    </div>

                    <div className="contact-info">
                        <h2 className="heading">Contact Information</h2>
                        <div className="form-elements">
                            <label className="category">Country</label>
                            <select
                                className="select-option"
                                name="country"
                                value={country}
                                onChange={this.handleChange}>
                                <option>India</option>
                                <option>USA</option>
                               
                            </select>
                        </div>
                        <div className="form-elements">
                            <label className="category">Billing Address Line1</label>
                            <input
                                // className="" 
                                type="text"
                                name="line1"
                                value={line1}
                                placeholder="Address Line 1"
                                onChange={this.handleChange} />
                        </div>
                        <div className="form-elements">
                            <label className="category">Billing Address Line2</label>
                            <input
                                // className="" 
                                type="text"
                                name="line2"
                                value={line2}
                                placeholder="Address Line 2"
                                onChange={this.handleChange} />
                        </div>
                        <div className="form-elements">
                            <label className="category">City</label>
                            <input
                                // className="" 
                                type="text"
                                name="city"
                                value={city}
                                onChange={this.handleChange} />
                        </div>
                        <div className="state-div form-elements">
                            <div className="form-elements">
                                <label className="category">State</label>
                                <select
                                    className="select-option"
                                    name="state"
                                    value={state}
                                    onChange={this.handleChange}>
                                    <option>Delhi</option>
                                    <option>Punjab</option>
                                </select>
                            </div>

                            <div className="form-elements zipcode-div">
                                <label className="category">ZIP Code</label>
                                <input
                                    type="text"
                                    name="zipcode"
                                    value={zipcode}
                                    className="zip-code"
                                    onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-elements">
                            <label className="category">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={phone}
                                // className=""  
                                onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
                <div className="button-div">
                    <button
                        className="back-btn" onClick={(e) => e.preventDefault()}>Cancel
                        </button>

                    <button
                        type="submit"
                        className="next-btn">Next
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </form>
            </div >
        )
    }
}

const mapStateToProps = state => ({ companyvalues: state.company })


const mapDispatchToProps = dispatch => ({
    addCompanyInfo: (data) => dispatch(addCompanyInfo(data))
    // addCompanyInfo
})

export default connect(mapStateToProps, mapDispatchToProps)(AddCompanyDetails);
