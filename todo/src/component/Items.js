
import React, {Component} from 'react';
import './Items.css';

class Items extends Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
        <div>
           {this.props.TodoItems.map((item,index) => <h2>{item}
           <button className="delete-btn" type="button" onClick={()=>this.props.deleteAnItem(index)}>Delete</button>
            </h2>)}
           
            <button class="Items-btn" type="submit" name="delete" onClick={()=>this.props.deleteItem()}>Delete All</button>
        </div>);
    }   
}

export default Items;