import React, { Component } from 'react';
import './App.css';

const endpoint = '/api/v1/chatapp/chat/'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [],
    }
    this.addChats = this.addChats.bind(this);
    this.editChat = this.editChat.bind(this);
    this.removeChat =
    this.removeChat.bind(this);
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
  chats.push(chat);
  this.setState({ chats })
  }
editChat(orgCaption, updatedText, id){
  const chats = [...this.state.chats]
  const index = chats.indexOf(orgCaption);
  chats[index].text = updatedText;
  this.setState({ chats })
  const text = orgCaption.text
  console.log("CHATS", {text}, "ID", id);
  fetch(`${endpoint}update/${id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify({text: text}),
      })
        .then(response => {
        if(!response.ok){
          throw new Error ('Bad Post request');
        }
        return response.json()
        })
      .then(data => console.log('Success. Message created!'))
      .catch(error => console.log('Error:', error))
      .finally('I am always going to fire!');
  };

removeChat(chat){
  const chats = [...this.state.chats];
  const index = chats.indexOf(chat);
  chats.splice(index, 1);
  this.setState({ chats });
  fetch(`${endpoint}remove/${chat.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify(chats),
      })
        .then(response => {
        if(!response.ok){
          throw new Error ('Bad Post request');
        }
        return response.json()
        })
      .then(data => console.log('Success. Message created!'))
      .catch(error => console.log('Error:', error))
      .finally('I am always going to fire!');
  };

  render(){
    return(
      <React.Fragment>
      <ChatForm addChats={this.addChats}/>
    <ChatList chats={this.state.chats} editChat={this.editChat}  removeChat={this.removeChat}/>
      </React.Fragment>
    );
  }
}

class ChatForm extends Component {
  constructor(props){
  super(props);
  this.state = {
    text: '',
    user: '',
  }
  this.handleInput = this.handleInput.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
handleInput(event){
  this.setState({ [event.target.name]: event.target.value });
}

  handleSubmit(event){
    event.preventDefault();
    const chat = {
      text: this.state.text
    }
    console.log('chat', chat)
    //fetch post
      fetch(`${endpoint}create/`, {
            method: 'POST',
            headers: {
              'Content-Type':'application/json',
            },
            body: JSON.stringify(chat),
          })
            .then(response => {
            if(!response.ok){
              throw new Error ('Bad Post request');
            }
            return response.json()
            })
          .then(data => console.log('Success. Message created!'))
          .catch(error => console.log('Error:', error))
          .finally('I am always going to fire!');
      };
  render(){
    return (
      <>
      <div className="intro">
      <p className="introP">Welcome to Chat app
      </p>
      <p className="rules"> Please add your username and a message! Once both are added, smash that add button. :)
      </p>
       </div>
      <div className="form-div">
        <form className="form"onSubmit={this.handleSubmit}><br/>
          <input type="text" id="chat-user" name="user" value={this.state.user} onChange={this.handleInput} placeholder="Username" required />
          <label htmlFor="chat-user"></label>

          <input type="text" id="chat-text" name="text" value={this.state.text} onChange={this.handleInput} placeholder="Message" required/>
          <label htmlFor="chat-text"></label>

          <button type="submit">Add Chat</button>
        </form>
     </div>
     </>
    )
  }
}
class ChatItem extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      text: this.props.chat.text,
    }
    this.handleInputEdit = this.handleInputEdit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleEdit(event){
    if(event.keyCode === 13) {
      this.props.editChat(this.props.chat, this.state.text, this.props.chat.id);
      this.setState({ isEditing: false })
    }
  }

  handleInputEdit(event) {
  this.setState({ [event.target.name]: event.target.value })
  }

  render() {
  const chat = this.props.chat;
    return(
      <li className = "chat-item" >
      <div className="chat-div">
      {this.state.isEditing
        ?
        <input type="text" name="text"
        value={this.state.text} onChange={this.handleInputEdit}
        onKeyUp={this.handleEdit}/>
        :
        <p className = "chat-list-text" > {chat.text} </p>
      }
      {
        !this.state.isEditing
        ?
        <button type="button" onClick={() => this.setState({ isEditing: !this.state.isEditing   })}>Edit</button>
        :
        null
      }
      <button type="button" onClick={()=> this.props.removeChat(chat)}>Delete</button>
      </div>
       </li>
    )
  }
}

function ChatList(props) {
  const chats = props.chats.map((chat, index) => (
    <ChatItem key={index} chat={chat} editChat={props.editChat} removeChat={props.removeChat}/>
  ));
  console.log(props.chats);
  return(
    <ul className="chat-list"> { chats }
    </ul>
  )
}

export default App;


///a function Component is a stateless Component
//class base Component uses state
