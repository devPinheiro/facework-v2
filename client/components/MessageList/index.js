import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { sendMessagesRequest, fetchMoreMessagesRequest, appendNewMessagesRequest } from '../../store/actions/messages';
import { toast } from 'react-toastify';

import Compose from '../Compose';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import Button from '@components/Button'
import Message from '../Message';
import moment from 'moment';

// Actions
import './MessageList.css';

export default function MessageList({ profile, Echo }) {

    const toRender = useRef('');
    const messageState = useSelector(s => s.messages);
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    
    useEffect(() => {
      toRender.current = renderMessages(messageState);
    }, [messageState])
    
    useEffect(() => {
      if (messageState.isSuccessful) {
        Echo.private(`chat-${profile.data.user.chat_id}-${messageState.current_chat}`)
        .listen('MessageSent', (e) => {
          toast(`New message from ${e.sender.name} -- ${e.message}`, {
            pauseOnFocusLoss: false,
            autoClose: 10000,
            hideProgressBar: true,
          });
          dispatch(appendNewMessagesRequest(e, messageState.current_chat))
        })
      }
    }, [messageState.current_chat])

    const sendMessage = (message) => {
      if(message.length) {
        dispatch(sendMessagesRequest(message, messageState.current_chat))
      } else {
        alert('You cannot send an empty message')
      }
      setMessage('');
    }

    const loadMoreMessages = () => {
      dispatch(fetchMoreMessagesRequest(messageState.current_chat, messageState))
    }

    const renderMessages = () => {

      if (!messageState.current_chat) {
        return (
          <div className="Empty">
            <h1 className="Empty__name">Welcome, Person </h1>
            <img src="" alt={'person'} className="Empty__img" />
            <p className="Empty__status">
              <b>Status:</b> {status}
            </p>
            <button className="Empty__btn">Start a conversation</button>
            <p className="Empty__info">
              Search for someone to start chatting with or go to Contacts to see who
              is available
          </p>
          </div>
        );
      } else if (messageState.current_chat) {
        let i = 0;
        let messageList = messageState.data[messageState.current_chat]
        let messageCount = messageList.length;
        let tempMessages = [];

        while (i < messageCount) {
          let previous = messageList[i - 1];
          let current = messageList[i];
          let next = messageList[i + 1];
          let isMine = current.isMine;
          let currentMoment = moment(current.created_at);
          let prevBySameAuthor = false;
          let nextBySameAuthor = false;
          let startsSequence = true;
          let endsSequence = true;
          let showTimestamp = true;

          if (previous) {
            let previousMoment = moment(previous.created_at);
            let previousDuration = moment.duration(currentMoment.diff(previousMoment));
            prevBySameAuthor = previous.isMine === current.isMine;

            if (prevBySameAuthor && previousDuration.as('hours') < 1) {
              startsSequence = false;
            }

            if (previousDuration.as('hours') < 2) {
              showTimestamp = false;
            }
          }

          if (next) {
            let nextMoment = moment(next.created_at);
            let nextDuration = moment.duration(nextMoment.diff(currentMoment));
            nextBySameAuthor = next.isMine === current.isMine;

            if (nextBySameAuthor && nextDuration.as('hours') < 1) {
              endsSequence = false;
            }
          }

          tempMessages.push(
            <Message
              key={i}
              isMine={isMine}
              startsSequence={startsSequence}
              endsSequence={endsSequence}
              showTimestamp={showTimestamp}
              data={current}
            />
          );

          // Proceed to the next message.
          i += 1;
        }
        return tempMessages;
      }
    }

    return (
      <div className="message-list">
        <Toolbar
          title={messageState.current_chat ? messageState.interlocutor : ''}
          rightItems={[
            <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
            <ToolbarButton key="video" icon="ion-ios-videocam" />,
            <ToolbarButton key="phone" icon="ion-ios-call" />
          ]}
        />
        
        { ( messageState.current_chat && messageState.current_load_more) ? (
          <p className="text-center"><Button type="button" style="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-6 border border-gray-400 rounded shadow mr-4" click={loadMoreMessages}> Load More</Button></p>
        ) : ('')}

        <div className="message-list-container">{toRender.current}</div>

        <Compose openChat={messageState.current_chat} setMessage={setMessage} message={message} sendMessage={sendMessage} rightItems={[
          <ToolbarButton key="photo" icon="ion-ios-camera" />,
          <ToolbarButton key="image" icon="ion-ios-image" />,
          <ToolbarButton key="audio" icon="ion-ios-mic" />,
          <ToolbarButton key="money" icon="ion-ios-card" />,
          <ToolbarButton key="games" icon="ion-logo-game-controller-b" />,
          <ToolbarButton key="emoji" icon="ion-ios-happy" />
        ]} />
      </div>
    );
  }