import { Component } from 'react';

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
    console.log("THIS PROPS",this.props);
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
  console.log("chat", chat)
    return(
      <li className = "chat-item" >
      <div className="chat-div">
      <p>{chat.owner?.username}:</p>
      {//because everyone chat didn't have an owner
      }
      {
        !this.state.isEditing
        ?
        <button type="button" onClick={() => this.setState({ isEditing: !this.state.isEditing   })}><i className="fas fa-edit"></i></button>
        :
        null
      }
      <button type="button" onClick={()=> this.props.removeChat(chat)}><i className="fas fa-trash-alt"></i></button>

      {this.state.isEditing
        ?
        <input type="text" name="text"
        value={this.state.text} onChange={this.handleInputEdit}
        onKeyUp={this.handleEdit}/>
        :
        <span className = "chat-list-text" > {chat.text} </span>
      }
      </div>
       </li>
    )
  }
}

export default ChatItem;
