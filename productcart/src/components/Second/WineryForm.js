import React, { Component } from 'react';
import Winery from '../images/Winery.png';
// import Button from './Button';
import {Link} from 'react-router-dom';

import Table from './Table';
class WineryForm extends Component {
    state = {  }
    render() { 
        return ( 

            <div >
                <div className="wrapper"> 
                    <header>
                       <img src={Winery} alt={Winery}/>
                        <p>Wines for the web developers since 1999</p>
                    </header>

                    <p>Your  Shopping Cart</p>

                    <Table/>
                    <div className="subtotal">
                    <span>Sub Total</span>
                    </div>
                  <div className="buttons">
                    <Link to=''><button className="btn_continue">Update Cart</button></Link>
                    <Link to=''><button className="btn_continue">Empty Cart</button></Link>
                    <Link to='/'><button className="btn_continue">Continue Shopping</button></Link>
                    <Link to='/Checkout'><button className="btn_continue">Go To Checkout</button></Link>
            
          
                  </div>
                    
                    
                </div>
            </div>

         );
    }
}
 
export default WineryForm;