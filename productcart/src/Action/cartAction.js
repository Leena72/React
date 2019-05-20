export function addToCart(item) {
    return {
        type: 'ADD',
        item: item
    };
  }
     const changeTshirt= (tshirt) => ({
    type: 'CHANGE_TSHIRT',
    data: tshirt
  })
  
export default changeTshirt;