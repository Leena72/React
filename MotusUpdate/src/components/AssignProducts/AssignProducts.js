import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProduct } from './../actions/action';

import '../../sass/style.css';
class AssignProducts extends Component {
    constructor(props) {
        super(props);
        console.log('props', props)
        this.state = {
            ...this.props.product
        };
    }

    handleSubmit = (event) => {
        // setTimeout(() => {
        //     const {product}=this.props;
        //     product({...this.state});
        // },0);
        event.preventDefault();
        const { getProduct } = this.props;
        getProduct({ ...this.state });
        this.props.nextStep();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    handleCheck = (e) => {
        this.setState({
            [e.target.name]: !this.state[e.target.name]
        });
    }

    render() {
        const { fixedRateChecked, centMileChecked, techOnlyChecked, fixedtax, fixedinsurance, fixedvehicle,
            fixedmotor, fixed,
            centMileInsurance, centMileVehicle, centMileMotor,
            techInsurance, techVehicle, techMotor, 
            // sendFunds, 
            // pullFunds, concur, payroll, hrisFeed, selfService, motusAPI, priorMonth, currentMonth
            fp_options, sendpullfunds, fundsconcurpayroll, dm_options
        } = this.props.product;



        // let { fixedtax } = this.state;
        const fixedvariableRate = this.state.fixedRateChecked
            ? <div className="fixed-variable-rate required-form">
                <span className="selectRequired">Select Required Forms:</span>
                <div className="checkbox-div">
                    <input
                        name="fixedinsurance"
                        type="checkbox"
                        defaultChecked={fixedinsurance}
                        className="checkbox-custom"
                        onChange={this.handleCheck}
                        disabled checked />
                    <label
                        className="checkbox-custom-label"
                    >Insurance Declaration</label>
                </div>
                <i className="requiredText">(Required for this product)</i>

                <div className="checkbox-div">
                    <input
                        name="fixedvehicle"
                        type="checkbox"
                        defaultChecked={fixedvehicle}
                        className="checkbox-custom"
                        // value="option1"
                        onChange={this.handleCheck}
                        disabled checked />
                    <label
                        className="checkbox-custom-label"
                    >Vehicle Information (BVIF)</label>
                </div>
                <i className="requiredText">(Required for this product)</i>

                <div className="checkbox-div">
                    <input
                        id="fixedrate-fm"
                        name="fixedmotor"
                        type="checkbox"
                        defaultChecked={fixedmotor}
                        className="checkbox-custom"
                        // value="option1"
                        onChange={this.handleCheck} />
                    <label
                        htmlFor="fixedrate-fm"
                        className="checkbox-custom-label"
                    >Motor Vehicle Records (MVR)</label>
                </div>

                <span className="incurredtax">How often should we calculate incurred tax?</span>
                <div className="incomeTax">
                    <select
                        name="fixedtax"
                        value={fixedtax}
                        // className=""
                        onChange={this.handleChange}>
                        <option>Annually</option>
                        <option>Monthly</option>
                        <option>Quaterly</option>
                        <option>Monthly</option>
                    </select>
                </div>

                <p className="taxText">What month does tax reporting start?</p>
                <div className="tax">
                    <input
                        id="fixednov"
                        type="radio"
                        name="fixed"
                        defaultChecked={fixed === 'November'}
                        value="November"
                        onChange={this.handleChange}
                    />
                    <label
                        htmlFor="fixednov"
                        className="tax-label"
                    >November</label>
                </div>
                <div className="tax">
                    <input
                        id="fixeddec"
                        type="radio"
                        name="fixed"
                        defaultChecked={fixed === 'December'}
                        value="December"
                        onChange={this.handleChange}
                    />
                    <label
                        htmlFor="fixeddec"
                        className="tax-label"
                    >December</label>
                </div>
            </div>
            : null;

        const centMile = this.state.centMileChecked
            ?
            <div className="cent-mile required-form">
                <span className="selectRequired">Select Required Forms:</span>
                <div className="checkbox-div">
                    <input
                        id="cm-insurance"
                        name="centMileInsurance"
                        defaultChecked={centMileInsurance}
                        className="checkbox-custom"
                        type="checkbox"
                        onChange={this.handleCheck}
                    />
                    <label
                        htmlFor="cm-insurance"
                        className="checkbox-custom-label"
                    >Insurance Declaration</label>
                </div>
                <i className="requiredText">(Required for this product)</i>

                <div className="checkbox-div">
                    <input
                        id="cm-vehicle"
                        name="centMileVehicle"
                        className="checkbox-custom"
                        type="checkbox"
                        defaultChecked={centMileVehicle}
                        // value="option1"
                        onChange={this.handleCheck}
                    />
                    <label
                        htmlFor="cm-vehicle"
                        className="checkbox-custom-label"
                    >Vehicle Information (BVIF)</label>
                </div>
                <i className="requiredText">(Required for this product)</i>

                <div className="checkbox-div">
                    <input
                        id="cm-motor"
                        name="centMileMotor"
                        className="checkbox-custom"
                        type="checkbox"
                        defaultChecked={centMileMotor}
                        // value="option1"
                        onChange={this.handleCheck} />
                    <label
                        htmlFor="cm-motor"
                        className="checkbox-custom-label"
                    >Motor Vehicle Records (MVR)</label>
                </div>
            </div>
            : null;

        const technologyOnly = this.state.techOnlyChecked
            ?
            <div className="tech-only required-form">
                <span className="selectRequired">Select Required Forms:</span>
                <div className="checkbox-div">
                    <input
                        id="tech-insurance"
                        name="techInsurance"
                        defaultChecked={techInsurance}
                        className="checkbox-custom"
                        type="checkbox"
                        onChange={this.handleCheck}
                    />
                    <label
                        htmlFor="tech-insurance"
                        className="checkbox-custom-label"
                    >Insurance Declaration</label>
                </div>
                <i className="requiredText">(Required for this product)</i>

                <div className="checkbox-div">
                    <input
                        id="tech-vehicle"
                        name="techVehicle"
                        className="checkbox-custom"
                        defaultChecked={techVehicle}
                        type="checkbox"
                        // value="option1"
                        onChange={this.handleCheck}
                    />
                    <label
                        htmlFor="tech-vehicle"
                        className="checkbox-custom-label"
                    >Vehicle Information (BVIF)</label>
                </div>
                <i className="requiredText">(Required for this product)</i>

                <div className="checkbox-div">
                    <input
                        id="tech-motor"
                        name="techMotor"
                        className="checkbox-custom"
                        defaultChecked={techMotor}
                        type="checkbox"
                        // value="option1"
                        onChange={this.handleCheck} />
                    <label
                        htmlFor="tech-motor"
                        className="checkbox-custom-label"
                    >Motor Vehicle Records (MVR)</label>
                </div>
            </div>
            : null;

        const funds = this.state.fundsChecked
            ?
            <div className="funds">
                <div>
                    <input
                        id="funds-spf"
                        name="sendpullfunds"
                        type="radio"
                        defaultChecked={sendpullfunds === 'sendFunds'}
                        value="sendFunds"
                    />
                    <label
                        htmlFor="funds-spf"
                    >Customer sends funds to Motus </label>
                </div>
                <div>
                    <input
                        id="funds-sp"
                        name="sendpullfunds"
                        type="radio"
                        defaultChecked={sendpullfunds === 'sendFunds'}
                        value="sendFunds"
                    />
                    <label
                        htmlFor="funds-sp"
                    >Motus pulls funds from customer</label>
                </div>
            </div>
            : null;


        return (

            <form className="form-step2" >
                <div className="form-width">
                    <div className="enabledProducts">
                        <h2 className="category">Enabled Products</h2>
                        <div className="assignProducts option-div">
                            <div className="fixedVariableRate">
                                <div className="checkbox-div">
                                    <input
                                        id="fr-checkbox"
                                        className="checkbox-custom"
                                        defaultChecked={fixedRateChecked}
                                        name="fixedRateChecked"
                                        type="checkbox"
                                        // value="option1"
                                        onChange={this.handleCheck} />
                                    <label
                                        className="fixedRateLabel checkbox-custom-label"
                                        htmlFor="fr-checkbox">
                                        Fixed and Variable Rate</label>
                                </div>
                                {fixedvariableRate}
                            </div>

                            <div className="centmile">
                                <div className="checkbox-div">
                                    <input
                                        id="cm-checkbox"
                                        className="checkbox-custom"
                                        defaultChecked={centMileChecked}
                                        name="centMileChecked"
                                        type="checkbox"
                                        // value="option1"
                                        onChange={this.handleCheck} />
                                    <label
                                        className="fixedRateLabel checkbox-custom-label"
                                        htmlFor="cm-checkbox">
                                        Cent Per Mile</label>
                                </div>
                                {centMile}
                            </div>

                            <div className="technologyOnly">
                                <div className="checkbox-div">
                                    <input
                                        id="to-checkbox"
                                        defaultChecked={techOnlyChecked}
                                        className="checkbox-custom"
                                        name="techOnlyChecked"
                                        type="checkbox"
                                        // value="option1"
                                        onChange={this.handleCheck} />
                                    <label
                                        className="fixedRateLabel checkbox-custom-label"
                                        htmlFor="to-checkbox">
                                        Technology Only</label>
                                </div>
                                {technologyOnly}
                            </div>
                        </div>
                    </div>

                    <div className="paymentMethod">
                        <h2 className="category">Payment Method</h2>
                        <i className="paymentContent">Applies to fixed & Variable Rate and Cents Per Mile products only</i>
                        <div className="payment option-div">
                            <div className="directdeposit">
                                <input
                                    id="directdeposit"
                                    // name="directDepositChecked"
                                    name="fundsconcurpayroll"
                                    type="radio"
                                    // checked={fundsChecked}
                                    // value="option2"
                                    defaultChecked={fundsconcurpayroll === 'direct'}
                                    value="direct"
                                    onChange={this.handleChange} />
                                <label
                                    htmlFor="directdeposit"
                                >Direct Deposit</label>
                                <i>(Administered by Motus)</i>
                                <p>Select transaction type:</p>
                
                            </div>
                            {funds}

                            <div className="concur">
                                <input
                                    id="concur"
                                    name="fundsconcurpayroll"
                                    type="radio"
                                    defaultChecked={fundsconcurpayroll === 'concur'}
                                    value="concur"
                                    onChange={this.handleChange} />
                                <label
                                    htmlFor="concur"
                                >Concur</label>
                            </div>

                            <div className="payroll">
                                <input
                                    id="payroll"
                                    name="fundsconcurpayroll"
                                    type="radio"
                                    defaultChecked={fundsconcurpayroll === 'payroll'}
                                    value="payroll"
                                    onChange={this.handleChange} />
                                <label
                                    htmlFor="payroll"
                                >Payroll File</label>
                            </div>
                        </div>
                    </div>
                    <div className="driverManagement">
                        <h2 className="category">Driver Management</h2>
                        <div className="option-div">
                            <div className="driverManageOptions">
                                <input
                                    id="selfservice"
                                    name="dm_options"
                                    type="radio"
                                    defaultChecked={dm_options === 'selfService'}
                                    value="selfService"
                                    onChange={this.handleChange} />
                                <label
                                    htmlFor="selfservice"
                                    className=""
                                >Self-Service</label>
                            </div>

                            <div className="driverManageOptions">
                                <input
                                    id="hrisfeed"
                                    name="dm_options"
                                    type="radio"
                                    defaultChecked={dm_options === "hrisFeed"}
                                    value="hrisFeed"
                                    onChange={this.handleChange} />
                                <label
                                    htmlFor="hrisfeed"
                                >HRIS Feed</label>
                            </div>

                            <div className="driverManageOptions">
                                <input
                                    id="motusapi"
                                    name="dm_options"
                                    type="radio"
                                    defaultChecked={dm_options === 'motusApi'}
                                    value="motusApi"
                                    onChange={this.handleChange} />
                                <label
                                    htmlFor="motusapi"
                                >Motus API</label>
                            </div>
                        </div>
                    </div>

                    {this.state.fixedRateChecked || this.state.centMileChecked ?
                        <div className="fixedPaySchedule">
                            <h2 className="category">Fixed Payment Schedule</h2>
                            <i>Applies to fixed & Variable Rate and Cents Per Mile products only</i>
                            <div className="fixedPayOptions">
                                <input
                                    id="priormonth"
                                    name="fp_options"
                                    type="radio"
                                    defaultChecked={fp_options === 'priorMonth'}
                                    value="priorMonth"
                                    onChange={this.handleChange} />
                                <label
                                    htmlFor="priormonth"
                                >Prior Month (Arrears)</label>
                            </div>

                            <div className="fixedPayOptions">
                                <input
                                    id="currentmonth"
                                    name="fp_options"
                                    type="radio"
                                    defaultChecked={fp_options === 'currentMonth'}
                                    value="currentMonth"
                                    onChange={this.handleChange} />
                                <label
                                    htmlFor="currentmonth"
                                >Current Month (Upfront)</label>
                            </div>
                        </div>
                        : null
                    }
                </div>

                <div className="button-div">
                    <button
                        className="back-btn"
                        onClick={this.props.prevStep}
                    >
                        <i className="fas fa-arrow-left"></i>
                        Back
                    </button>
                    <button
                        className="next-btn"
                        onClick={this.handleSubmit}>
                        Next
                    <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => ({ product: state.product })

const mapDispatchToProps = dispatch => ({
    getProduct: (data) => dispatch(getProduct(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(AssignProducts);