import React, {Component} from "react";

class Main extends Component {

    constructor(){
        super();
        this.state = {
            count1: 0,
            count2: 0,
            count3: 0       
        }
    }

    increaseCounter1 = () => {
        this.setState({
            count1: this.state.count1 + 1,
        })  
    }

    decreaseCounter1 = () => {
        this.setState({
            count1: this.state.count1 - 1,
        })
    }

    increaseCounter2 = () => {
        this.setState({
            count2: this.state.count2 + 1,
        })  
    }

    decreaseCounter2 = () => {
        this.setState({
            count2: this.state.count2 - 1,
        })
    }

    increaseCounter3 = () => {
        this.setState({
            count3: this.state.count3 + 1,
        })  
    }

    decreaseCounter3 = () => {
        this.setState({
            count3: this.state.count3 - 1,
        })
    }

    overallIncrease = () =>{
        this.increaseCounter1();
        this.increaseCounter2();
        this.increaseCounter3();
    }

    overallDecrease = () =>{
        this.decreaseCounter1();
        this.decreaseCounter2();
        this.decreaseCounter3();
    }







    render() {

        return(
            <div>
                <p>Counter1: <span>{this.state.count1}</span></p>
                <button onClick={this.increaseCounter1}>Increase counter 1</button>
                <button onClick={this.decreaseCounter1}>Decrease counter 1</button>
                <p>Counter2: <span>{this.state.count2}</span></p>
                <button onClick={this.increaseCounter2}>Increase counter 2</button>
                <button onClick={this.decreaseCounter2}>Decrease counter 2</button>
                <p>Counter3: <span>{this.state.count3}</span></p>
                <button onClick={this.increaseCounter3}>Increase counter 3</button>
                <button onClick={this.decreaseCounter3}>Decrease counter 3</button>
                <br/>
                <div class="all">

                <button onClick={this.overallIncrease}>increase</button>
                <button onClick={this.overallDecrease}>decrease</button>
                </div>
            </div>
        );
    }
}

export default Main;
	
	
	
