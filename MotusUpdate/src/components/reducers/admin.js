const admin = (state = {}, action) =>{
    switch(action.type) {
        case 'SETUP_ADMINS': {
            return {...state, ...action.data };
        }

        default: {
            return state;
        }
    }
}

export default admin;