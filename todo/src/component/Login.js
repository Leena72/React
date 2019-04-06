import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import './Login.css';

class Login extends Component
{

  constructor(props)
  {
    super(props);
    this.state=
    {
     username:"",
     password:"",  
    };
  }
  
  handleOnChange = event => {
      this.setState({
          [event.target.name] : event.target.value,
      });
  }

  render() 
  {

    if(this.props.isValidated)
    {
      return <Redirect to="/ToDoList" />
    }

    return (
      <div className="Login">

          <form onSubmit={ event => this.props.handleSubmit(event, this.state)}> 
          
          <div>
              <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleOnChange} />
          </div> 

          <div>
              <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleOnChange} />
          </div>
             <button type="submit">Submit</button>
          </form>

      </div>
    );
  }
}

export default Login;