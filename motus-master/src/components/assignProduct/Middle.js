import React, { Component } from 'react';
import { product } from '../action/Action';
import {connect} from 'react-redux';
import { handleOnChange } from '../handlingEvent';

class Middle extends Component {

    render() { 
        const {product}=this.props;
        return ( 
            <div className ="middle">
                <label>Select Required Form:</label>
                <div>
                    <label>
                        <input 
                            type="checkbox"  
                            name="Insurance Declaration" 
                            value="Insurance Declaration" 
                            onChange={(event) => handleOnChange(event,product)}
                            />
                            Insurance Declaration Rate
                    </label>
                </div>

                <div>
                   <label>
                        <input 
                                type="checkbox"  
                                name="Vehicle Information (BVIF)" 
                                value="Vehicle Information (BVIF)" 
                                onChange={(event) => handleOnChange(event,product)}
                            />
                            Vehicle Information (BVIF)
                    </label>
                </div>

                
                <i>
                    (Required for Insurance Declaration)
                </i>
                <div>
                    <label>
                        <input 
                            type="checkbox"  
                            name="Motor Vehicle Record" 
                            value="Motor Vehicle Record " 
                            onChange={(event) => handleOnChange(event,product)}
                        />
                            Motor Vehicle Record 
                    </label>
                </div>
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