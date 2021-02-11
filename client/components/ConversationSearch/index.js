import React from 'react';
import { useDispatch } from 'react-redux'
import { searchChatsRequest } from '../../store/actions/search-chats';
import './ConversationSearch.css';

export default function ConversationSearch({ setSearchedChats, searchedChats }) {

  const dispatch = useDispatch();
    
  const getChat = async (search) => {
    await dispatch(searchChatsRequest(search))
    // setSearchedChats()
  }

    return (
      <div className="conversation-search">
        <input
          type="search"
          className="conversation-search-input"
          placeholder="Search Messages"
          onKeyUp={ (e) => { if(e.keyCode === 13) { getChat(e.target.value) }} }
        />
      </div>
    );
}