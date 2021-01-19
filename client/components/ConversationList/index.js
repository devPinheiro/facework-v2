import React, {useState, useEffect} from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import axios from 'axios';

import './ConversationList.css';

export default function ConversationList(props) {
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    getConversations()
  },[])

 const getConversations = () => {
    axios.get('http://localhost:8000/api/chats', {headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNkZDRmYTUxOTY3NThhZDMyOTJiNDA4YmIyM2M3ZGY0OTUyMzIwMTExNTgyNjFiZTcxNjA1YTQ1ZGYzOTg5OTMzODVhZDNiZWI0N2EzYjdjIn0.eyJhdWQiOiIxIiwianRpIjoiM2RkNGZhNTE5Njc1OGFkMzI5MmI0MDhiYjIzYzdkZjQ5NTIzMjAxMTE1ODI2MWJlNzE2MDVhNDVkZjM5ODk5MzM4NWFkM2JlYjQ3YTNiN2MiLCJpYXQiOjE2MTEwNTMxOTIsIm5iZiI6MTYxMTA1MzE5MiwiZXhwIjoxNjQyNTg5MTkyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.mvYz8p1HZITTGy4fNXgmWQ95_2ZjFajxDRIDaFs6vbusElEGU5-5N9SHIREc7ekndoRbGkszIZVDsGdoUPpcG-Ky7IDKIaUhvs_4jfphHeq7LKRsECNbCVPR2Q5yiFB-LZr6shjXBq3NRVN_FRF3k__a3CM1dMn3Uw3KFqkN01nviBU4y-h2SQO6h7bb2SBSdRIa-opiYfzra3NDgquTl-RcjUSMqOESoponpTGjnziFdxAbTSNBLhW65AGDDnbIFAmoXQw5pwtfd9Riu_G1X5jh2SVcneAP586-6Dt-O-DrkJfTyYAwrT5oEvLbGGeXWSzNwSaRDm0y95h6HWhU1tLD446lm4vDoy5GmEGC-5Jgmp3tmNmbGocm3bdvu2VHAH6mT9_wbj_P06grEme5INn0r0Ug5dz8lyb656gcHG7HymsM6ZH5vJD3bV-BJ5o7mSmDyG54K7wKZhVenQ8skn_9p5KO1GaJiEt30Wa0H_kiq2s3hYE8bvYsn_ppTfclY2ntuwnGr2Pc3P_WLYyNs8cJfy-_J2Y5mFh3FyOOppM_1X5ezck4NqeRQLzIAGpUcXXAG09PlzN_EN2jqMANsh62zf_VOye6q97TvJJQO_Tn7cmBf43fKwPJn-aPQQIPXb0dqt3GlGMG_Y8NmFR4QvAmD4-7iHZ6PnqbGDq_rlo' }}).then(response => {
        let newConversations = response.data.map(result => {
          return {
            photo: result.photo,
            name: result.name,
            text: result.last_message
          };
        });
        setConversations([...conversations, ...newConversations])
    });
    
    // axios.get('https://randomuser.me/api/?results=20', {headers: { Authorization: '' }}).then(response => {
    //     let newConversations = response.data.results.map(result => {
    //       return {
    //         photo: result.picture.large,
    //         name: `${result.name.first} ${result.name.last}`,
    //         text: 'Hello world! This is a long message that needs to be truncated.'
    //       };
    //     });
    //     setConversations([...conversations, ...newConversations])
    // });
  }

    return (
      <div className="conversation-list">
        <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        />
        <ConversationSearch />
        {
          conversations.map(conversation =>
            <ConversationListItem
              key={conversation.name}
              data={conversation}
            />
          )
        }
      </div>
    );
}