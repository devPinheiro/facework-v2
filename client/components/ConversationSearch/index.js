import React from 'react';
import { useDispatch } from 'react-redux'
import { searchChatsRequest, emptySearchChatsRequest } from '../../store/actions/search-chats';
import './ConversationSearch.css';

export default function ConversationSearch({ setSearchedChats, searchedChats }) {

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
      // setSearchedChats(null);
    }
  };

  React.useEffect(() => {
    window.addEventListener('search', handleSearch);

    // cleanup this component
    return () => {
      window.removeEventListener('search', handleSearch);
    };
  }, []);

    return (
      <div className="conversation-search">
        <input
          type="search"
          className="conversation-search-input"
          placeholder="Search Conversations"
          onKeyUp={ (e) => { if(e.keyCode === 13) { getChat(e.target.value) }} }
        />
      </div>
    );
}