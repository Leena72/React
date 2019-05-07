import React, { Component } from 'react'
import '../../sass/style.css';
import Middle from './Middle';
import Middle2 from './Middle2';


class Enable extends Component {
    constructor(){
        super();
        this.state={
            fixedChecked : false,
            centChecked : false,
            techChecked : false,
        }
    }
    handleCheckToggle = (event) =>{
        if(event.target.name === 'Fixed and Variable'){
            this.setState({
                fixedChecked:!this.state.fixedChecked,
            });
        }
        if(event.target.name === 'Cent per Mile'){
            this.setState({
                centChecked:!this.state.centChecked,
            })
        }
        if(event.target.name === 'Technology'){
            this.setState({
                techChecked:!this.state.techChecked,
            });
        }
        console.log("checked Value",this.state.fixedChecked,this.state.centChecked,this.state.techChecked);
    }

    render() {
        return (
            <div>
                <form className="enable">
                    <label className="category">Enabled Products</label>
                    <div className ="enablecheck">
                        <div className="checkBox"><input type="checkbox" onClick={this.handleCheckToggle} name="Fixed and Variable" value="Fixed and Variable" />Fixed and Variable Rate</div>
                        {this.state.fixedChecked ? <div><Middle/><Middle2/></div> : ''}
                        <div className="checkBox"><input type="checkbox" onClick={this.handleCheckToggle} name="Cent per Mile" value="Cent Per Mile" />Cent Per Mile</div>
                        {this.state.centChecked ? <div><Middle/></div> : ''}
                        <div className="checkBox"><input type="checkbox" onClick={this.handleCheckToggle} name="Technology" value="Technology Only" />Technology Only</div>
                        {this.state.  techChecked ? <div><Middle/></div> : ''}
                     </div> 
                </form>
            </div>
        )
    }
}

export default Enable