import React, { Component } from 'react';
import './../../sass/style.css';
class AdminListItem extends Component {
    render() {
        const { handleChange, handleDelete, inputName } = this.props;
        let { firstNameInput, lastNameInput, emailInput, dateInput } = this.props;
        return (
            // <table>
                <tr className="list">
                    <td>
                        <input
                            type="text"
                            // name={inputName+"firstNameInput"}
                            name={firstNameInput}
                            value={firstNameInput}
                            onChange={handleChange} />
                    </td>
                    <td>
                        <input
                            type="text"
                            name={inputName+"lastNameInput"}
                            value={lastNameInput}
                            onChange={handleChange} />
                    </td>
                    <td>
                        <input
                            type="text"
                            name={inputName+"emailInput"}
                            value={emailInput}
                            onChange={handleChange} />
                    </td>
                    <td>
                        <input
                            type="date"
                            className="dateInput"
                            name={inputName+"dateInput"}
                            value={dateInput}
                            onChange={handleChange} />
                    </td>
                    <td>
                        {/* <input
                            type="radio"
                            name={inputName}
                            onChange={handleCheck} /> */}
                            <input 
                                id="inputName"
                                name={inputName}
                                type="radio"
                                defaultChecked={inputName==='inputName'}
                                value="inputName"
                                onChange={this.handleChange} />
                            <label 
                            htmlFor="inputName"
                            className=""
                            >
                            </label>
                    </td>
                 { /*     <td>
                <i className="far fa-times-circle"></i>
                        <button
                            onClick={handleDelete} />
                    </td>*/} 
                </tr>
            // </table>

        );
    }
}

export default AdminListItem;