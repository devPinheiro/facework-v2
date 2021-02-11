import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux'
// import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import { echo } from '../../utils/websocket'
import './Messenger.css';

import ConversationSearch from '../ConversationSearch';
import shave from 'shave';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';

// Actions
import { fetchChatsRequest } from '../../store/actions/chats';
import { fetchMessagesRequest } from '../../store/actions/messages';

import './../ConversationList/ConversationList.css';
import './../ConversationListItem/ConversationListItem.css';

export default function Messenger() {
  const dispatch = useDispatch();

  const profileState = useSelector(s => s.userProfile);
  const chatState = useSelector(s => s.chats);
  const searchedChatsState = useSelector(s => s.searchedChats);
  const messageState = useSelector(s => s.messages);
  let Echo = echo();

  const [chat, setChat] = useState([]);
  const [messages, setMessages] = useState([])
  const [searchedChats, setSearchedChats] = useState([])

  useEffect(() => {
    dispatch(fetchChatsRequest()), shave('.conversation-snippet', 20);
  }, [])

  useEffect(() => {
    if (chatState.isSuccessful) {
      setChat(chatState.data);
    }
  }, [chatState])

  useEffect(() => {
    if (searchedChatsState.isSuccessful) {
      setSearchedChats(searchedChatsState.data);
    }
  }, [searchedChatsState])
  
  useEffect(() => {
    setMessages(messageState);
  }, [messageState])

  const handleClick = async (id) => {
    if (messageState.current_chat) {
      Echo.leave(`private-chat-${profileState.data.user.chat_id}-${messageState.current_chat}`)
    }
    await dispatch(fetchMessagesRequest(id, messages));
  }

  return (
    <div className=" pt-8 m-auto max-w-xl flex messenger">
      <div className="scrollable sidebar">
        <div className="conversation-list">
          <Toolbar
            title="Chats"
            leftItems={[
              <ToolbarButton key="cog" icon="ion-ios-cog" />
            ]}
            rightItems={[
              <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
            ]}
          />
          <ConversationSearch setSearchedChats={setSearchedChats} searchedChats={searchedChats} />
          
          { searchedChatsState.data ? (
            <div>
              <Toolbar title="Search Results"/>
              { searchedChats.map((item, key) => (
                <div className="conversation-list-item" key={key} onClick={() => handleClick(item.chatId)}>
                  <img className="conversation-photo" src={item.photo} alt="conversation" />
                  <div className="conversation-info">
                    <h1 className="conversation-title">{item.name}</h1>
                    <p className="conversation-snippet">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          ): ('')
          
          {
            chat.map((item, key) => (
              <div className="conversation-list-item" key={key} onClick={() => handleClick(item.chatId)}>
                <img className="conversation-photo" src={item.photo} alt="conversation" />
                <div className="conversation-info">
                  <h1 className="conversation-title">{item.name}</h1>
                  <p className="conversation-snippet">{item.text}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="scrollable content">
        <MessageList profile={profileState} Echo={Echo} />
      </div>
    </div>
  );
}