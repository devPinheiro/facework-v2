import React from 'react';
import './Compose.css';

export default function Compose({openChat, setMessage, message, sendMessage, rightItems}) {
  
  return (
    <div className="compose">
      { !openChat ? (
        ''
      ) : (
        <div>
          <input
            type="text"
            className="compose-input"
            placeholder="Type a message"
            value={message}
            onChange={ (e) => setMessage(e.target.value)}
            // onKeyUp={ (e) => { if(e.keyCode === 13) { sendMessage(message) }} }
          />
          <button onClick={ () => { sendMessage(message) } } className="btn">&nbsp; &nbsp; Send</button>
          {
            rightItems
          }
        </div>
      )}
    </div>
  );
}