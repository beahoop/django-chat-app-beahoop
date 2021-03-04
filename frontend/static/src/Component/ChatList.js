import ChatItem from './ChatItem';


// <li className="chat-list" key={id}>
//   {chats.text}
// </li>

function ChatList(props) {
  const filterChatsByRoom = props.chats.filter(chat => {
      if(chat.room?.id === props.roomSelection){
        console.log("matchChatsWithRooms", chat.room)
        return chat
      }
      return console.log("what is this?", chat.room )
    }).map(( chats , id ) => (
      <ChatItem key={id} chat={chats} chats={props.chats} editChat={props.editChat} removeChat={props.removeChat}/>

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
