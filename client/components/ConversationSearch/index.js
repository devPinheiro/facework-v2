import React from 'react';
import { useDispatch } from 'react-redux'
import { searchChatsRequest, emptySearchChatsRequest } from '../../store/actions/search-chats';
import './ConversationSearch.css';

export default function ConversationSearch({ setSearchedChats }) {

  const dispatch = useDispatch();
    
  const getChat = async (search) => {
    if (search !== '') {
      await dispatch(searchChatsRequest(search))
    } else {
      setSearchedChats([]);
    }
  }

  const handleSearch = async (e) => {
    if (e.target.value === '') {
      await dispatch(emptySearchChatsRequest())
    }
  };

    return (
      <div className="conversation-search">
        <input
          type="search"
          className="conversation-search-input"
          placeholder="Search Conversations"
          onChange={(e) => { if (e.target.value === "") { handleSearch(e)} } }
          onKeyUp={ (e) => { if(e.key === 'Enter' ) { getChat(e.target.value) }} }
        />
      </div>
    );
}