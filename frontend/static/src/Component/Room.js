import { Component } from 'react';
import Cookies from 'js-cookie';
import ChatList from './ChatList';
import ChatForm from './ChatForm';

//if the ablity to make a room
//then chat form will enter and it will send up a title matching
//the room button you clicked
//
class Room extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      rooms: [],
      roomSelection: "Main",

    }
    this.filterRoom = this.filterRoom.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
      fetch('/api/v1/chatapp/room/')
        .then(res => res.json())
        .then(
          (result) => {
            console.log('ROOMS', result)
            this.setState({
              rooms: result
            });
          },
          (error) => {
            this.setState({
              error
            });
          }
        )
    }

    addRooms(chat){
      const title = [...this.state.title]
      const rooms = [...this.state.rooms]
      console.log("HERE title", title, "room", rooms)
      title.push(title);
      this.setState({ title })
      }

    handleInput(event){
      this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event){
      event.preventDefault();

      const title = {
        title: this.state.title,
      }
      console.log('title', title)
      //fetch post
    fetch('/api/v1/chatapp/room/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken' : Cookies.get('csrftoken'),
          },
          body: JSON.stringify(title),
        })
          .then(response => {
          if(!response.ok){
            throw new Error ('Bad Post request');
          }
          return response.json()
          })
        .then(data => {
          this.addRooms(data);
          console.log('Success. Message created!', data, "title", data.room)})
        .catch(error => console.log('Error:', error))
        .finally('I am always going to fire!');
        this.setState({title: ""})
};

filterRoom(event){
const roomType = event.target.dataset.room;
this.setState({roomSelection: roomType})
console.log("RoomType", roomType)
}

// matchChatsWithRooms(roomType){
//
// }
// console.log("chats", this.props.chats, "room title", this.chats?.room?.title)



  render(){
    const roomTypes = this.state.rooms.map((roomChoice, id) => (
        <li key={id} className = "room-Choice">
        <button className="room-button" onClick={this.filterRoom} data-room={roomChoice.title}>  {roomChoice.title} </button>
        </li>
))

  //
  // const filterChatsByRoom = this.props.chats.filter(roomChoice => {
  //
  // })
    const filterChatsByRoom = this.props.chats.filter(chats => {
        if(chats.room === this.state.roomSelection){
          console.log("matchChatsWithRooms", chats.room)
          return chats
        }
        return console.log("what is this?", chats.room )
      })

      // if(this.state.rooms === null){
      //   // if(this.props.chat?.text === "pug"){
      //   console.log("roomChoice", this.state.rooms.title)
      //   return chats ;//it's return all the chats so it's not fitlering
      // }//this part is working-ish
      // else if (this.state.roomSelection === "Pugs" && this.state.rooms?.title === "Pugs"){
      //   console.log("I FIRED!");
      //   return chats
      //   //I can't be setting all the chats to the room selctions
      // }//but not this one
      // else {
      //   return this.state.rooms.title === "Main"
      // }
    .map(( chats , id ) => (
      <li className="chat-list" key={id}>
        {chats.text}
      </li>
    //
    ))

    return(

      <>

        <ul>{ roomTypes }</ul>
          <ul>{ filterChatsByRoom }</ul>
          <form className="form"onSubmit={this.handleSubmit}>
            <input type="text" id="chat-title" name="title" value={this.state.title} onChange={this.handleInput} placeholder="New Room" />
            <label htmlFor="chat-title"></label><br/>
            <button type="submit">Add Room</button>
          </form>
<ChatForm
  roomSelection={this.state.roomSelection}
  rooms={this.state.rooms}
  addChats={this.props.addChats}/>
      <ChatList chats={this.props.chats} editChat={this.props.editChat} removeChat={this.props.removeChat}/>

      </>
    )
  }
}

export default Room;
