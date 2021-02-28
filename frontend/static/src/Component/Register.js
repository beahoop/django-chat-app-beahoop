import React, { Component } from 'react';

class Register extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: ''
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({[event.target.name]: event.target.value});
  }


render(){
  return(
    <>
    <form   className="regform" onSubmit={(e) => this.props.handleRegistrationOrLogin(e, this.state)}>
    <input type="text" name="username" value={this.state.username} placeholder="username" onChange={this.handleInput} required/>
    <input type="email" name="email" value={this.state.email} placeholder="email" onChange={this.handleInput} required/>
    <input type="password" name="password1" value={this.state.password1} placeholder="password" onChange={this.handleInput} required/>
    <input type="password" name="password2" value={this.state.password2} placeholder="confirm password" onChange={this.handleInput} required/>
    <button type="submit">Register</button>
    </form>
    </>
  )
}

}


export default Register;
