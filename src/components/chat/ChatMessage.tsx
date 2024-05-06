import React from 'react'
import "./ChatMessage.scss"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Timestamp } from 'firebase/firestore';
import { Avatar } from '@mui/material';

type Props = {
  timestamp:Timestamp;
  message:string;
  user:{
    uid:string;
    photo:string;
    email:string;
    displayName:string;
  };
}

const ChatMessage = (props: Props) => {
  const {message, timestamp, user} =props;

  return (
    <div className='message'>
        <Avatar src='user.photo'/>
        <div className='messageInfo'>
            <h4>
                {user?.displayName}
                {/* ?をつけるだけでエラーが消えた */}
                <span className='messageTimestamp'>{new Date(timestamp?.toDate()).toLocaleString()}</span>
                {/* ?をつけるだけでエラーが消えた */}
            </h4>

            <p>{message}</p>
        </div>
    </div>
  )
}

export default ChatMessage