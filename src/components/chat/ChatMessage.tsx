import React from 'react'
import "./ChatMessage.scss"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Timestamp } from 'firebase/firestore';
import { Avatar } from '@mui/material';

type Props = { //Propsで型を指定
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
  const {message, timestamp, user} =props;  //定義した変数をpropsで準備

  return (
    <div className='message'>
        <Avatar src='user.photo'/>
        <div className='messageInfo'>
            <h4>
                {user?.displayName}
                {/* 定義した変数userでuserNameを受け取り表示させる */}
                {/* ?をつけるだけでエラーが消えた */}
                <span className='messageTimestamp'>{new Date(timestamp?.toDate()).toLocaleString()}</span>
                {/* ?をつけるだけでエラーが消えた */}
            </h4>

            <p>{message}</p>
            {/* 定義した変数messageでmessageを受け取り表示させる */}
        </div>
    </div>
  )
}

export default ChatMessage