
export const handleOnChange=(event,companyAction)=>{
    console.log("handle on change called");
    companyAction(
        {
            "name":event.target.name,
            "value":event.target.value
        }
    )
}