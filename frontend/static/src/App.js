import React, { Component } from 'react';
import Cookies from 'js-cookie';
import Register from './Component/Register';
// import ChatList from './Component/ChatList';
import Room from './Component/Room';
import ChatForm from './Component/ChatForm';
import Login from './Component/Login';
import './App.css';

const endpoint = '/api/v1/chatapp/chat/'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [],
      isLoggedIn: !!Cookies.get('Authorization'),
      clickLogin: false,
      clickRegister: false,

    }
    // this.filterRoom = this.filterRoom.bind(this);
    this.addChats = this.addChats.bind(this);
    this.editChat = this.editChat.bind(this);
    this.removeChat = this.removeChat.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.clickLogin = this.clickLogin.bind(this);
    this.clickRegister = this.clickRegister.bind(this);
  }

    componentDidMount() {
        fetch(`${endpoint}`)
          .then(res => res.json())
          .then(
            (result) => {
              console.log('response', result)
              this.setState({
                chats: result
              });
            },
            (error) => {
              this.setState({
                error
              });
            }
          )
      }
addChats(chat){
  const chats = [...this.state.chats]
  console.log("YES CHAT", chat)
  chats.push(chat);
  this.setState({ chats })
  }

editChat(orgChat, updatedText, id){
  const chats = [...this.state.chats]
  const index = chats.indexOf(orgChat);
  chats[index].text = updatedText;
  this.setState({ chats })
  const text = orgChat.text
  console.log("CHATS", {text}, "ID", id);
  fetch(`${endpoint}update/${id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken' : Cookies.get('csrftoken'),
        },
        body: JSON.stringify({text: text}),
      })
        .then(response => {
        if(!response.ok){
          throw new Error ('Bad Post request');
        }
        return response.json()
        })
      .then(data => console.log('Success. ChatApp created!'))
      .catch(error => console.log('Error:', error))
      .finally('I am always going to fire!');
  };



removeChat(chat){
  const chats = [...this.state.chats];
  const index = chats.indexOf(chat);
  chats.splice(index, 1);
  this.setState({ chats });
  fetch(`${endpoint}remove/${chat.id}`, {//type these out line by line some need more than others
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken' : Cookies.get('csrftoken'),
        },
      })
        .then(response => {
        if(!response.ok){
          throw new Error ('Bad Post request');
        }
        })
      .catch(error => console.log('Error:', error))
      .finally('I am always going to fire!');
  };

  async handleRegistration(e, obj){
  e.preventDefault();

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken' : Cookies.get('csrftoken'),
    },
    body: JSON.stringify(obj),
  };
  const handleError = (err) => console.warn(err);
  const response = await fetch('/rest-auth/registration/', options);
  const data = await response.json().catch(handleError);
  console.log(data);

  if(data.key){
    Cookies.set('Authorization', `Token ${data.key}`);
    this.setState({isLoggedIn: true})
  }

}
async handleLogin(e, obj){
e.preventDefault();

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-CSRFToken' : Cookies.get('csrftoken'),
  },
  body: JSON.stringify(obj),
};
const handleError = (err) => console.warn(err);
const response = await fetch('/rest-auth/login/', options);
const data = await response.json().catch(handleError);
console.log(data);

if(data.key){
  Cookies.set('Authorization', `Token ${data.key}`);
  this.setState({isLoggedIn: true})

}
}

async handleLogOut(e){
e.preventDefault();

alert('logging out');

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-CSRFToken' : Cookies.get('csrftoken'),
  },
};
const handleError = (err) => console.warn(err);
const response = await fetch('/rest-auth/logout/', options);
const data = await response.json().catch(handleError);
console.log(data);


  Cookies.remove('Authorization');
  this.setState({isLoggedIn: false})
}

clickLogin(){
  const login = this.state.clickLogin;
  if(login === false)
  this.setState({clickLogin: true})
  else if(login === true)
  this.setState({clickLogin: false})
}

clickRegister(){
  const register = this.state.clickRegister;
  if(register === false)
  this.setState({clickRegister: true})
  else if(register === true)
  this.setState({clickRegister: false})

}

  render(){
      //here is where I need to
    return(
      <React.Fragment>
      <div className="App">
        <nav className="nav-top">
          <ul>
            <li> ChadTime </li>

            <li className="login" onClick={this.clickLogin}>
              {this.state.isLoggedIn === true
                ?
                "LogOut"
                :
                "Login"
              }</li>
            <li className="Register" onClick={this.clickRegister}>
                  {this.state.isLoggedIn === false
                    ?
                    "Register"
                    :
                    null
                  }</li>
          </ul>
        </nav>
        <div className="top-div">

                        {this.state.clickLogin === true
                          ?
                          <Login className="loginform"
                              isLoggedIn={this.state.isLoggedIn}
                              handleLogin={this.handleLogin}
                              handleLogOut={this.handleLogOut}/>
                          :
                          null
                        }
                        {this.state.clickRegister === true
                          ?
                          <Register handleRegistration={this.handleRegistration} />
                          :
                          null
                        }
          <p className="chadTime"> Welcome to ChadTime</p>
          <p className="tagline"> A play on chat time but yanno for Chad</p>
        </div>


      </div>

    { this.state.isLoggedIn === true
      ?
      <div>

      <Room className="room" chats={this.state.chats}
        roomChoices={this.state.roomChoices}
      roomSelection={this.state.roomSelection}
      addChats={this.addChats}
        editChat={this.editChat}
        removeChat={this.removeChat}
        />

    </div>
    :
    null
    }

      </React.Fragment>
    );
  }
}




export default App;


///a function Component is a stateless Component
//class base Component uses state
