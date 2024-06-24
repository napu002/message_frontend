import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {BaseUrl} from "../constants";

function ChatRoom(props) {
    const [chatrooms, setChatrooms] = useState([])
    useEffect(() => {
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: BaseUrl + 'chat/chatroom/',
          headers: { }
        };

        axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setChatrooms(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    return (
        <div>
            <h1>Chat Room</h1>
            <ul>
                {chatrooms.map((chatroom, index) => {
                    return <li key={chatroom.id}>{chatroom.name}</li>
                })}
            </ul>
        </div>
    );
}

export default ChatRoom;