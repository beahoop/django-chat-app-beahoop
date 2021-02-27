import React, { Component } from 'react';

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',

    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({[event.target.name]: event.target.value});
  }


render(){
  return(
    <>
    {this.props.isLoggedIn === false
      ?
      <form className="loginform" onSubmit={(e) => this.props.handleLogin(e, this.state)}>
      <button type="submit">Login</button> <br/>
      <input type="text" name="username" value={this.state.username} placeholder="username" onChange={this.handleInput} required/><br/>
      <input type="email" name="email" value={this.state.email} placeholder="email" onChange={this.handleInput} required/><br/>
      <input type="password" name="password" value={this.state.password} placeholder="password" onChange={this.handleInput} required/><br/>

      </form>
      :
      null
    }
    {this.props.isLoggedIn === true
      ?
      <form className="logoutform" onSubmit={(e) => this.props.handleLogOut(e, this.state)}>
      <button type="submit">LogOut</button>
      </form>
      :
      null
    }



    </>
  )
}

}


export default Login;
