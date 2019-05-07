
const Company = (state = {}, action) =>{
    console.log("Reducer Called",action.type);
    switch(action.type) {
        case 'ADD_COMPANY_INFO': {
            return {...state, ...action.data};
        }
        case "onChanged" : {
            console.log("Action Fired OnChanged");
            return {...state,...action.data}
            
        }
        default: {
            return state;
        }
    }
    
}

export default Company;