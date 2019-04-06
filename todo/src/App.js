
import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Redirect} from 'react-router-dom';
import ToDoList from './component/ToDoList';
import Login from './component/Login';
import Header from './component/Header';
import Logout from './component/Logout';
import './App.css';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state=
    {
      username: "admin",
      password: "admin",
      isValidated: false,  
    }
  }

  handleSubmit = (event,data) =>
  {
      event.preventDefault();
      const { username , password } = this.state;
      if(data.username === username && data.password === password)
      {
        this.setState({
          isValidated : true,
        });
      } 
      else
      {
        this.setState({
          isValidated : false,
        });
      }
  }

  toggleValidation = () =>
  {
    this.setState({
      isValidated : !this.state.isValidated,
    });
  }


  render() {
    return (
      <div className="App"> 
      <Router>
              <Header validate = {this.state.isValidated}/>
              <Route path="/" exact component={() => ( <Login 
                                                              handleSubmit={this.handleSubmit}
                                                              isValidated={this.state.isValidated} 
                                                              /> ) }
                                                              />


              <Route path="/logout" component={() => (<Logout toggleValidation={this.toggleValidation} 
                                                                      isValidated={this.state.isValidated} /> )}/>   
              <PrivateRoute path="/ToDoList" isValidated={this.state.isValidated}  component={ToDoList} />
              
          </Router>
      </div>
    );
  }
}

export default App;

const PrivateRoute = (
  {
    component : Component, 
    isValidated, 
    ...rest
  }
) =>
{
  return(
    <Route 
    {...rest}
    render={props =>
   (isValidated ? <Component {...props} /> : <Redirect to="/" />)
    }
    />
  );
} 