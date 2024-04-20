import React from 'react'
import "./ChatMessage.scss"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function ChatMessage() {
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