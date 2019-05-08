import React, { Component } from "react";
import { connect } from "react-redux";
import { admin } from "../action/Action";
import AdminForm from "./admin_form";
import "./stylesheet/style.css";


class SetupAdmins extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.adminReducer,
            forms: [{ name: "form1" }]
        };
    }
    handleChange = event => {
        console.log("handle changed admin form called")
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleCheck = e => {
        let name = e.target.name;
        this.setState({ [name]: !this.state[name] });
    };

    handleSubmit = event => {
        event.preventDefault();
       


        // console.log("Data after Input--> ", this.state);
        this.props.admin({ ...this.state });
    };

        display = () =>
        {  
            const { allData } = this.props;
            alert(JSON.stringify(allData));
        }
    handleAddMore=event=>{
        console.log("inside handle addmore");
        let newFrom={name:"forms"+this.state.forms.length+1}
        let joinedForms=[...this.state.forms,newFrom]
        this.setState({
            forms:joinedForms
        })
    }

    AddMoreDisable = {
        color:"gray",
        backgroundColor:"",
        pointerEvents:"none"
    };



    render() {
        return (
            <form className="setupAdmins" onSubmit={this.handleSubmit}>
                <div className="wrapper">
                    <div className="heading">
                        <ul className="list">
                            <li>First Name</li>
                            <li>Last Name</li>
                            <li>Email Name</li>
                            <li>Start Date</li>
                            <li>Finance Contact</li>
                        </ul>
                    </div>
                    <div>
                        {
                            this.state.forms.map(item=>(

                                    <AdminForm
                                        handleChange={this.handleChange}
                                        handleCheck={this.handleCheck}
                                        formName={item.name}
                                        key={item.name}
                                        firstInput={this.state[item.name+"firstInput"]}
                                        secondInput={this.state[item.name+"secondInput"]}
                                        thirdInput={this.state[item.name+"thirdInput"]}
                                        dateInput={this.state[item.name+"dateInput"]}

                                    />
                                )

                            )
                        }
                    </div>
                    <div style={this.state.forms.length>=3 ?this.AddMoreDisable:{}} className="addMore">
                        <button  className="addBtn" onClick={this.handleAddMore}>
                            <i className="fas fa-plus" />
                        </button>
                    </div>
                </div>
                <div className="buttons">
                    <button
                        type="button"
                        className="btn btn-secondary cancel"
                        variant="primary"
                        onClick={this.props.backStep}
                    >
                    <i className="fas fa-arrow-left"></i> Back
                    </button>
                    <button
                        onClick={this.display}
                        type="submit"
                        className="btn btn-primary next-btn"
                        variant="primary"
                        
                    >
                        Save and View Form <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    adminReducer: state.adminReducer,
    allData:state
});

const mapDispatchToProps = dispatch => ({
    admin: data => dispatch(admin(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SetupAdmins);