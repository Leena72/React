
import React from 'react';
import {combineReducers} from 'redux';
import {productColor , productDetails ,buttonLabels } from '../components/Config/ProductConfig';
const initState = {
    productColor,
    productDetails,
    buttonLabels,
    cart:[]
};

const reducer = (state = initState , action) => {
    switch(action.type){
        case 'onChange' : {
            return (
                <div>Reducer Performed</div>
            )
          }
        

          case 'CHANGE_TSHIRT': {

            let productDetails = state.productDetails.map(product => {
                if (product.id === action.data.id) {
                    product.img = action.data.img;
                    return product;
                }
                else {
                    return product;
                }

            })
            return { ...state, productDetails }


}





        case 'add':{
            return [...state, action.item];
        }

          default: {
            return state;
        }
    }
}

export const rootReducer = combineReducers({
    reducer,

}
)
