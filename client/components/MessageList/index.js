import React, {useEffect, useState} from 'react';
import Compose from '../Compose';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import Message from '../Message';
import moment from 'moment';
import axios from 'axios';

import './MessageList.css';

const MY_USER_ID = 'apple';

export default function MessageList(props) {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    getMessages();
  },[])

  
  const getMessages = () => {
    axios.get('http://localhost:8000/api/chats/0f833043-2f19-4661-aebf-d4a8c3f69229/messages', {headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNkZDRmYTUxOTY3NThhZDMyOTJiNDA4YmIyM2M3ZGY0OTUyMzIwMTExNTgyNjFiZTcxNjA1YTQ1ZGYzOTg5OTMzODVhZDNiZWI0N2EzYjdjIn0.eyJhdWQiOiIxIiwianRpIjoiM2RkNGZhNTE5Njc1OGFkMzI5MmI0MDhiYjIzYzdkZjQ5NTIzMjAxMTE1ODI2MWJlNzE2MDVhNDVkZjM5ODk5MzM4NWFkM2JlYjQ3YTNiN2MiLCJpYXQiOjE2MTEwNTMxOTIsIm5iZiI6MTYxMTA1MzE5MiwiZXhwIjoxNjQyNTg5MTkyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.mvYz8p1HZITTGy4fNXgmWQ95_2ZjFajxDRIDaFs6vbusElEGU5-5N9SHIREc7ekndoRbGkszIZVDsGdoUPpcG-Ky7IDKIaUhvs_4jfphHeq7LKRsECNbCVPR2Q5yiFB-LZr6shjXBq3NRVN_FRF3k__a3CM1dMn3Uw3KFqkN01nviBU4y-h2SQO6h7bb2SBSdRIa-opiYfzra3NDgquTl-RcjUSMqOESoponpTGjnziFdxAbTSNBLhW65AGDDnbIFAmoXQw5pwtfd9Riu_G1X5jh2SVcneAP586-6Dt-O-DrkJfTyYAwrT5oEvLbGGeXWSzNwSaRDm0y95h6HWhU1tLD446lm4vDoy5GmEGC-5Jgmp3tmNmbGocm3bdvu2VHAH6mT9_wbj_P06grEme5INn0r0Ug5dz8lyb656gcHG7HymsM6ZH5vJD3bV-BJ5o7mSmDyG54K7wKZhVenQ8skn_9p5KO1GaJiEt30Wa0H_kiq2s3hYE8bvYsn_ppTfclY2ntuwnGr2Pc3P_WLYyNs8cJfy-_J2Y5mFh3FyOOppM_1X5ezck4NqeRQLzIAGpUcXXAG09PlzN_EN2jqMANsh62zf_VOye6q97TvJJQO_Tn7cmBf43fKwPJn-aPQQIPXb0dqt3GlGMG_Y8NmFR4QvAmD4-7iHZ6PnqbGDq_rlo' }}).then(response => {
        let tempMessages = response.data.data.map(result => {
          return {
            id: result.id,
            message: result.message,
            isMine: result.isMine,
            timestamp: result.created_at,
          };
        });
        setMessages([...messages, ...tempMessages])
    });
  }

  const renderMessages = () => {
    let i = 0;
    let messageCount = messages.length;
    let tempMessages = [];

    while (i < messageCount) {
      let previous = messages[i - 1];
      let current = messages[i];
      let next = messages[i + 1];
      let isMine = current.isMine;
      let currentMoment = moment(new Date(current.timestamp.date));
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(new Date(previous.timestamp.date));
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        prevBySameAuthor = previous.author === current.author;
        
        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        let nextMoment = moment(new Date(next.timestamp.date));
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.author === current.author;

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

    return(
      <div className="message-list">
        <Toolbar
          title="Conversation Title"
          rightItems={[
            <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
            <ToolbarButton key="video" icon="ion-ios-videocam" />,
            <ToolbarButton key="phone" icon="ion-ios-call" />
          ]}
        />

        <div className="message-list-container">{renderMessages()}</div>

        <Compose rightItems={[
          <ToolbarButton key="photo" icon="ion-ios-camera" />,
          <ToolbarButton key="image" icon="ion-ios-image" />,
          <ToolbarButton key="audio" icon="ion-ios-mic" />,
          <ToolbarButton key="money" icon="ion-ios-card" />,
          <ToolbarButton key="games" icon="ion-logo-game-controller-b" />,
          <ToolbarButton key="emoji" icon="ion-ios-happy" />
        ]}/>
      </div>
    );
}