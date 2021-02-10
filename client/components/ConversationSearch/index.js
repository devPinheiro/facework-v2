import React  from 'react';
import axios from 'axios';
import './ConversationSearch.css';

export default function ConversationSearch({ setChat, chat }) {
    
  const getChat = async (search, chat) => {
    return axios.get(`http://localhost:8000/api/chats/search/${search}`, {headers: { Authorization: `Bearer ${localStorage.auth}` }})
    .then(res => {
      if (Array.isArray(res.data) && res.data.length) {
        chat = chat.filter(function (item) {
          return item.text !== ""
        })
        console.log(chat)
        chat.push(...res.data)
        console.log(chat)
        setChat(chat)
      } else {
        alert('No such user');
      }
    })
  }

    return (
      <div className="conversation-search">
        <input
          type="search"
          className="conversation-search-input"
          placeholder="Search Messages"
          onKeyUp={ (e) => { if(e.keyCode === 13) { getChat(e.target.value, chat) }} }
        />
      </div>
    );
}