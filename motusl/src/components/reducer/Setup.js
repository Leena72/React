const initialState ={
    firstInput : "",
    secondInput : "",
    thirdInput : "",
    dateInput : "",
}

const Setup = (state = initialState, action) =>{
    switch(action.type) {
        case 'SETUP_ADMINS': {
            console.log("Data received by Admins Reducer-->", action.data);
            return {...state, ...action.data };
        }

        default: {
            return state;
        }
    }
}

export default Setup;