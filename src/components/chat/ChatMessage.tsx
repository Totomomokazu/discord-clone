import React from 'react'
import "./ChatMessage.scss"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Timestamp } from 'firebase/firestore';

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
  const {message, timestamp, user} =props
  return (
    <div className='message'>
        <AccountCircleIcon/>
        <div className='messageInfo'>
            <h4>
                Tomokazu
                <span className='messageTimestamp'>2024/04/21</span>
            </h4>

            <p>メッセージ本文</p>
        </div>
    </div>
  )
}

export default ChatMessage