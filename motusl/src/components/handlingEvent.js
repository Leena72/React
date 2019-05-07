export const handleOnChange = (event,product) =>{
    product(
        {
            name : event.target.name,
            value : event.target.value
        }
    )
   //    this.props.dispatch()
}