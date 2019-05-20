import React, { Component } from 'react';
import { productColor } from './../Config/ProductConfig';
import { connect } from 'react-redux';
import changeTshirt from '../../Action/cartAction';

class BottomComponent extends Component {

    changeColor = (fieldvalue) => {
        const { changeTshirt, id } = this.props;
        var changeImage;
        switch (fieldvalue) {

            case 1:
                 changeImage = {
                    img: productColor[0].img,
                    id: id
                }
                changeTshirt(changeImage);
                break;

            case 2:
                 changeImage = {
                    img: productColor[1].img,
                    id: id
                }
                changeTshirt(changeImage);
                break;

            case 3:
                 changeImage = {
                    img: productColor[2].img,
                    id: id
                }
                changeTshirt(changeImage);
                break;

            default:
                 changeImage = {
                    img: productColor[0].img,
                    id: id
                }
                changeTshirt(changeImage);
                break;

        }
}


    render() { 
        return ( 

            <div id ={ this.props.id } className =" hover-container ">
            
                   <ul className="Tshirtcolor">
                        <li>  <input type="radio" name="color" value={productColor[0].colorId} onClick={() => this.changeColor(1)}/> </li>
                        <li>  <input type="radio" name="color" value={productColor[1].colorId} onClick={() => this.changeColor(2)}/> </li>
                        <li>  <input type="radio" name="color" value={productColor[2].colorId} onClick={() => this.changeColor(3)}/> </li>
                  </ul>
                  { /* <ul className="Tshirtcolor">
                    <li>  <div>.</div>  </li>
                    <li>  <div>.</div>  </li>
                    <li>  <div>.</div>  </li>
                </ul>*/}
                        
                

                <select className="TshirtSize">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                </select>

                <button className="addToCart" > ADD TO CART</button>
            </div>

         );
    }
}
 
const mapDispatchToProps = {
    changeTshirt

}
export default connect(null, mapDispatchToProps)(BottomComponent);

// export default BottomComponent;