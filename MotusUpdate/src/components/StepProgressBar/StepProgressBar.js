import React, { Component } from "react";
import styled from "styled-components";
import car from "./../../assets/Car.png";
export class ProgressBar extends Component {
  render() {
    const { currentprogress, complete } = this.props;
    return (
      <div className="progress-bar">
        <StyledProgressBarWrapper
          currentprogress={currentprogress}
          complete={complete}
          className="parent"
        >
          <div className="gray-strip">
            <div className="numberCircle first">1</div>
            <div className="step step1">Add Company Info </div>

            <div className="numberCircle second">2</div>
            <div className="step step2">Assign Products </div>


            <div className="numberCircle third">3</div>
            <div className="step step3">Setup Admins</div>

            <div className="car">
              <img src={car} alt="car-logo" />
            </div>

            <div className="blue-strip" />
          </div>
        </StyledProgressBarWrapper>
      </div>
    );
  }
}

const StyledProgressBarWrapper = styled.div`
.parent{
    position:relative;
    width:100%;
  }
  
  .gray-strip{
    content:"";
    position:absolute;
    width: 49%;
    height: 7px;
    top: 174px;
    background-color:#dee2e5;
   }
  
  .blue-strip{
    content:"";
    postion:absoulte;
    width:${props => props.currentprogress}%;
    background-color: #0077b6;
    height: 7px;
  }
  
  .numberCircle { 
      position:absolute;
      top:-10px;
      width: 30px;
      line-height: 25px;
      border-radius: 50%;
      text-align: center;
      font-size: 13px;
      border: 2px solid white;
      background-color: #cbcbcb;
      color:#989494;
  }
  .step{
    position: absolute;
    top: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 14px;
    font-weight:bold;
}

.step1{
  left:20%;
  color:${props => (props.complete === "form1" ? "#0077b6" : "#989494")};
}

.step2{
  left:45%;
  color:${props => (props.complete === "form2" ? "#0077b6" : "#989494")};
}

.step3{
  left:70%;  
  color:${props => (props.complete === "form3" ? "#0077b6" : "#989494")};
}  
    
  .car{
    color:blue;
    position:absolute;
    top:-10px;
    left:${props => props.currentprogress - 1}%; 
  }
  
  .first{
    display:${props => (props.complete === "form1" ? "none" : "")};
    left:${props => (props.complete === "form1" ? "" : "25%")};
  }
  .second{
    display:${props => (props.complete === "form2" ? "none" : "")};
    left:${props => (props.complete === "form2" ? "" : "50%")};
  }
  
  .third{
    display:${props => (props.complete === "form3" ? "none" : "")};
    left:${props => (props.complete === "form3" ? "none" : "75%")};
  }


`;

export default ProgressBar;