// const initialState ={
//     fixedRateChecked: false,
//     fixedinsurance:true,
//     fixedvehicle: true,
//     fixedtax: "Annually",
//     fixedmotor:false,
//     centMileChecked: false,
//     centMileInsurance: false,
//     centMileVehicle:false,
//     centMileMotor:false,
//     techOnlyChecked:false,
//     techInsurance:false,
//     techVehicle: false,
//     techMotor:false,
//     directDepositChecked: false,
//     fp_options: '',
//     fixed: '',
//     sendpullfunds: '',
//     fundsconcurpayroll: '', 
//     dm_options: '',
// }

const product = (state = {}, action) =>{
    switch(action.type) {
        case 'ENABLEDPRODUCTS': {
            return {...state, ...action.data };
        }

        default: {
            return state;
        }
    }
}

export default product;

