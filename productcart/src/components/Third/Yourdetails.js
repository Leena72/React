import React, { Component } from 'react';
class Yourdetails extends Component {
    state = {  }
    render() { 
        return (

            <form>
            <p className="formdetail">Name</p><input type="text" ></input>
            <p className="formdetail">Email</p><input type="email" ></input>
            <p className="formdetail">City</p><input type="text" ></input>
            <p className="formdetail">Address</p><input type="text" ></input>
            <p className="formdetail">ZipCode</p><input type="number" ></input>
            <p className="formdetail">Country</p>
                <select>
                    <option>India</option>
                    <option>US</option>
                    </select>
            </form>

          );
    }
}
 
export default Yourdetails;