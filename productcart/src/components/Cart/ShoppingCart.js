  import React, { Component } from 'react'
// import Header from '../Header/Header';
import CartTable from '../CartTable/CartTable';
import { connect } from 'react-redux';
import {emptyCart, deleteItem}  from '../../Action/actions';

import {
  Link
} from 'react-router-dom';
// import { isTemplateElement } from '@babel/types';

export class ShoppingCart extends Component {
  constructor(props){
    super(props);
    this.state={
      // showOptions:false,
      updateCart:false
    }
  }
  updateCartToggle = (event)=>{
    event.preventDefault();
    console.log("Update Cart",this.state.updateCart)
    this.setState({
      updateCart:!this.state.updateCart
    })
  }
  handleUpdateCart = () =>{
    this.setState({
      showOptions:!this.state.showOptions,
    })
    
  }
  emptyCart = (event) => {
    event.preventDefault();
    this.props.emptyCart();
  };

  continueShopping = (event) => {
    event.preventDefault();
    this.props.history.push("/");
  }

  deleteItem = (event, id) => {
    event.preventDefault();
    this.props.deleteItem();
  }

  render() {
    // let label = this.props.label;
    const {cartItems} = this.props;
    return (
      <div className="cartPage">
    {/* <Header />*/}
        <p className="page-heading">YOUR SHOPPING CART</p>
        <table className="cart-table">
          <tbody>
            <tr>
              <th>ITEM</th>
              <th>SIZE</th>
              <th>COLOR</th>
              <th>QTY</th>
              <th colSpan="2">PRICE</th>
            </tr>
            {
        cartItems.map(item =>(
          <CartTable 
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            showOptions={this.state.showOptions}
            size={item.size}
            color={item.color}
            updateCart={this.state.updateCart}

          />
        ))
            }
         </tbody>


        </table>
        <div className="buttons-div">
        <button className="cart-buttons" onClick={this.continueShopping}> <i className="fas fa-arrow-left"></i>  Continue </button>  
        <button className="cart-buttons" onClick={this.updateCartToggle} >Update</button>
          <button className="cart-buttons" onClick={this.emptyCart}>Empty</button>
          <Link to='/checkout'><button className="cart-buttons"> Checkout  <i className="fas fa-arrow-right"></i></button></Link>
        </div>

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    // label: state.change_reducer.buttonLabels,
    cartItems:state.addToCart.addedItems
  }
}

const mapDispatchToProps = (dispatch) => ({
  emptyCart : (data) => dispatch(emptyCart(data)),
  deleteItem : (data) => dispatch(deleteItem(data)),
})



export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
