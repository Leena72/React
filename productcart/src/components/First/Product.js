import React, { Component } from 'react';
import ProductList from './ProductList';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import cart from '../images/cart.svg';
import  '../../Sass/style.css'
class Product extends Component {
    // state = {  }
    render() { 
        let productDetails = this.props.productDetails;

        return ( 
            <div className="container">
            
                <div className="cart_img" >
               <Link to='/Cart'> <img  src={cart} alt={cart}/></Link>
               <div></div>
                </div>
            
                <div className="product_display">
                {
                    productDetails.map(item  => {
                        return(
                            <ProductList 
                                // key={item.id}
                                // name={item.name}
                                // price={item.price}
                                // img={item.img}

                                key={item.id}
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                img={item.img}
                                units={item.units}
                                addToCart={this.addToCart}
                                // count={this.state.count}

                            />
                        )
                    })
                }
                </div>
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return {
    //   productDetails: state.reducer.productDetails
    ...state.reducer
    }
  }
 


export default connect(mapStateToProps, '')(Product);
