import React, { Component } from 'react';
import { product } from '../action/action';
import {connect} from 'react-redux';
import { handleOnChange } from '../handlingEvent';

class Middle extends Component {

    render() { 
        const {product}=this.props;
        console.log("type of product in middle",typeof product)
        return ( 

        <div className ="middle">
            <label>Select Required Form:</label>
            <div><input type="checkbox" onClick={(event) => handleOnChange(event,product)} name="Insurance Declaration" value="Insurance Declaration" />Insurance Declaration Rate</div>
            <div><input type="checkbox" onClick={(event) => handleOnChange(event,product)} name="Vehicle Information (BVIF)" value="Vehicle Information (BVIF)" />Vehicle Information (BVIF)</div>
            <i>(Recquired for Insaurance Declaration)</i>
            <div><input type="checkbox" onClick={(event) => handleOnChange(event,product)} name="Motor Vehicle Record" value="Motor Vehicle Record " />Motor Vehicle Record </div>
        </div>
         );
    }
}

const mapStateToProps = (store) => {
    return {
        store
    };
}

console.log("Product action ",product);
const mapDispatchToProps ={
    product
}


 

export default connect(mapStateToProps,mapDispatchToProps)(Middle);