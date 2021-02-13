import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'

// Compponents
import ConversationSearch from '../ConversationSearch';
// import ConversationListItem from '../ConversationListItem';
import shave from 'shave';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';

// Actions
import { fetchChatsRequest } from '../../store/actions/chats';
import { setCurrentChatRequest } from '../../store/actions/set-current-chat';

import './ConversationList.css';
import './../ConversationListItem/ConversationListItem.css';

const ConversationList = props => {

  const dispatch = useDispatch();
  const [chat, setChat] = useState([]);

  const chatState = useSelector(s => s.chats);
  
  useEffect(() => {
    dispatch(fetchChatsRequest()), shave('.conversation-snippet', 20);
  },[])

  useEffect(() => {
    if(chatState.isSuccessful){
      setChat(chatState.data);
    }
      
  }, [chatState])

    return (
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
            <div className="conversation-list-item" key={key} onClick={function() {dispatch(setCurrentChatRequest(item.chatId));}}>
              <img className="conversation-photo" src={item.photo} alt="conversation" />
              <div className="conversation-info">
                <h1 className="conversation-title">{ item.name }</h1>
                <p className="conversation-snippet">{ item.text }</p>
              </div>
            </div>
          ))
        }
      </div>
    );
}

export default ConversationList