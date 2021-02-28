import React, { Component } from 'react';
import Cookies from 'js-cookie';

const endpoint = '/api/v1/chatapp/chat/'

class ChatForm extends Component {
  constructor(props){
  super(props);
  this.state = {
    text: '',
    room: this.props.roomSelection,
  }
  this.handleInput = this.handleInput.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
handleInput(event){
  this.setState({ [event.target.name]: event.target.value });
}
//a chat is looking for room, a room is looking for a title

  handleSubmit(event){
    event.preventDefault();

    const chat = {
      text: this.state.text,
      room: this.props.roomSelection,
       }
    console.log('CHAT I CREATED', chat, "ROOM ID", 1)
    //fetch post
      fetch(`${endpoint}create/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken' : Cookies.get('csrftoken'),
            },
            body: JSON.stringify(chat),
          })
            .then(response => {
            if(!response.ok){
              throw new Error ('Bad Post request');
            }
            return response.json()
            })
          .then(data => {//here is where I got back my DJANGO object and
            this.props.addChats(data);//here is where I added it to state for react
            //because django gave me the ID and the username to show it on react
            console.log('Success. Message created!', data)})
          .catch(error => console.log('Error:', error))
          .finally('I am always going to fire!');
          this.setState({text: ""})
          };
  render(){
    return (
      <>

      <div className="chatForm">
        <form className="form"onSubmit={this.handleSubmit}>
          <input type="text" id="chat-text" name="text" value={this.state.text} onChange={this.handleInput} placeholder="Message" required/>
          <label htmlFor="chat-text"></label><br/>
          <button type="submit">Add Chat</button>
        </form>
     </div>
     </>
    )
  }
}

export default ChatForm;
