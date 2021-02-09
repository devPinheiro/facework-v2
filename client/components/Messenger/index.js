import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux'
import Echo from 'laravel-echo';
import axios from 'axios';
import Pusher from 'pusher-js'
// import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
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
  const store = useStore()
  const dispatch = useDispatch();

  const profileState = useSelector(s => s.userProfile);
  const chatState = useSelector(s => s.chats);
  const messageState = useSelector(s => s.messages);

  const [chat, setChat] = useState([]);
  const [messages, setMessages] = useState([])

  // const echo = new Echo(options);

  useEffect(() => {
    dispatch(fetchChatsRequest()), shave('.conversation-snippet', 20);
  }, [])

  useEffect(() => {
    setMessages(messageState);
  }, [messageState])

  useEffect(() => {
    if (chatState.isSuccessful) {
      setChat(chatState.data);
    }
  }, [chatState])

  const handleClick = async (id) => {
    await dispatch(fetchMessagesRequest(id));
    if (messageState.isSuccessful) {
      let messages = store.getState().messages;
      setMessages(messages)

      let echo = new Echo({
        broadcaster: 'pusher',
        key: 'f607f988d506ff262620',
        cluster: 'eu',
        forceTLS: false,
        authorizer: (channel, options) => {
          return {
            authorize: (socketId, callback) => {
              axios.post('http://127.0.0.1:8000/api/broadcasting/auth', {
                socket_id: socketId,
                channel_name: channel.name
              })
                .then(response => {
                  callback(false, response.data);
                })
                .catch(error => {
                  callback(true, error);
                });
            }
          };
        },
      });

      echo.leave(`chat-${profileState.data.user.chat_id}-${messageState.current_chat}`);
      echo.private(`chat-${profileState.data.user.chat_id}-${messageState.current_chat}`)
        .listen('MessageSent', (e) => {
          // messages => 
          console.log(e)
        })
    }
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
          <ConversationSearch />
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
        <MessageList messages={messages} />
      </div>
    </div>
  );
}