import React from 'react'
import "./Chat.scss"
import ChatHeader from './ChatHeader';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMessage from './ChatMessage';
import { useAppSelector } from '../../app/hooks';



function Chat() {
  const channelName = useAppSelector((state)=>state.channelName);
  
  return (
    <div className='chat'>
        {/* chatHeader */}
        <ChatHeader />
        {/* chatMessage */}

        <div className='chatMessage'>
           <ChatMessage/>
           <ChatMessage/>
           <ChatMessage/>
        </div>
            
        {/* chatInput */}
        <div className='chatInput'>
            <AddCircleOutlineIcon />
            <form>
                <input type="text" placeholder='#Udemyへメッセージ送信' />
                <button type='submit' className='chatInputButtun'>送信</button>
            </form>


            <div className='chatInputIcons'>
                <CardGiftcardIcon/>
                <GifIcon/>
                <EmojiEmotionsIcon/>
            </div>
        </div>
    </div>
  )
}

export default Chat