import React, { Component } from "react";
import { connect } from "react-redux";
import AdminListItem from "./adminform";
import { admin } from "../actions/action";
import './../../sass/style.css';
import store from './../../index';


class SetupAdmins extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.admin,
            inputarray: [
                { name: "" }]
        };
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleCheck = e => {
        this.setState({
            [e.target.name]: !this.state[e.target.name]
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.admin({ ...this.state });
    };

    handleAddMore = () => {
        let { inputarray } = this.state;
        let newinputArray = { name: "input" + inputarray.length + 1 }
        let addedInputs = [...inputarray, newinputArray]
        this.setState({
            inputarray: addedInputs
        })
    }

    handleDelete= () =>{
        let { inputarray } = this.state;
        let newinputArray = { name: "input" + inputarray.length - 1 }
        let deletedInputs = [newinputArray]
        this.setState({
            inputarray: deletedInputs
        })
     }

     showCompleteData=()=>{
        const { completeData } = this.props;
        alert(JSON.stringify(completeData));
        console.log(store.getState());
     }

    addButtonDisable = {
        pointerEvents: "none",
        cursor: "not-allowed"
    };

    render() {
        let { inputarray } = this.state;
        return (
            <form className="setupAdmins" onSubmit={this.handleSubmit}>
                <table className="table">
                    <thead>
                        <tr className="list-heading">
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Start Date</th>
                            <th>Finance contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            inputarray.map(el => (
                                <AdminListItem
                                    handleChange={this.handleChange} handleCheck={this.handleCheck}
                                    handleDelete={this.handleDelete}
                                    inputName={el.name} key={el.name}
                                    firstNameInput={this.state[el.name + "firstNameInput"]}
                                    lastNameInput={this.state[el.name + "lastNameInput"]}
                                    emailInput={this.state[el.name + "emailInput"]}
                                    dateInput={this.state[el.name + "dateInput"]} />))
                        }
                    </tbody>

                    <tfoot>
                        <tr>
                            <td className="add-row" colspan="5">
                                <button className="add-button" disabled={this.state.inputarray.length >= 3 ? true : false} onClick={this.handleAddMore}>
                                    <i className="fas fa-plus" />
                                </button>
                            </td>

                        </tr>
                    </tfoot>
                </table>
                
                <div className="button-div">
                    <button
                        className="back-btn"
                        onClick={this.props.prevStep}>
                        <i className="fas fa-arrow-left"></i>
                        Back
                        </button>

                    <button
                        onClick={this.showCompleteData}
                        type="submit"
                        className="next-btn">Save and View Customer
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => ({ admin: state.admin, completeData: state });

const mapDispatchToProps = dispatch => ({
    admin: data => dispatch(admin(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SetupAdmins);