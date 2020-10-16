import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import db from '../../firebase';
import './Chat.css'
import Message from  '../message/Message'
import ChatInput from './ChatInput';

function Chat() {
    const {roomId} = useParams();
    const [roomDetails , setRoomDetails] = useState(null)
    const [roomMessages , setRoomMessages] = useState([])

    useEffect(()=>{
        if(roomId){
            db.collection('rooms').doc(roomId)
            .onSnapshot(snapshot =>  {
                setRoomDetails(snapshot.data())
            })
        }
    },[roomId]);

    useEffect(()=>{
        db.collection('rooms').doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapshot =>{
            setRoomMessages(snapshot.docs.map(doc => doc.data()));
        })
    },[roomId])
console.log(roomMessages)

    return (
        <div className="chat">

            <div className="chat_header">
                <div className="chat_header_left">
                    <h4 className="chat_channel_name">
                         <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlined />
                    </h4>
                </div>
                <div className="chat_header_right">
                    <p><InfoOutlined /> Details</p>
                </div>
                
            </div>
            <div className="chat_messages">
                {roomMessages.map( roomMessage => (
                    <Message 
                        user={roomMessage.user}
                        userImage={roomMessage.userImage}
                        timestamp={roomMessage.timestamp}
                        message={roomMessage.message}
                    />

                ) )}
            </div>
            <ChatInput channelName={roomDetails?.name} channelId={roomId}  />
        </div>
    )
}

export default Chat
