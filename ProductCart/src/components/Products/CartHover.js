import React, { Component } from 'react'
import { connect } from 'react-redux';

export class CartHover extends Component {

goToCart = (e) => {
e.preventDefault();
this.props.history.push('/cart');
console.log("carthover props",this.props);
}


render() {
const {addedItems} = this.props;
console.log('printing added items',addedItems);
return (
<div>
<h5>Your Cart</h5>
<table>
<tr>
<th>Item Name</th>
<th>Item Size</th>
<th>Item Color</th>
</tr>
{

addedItems.map(item => {
return(
<tr>
<td>{item.name}</td>
<td>{item.size}</td>
<td>{item.color}</td>
</tr>
)
})
}
</table>
</div>
)
}
}

const mapStateToProps = (state) => {
return {
addedItems: state.addToCart.addedItems
}
}
export default connect(mapStateToProps,null)(CartHover);