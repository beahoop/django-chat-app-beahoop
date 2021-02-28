import ChatItem from './ChatItem';


// <li className="chat-list" key={id}>
//   {chats.text}
// </li>

function ChatList(props) {
  const filterChatsByRoom = props.chats.filter(chats => {
      if(chats.room === props.roomSelection){
        console.log("matchChatsWithRooms", chats.room)
        return chats
      }
      return console.log("what is this?", chats.room )
    }).map(( chats , id ) => (
      <ChatItem key={id} chat={chats} editChat={props.editChat} removeChat={props.removeChat}/>

  //
));



  // const chats = props.chats.map((chat, index) => (
  //   <ChatItem key={index} chat={chat} editChat={props.editChat} removeChat={props.removeChat}/>
  // ));
  // console.log(props.chats);
  return(
    <ul className="chatList"> { filterChatsByRoom }
    </ul>
  )
}

export default ChatList;
