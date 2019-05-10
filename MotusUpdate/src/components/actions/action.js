const addCompanyInfo = (data) =>{ 
    return{
            type: 'COMPANYINFO',
            data
        }
};

const getProduct = (data) =>{ 
    console.log("Setproduct Action --->",data)
    return{
            type: 'ENABLEDPRODUCTS',
            data
        }
};


const backdata = (data) => {
    return{
        type: 'BACKDATA_PRODUCTS',
        data
    }
};

const admin = (data) =>{ 
    return{
            type: 'SETUP_ADMINS',
            data
        }
};
export {addCompanyInfo, getProduct, backdata, admin};