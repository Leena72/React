import React, { Component } from 'react';
// import './../sass/style.css';
import AddCompanyDetails from './AddCompanyDetails/AddCompanyDetails';
import AssignProducts from './AssignProducts/AssignProducts';
import SetupAdmins from './SetupAdmins/SetupAdmins';
import ProgressBar from './StepProgressBar/StepProgressBar';
import NewCustomer from './NewCustomer/NewCustomer';

export class MainForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentstep: 1,
          currentprogress: 25,
          complete: "form1"
        }
      }
    
      nextStep = () => {
    
        let nextProgress = this.state.currentprogress + 25;
        let nextCompleted;
        if (nextProgress === 50) {
          nextCompleted = "form2"
        }
        else if (nextProgress === 75) {
          nextCompleted = "form3"
        }
    
        const { currentstep } = this.state
        if (currentstep < 3) {
          this.setState({
            currentstep: currentstep + 1,
    
            currentprogress: nextProgress,
            complete: nextCompleted
          });
        }
        else {
          alert("Form Ready for Submission");
        }
      }
    
      prevStep = () => {
        let prevProgress = this.state.currentprogress - 25;
        let prevCompleted;
        if (prevProgress === 50) {
          prevCompleted = "form2"
        }
        else if (prevProgress === 25) {
          prevCompleted = "form1"
        }
        const { currentstep } = this.state
        this.setState({
          currentstep: currentstep - 1,
          currentprogress: prevProgress,
          complete: prevCompleted
        });
      }
    
  render() {
    const { currentstep } = this.state;
    return (
      <div>
        <div>
        <NewCustomer/>
          <ProgressBar className="progress-bar" currentprogress={this.state.currentprogress} complete={this.state.complete} />
          {currentstep === 1 && <AddCompanyDetails nextStep={this.nextStep} />}
          {currentstep === 2 && <AssignProducts nextStep={this.nextStep} prevStep={this.prevStep} />}
          {currentstep === 3 && <SetupAdmins nextStep={this.nextStep} prevStep={this.prevStep} />}
        </div>
      </div>
    )
  }
}

export default MainForm
