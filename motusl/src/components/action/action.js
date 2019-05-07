export const addCompanyInfo = (data) =>{ 
    console.log("---ACTION---");
    console.log('Values: ', data);
    return{
            type: 'ADD_COMPANY_INFO',
            data
        }
}


export const admin = (data) =>{
    console.log("---SETUP ADMINS---");
    console.log('Data received by Admins Action--->', data);
    return{
        type: 'SETUP_ADMINS',
        data
}}

export const product = (data) => {
    console.log("Product Action Fired",data);
    return{
        type : "onChanged",
        data
    }
}