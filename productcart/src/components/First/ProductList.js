import React, { Component } from 'react';
import BottomComponent from '../BottomImgComponent/BottomComponent';

class ProductList extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            showControls:false
            }
    }
    handleOnMouseOver=(e)=>{
        e.stopPropagation();
        this.setState({
            showControls:true
        })

    }
    handleOnMouseLeave=(e)=>{
        e.stopPropagation();
        this.setState({
            showControls:false
        })
}



    render() { 
        const {id, name, price, img} =this.props;
        return (  
            <div id={id} className="product-container" onMouseOver={this.handleOnMouseOver} onMouseLeave={this.handleOnMouseLeave}>
                             
                <div  className="img-container">
                    <img
                        className="product-img"
                        src={img}
                        alt={name}
                    >
                    </img>
                    <div>{this.state.showControls?<BottomComponent {...this.props}/> : null}</div>
                
                </div>
                
                
                <div className="product-price">
                    <span className="name">{name}</span>
                    <span className="price">{price}</span>
                </div>
                
                
                
        </div>
        );
    }
}
 
export default ProductList;