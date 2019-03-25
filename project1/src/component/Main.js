import React, {Component} from 'react';

class  Main extends Component
{
    render()
    {
        return(
          <div class="main">
            MAIN
            
        
            <Aside/>
            <button onClick={this.props.getCountFunct}>Click me</button> 
          </div>
        )
    }

}


class  Aside extends Component
{
    render()
    {
        return(
          <div class="semain">
          ASIDE
          </div>
        )
    }

}



export default Main;


