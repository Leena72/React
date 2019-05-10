
const company = (state = {}, action) =>{
    switch(action.type) {
        case 'COMPANYINFO': {
            return {...state, ...action.data };
        }

        case 'BACKDATA_PRODUCTS': {
            return {...state, ...action.data};
        }

        default: {
            return state;
        }
    }
}

export default company;