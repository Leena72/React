import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import cart from './../../cart.svg';
import {addProduct} from '../../Action/actions';
import {
  Link
} from 'react-router-dom';

export class ProductsPage extends Component {
 

  addItem= (product) => {
    console.log("clicked", product);
    this.props.addProduct(product);
    console.log("product added");
  }

  render() { 

    let productDetails = this.props.productDetails;
    const {itemCount} = this.props;

    return (
      <div className="product-page clearfix">

        <div className="cart-icon">
          <Link to='/cart'><img className="cart-icon-img"src={cart} alt="cart"></img></Link>
          <div className="cart-value">{itemCount}</div>
          
        </div>

        <div className="product-wrapper">

          {
            productDetails.map(item => {
              return (
                <Product
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  img={item.img}
                  units={item.units}
                  addItem={this.addItem}
                />
              )
            }
            )
          }
        
        </div>
        
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    itemCount:state.addToCart.addedItems.length,
    addProduct: state.addProduct,
    ...state.change_reducer
  }
}

const mapDispatchToProps = (dispatch) => ({
  addProduct: (data) => dispatch(addProduct(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
