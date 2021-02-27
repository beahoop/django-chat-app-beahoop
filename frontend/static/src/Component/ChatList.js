import ChatItem from './ChatItem';

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

export default ChatList;
