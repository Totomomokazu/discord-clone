import React, { useState } from 'react'
import "./Chat.scss"
import ChatHeader from './ChatHeader';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMessage from './ChatMessage';
import { useAppSelector } from '../../app/hooks';



function Chat() {
  const [inputText,setInputText] = useState<string>("");
  // 文字列を受け取るための状態変数を定義

  const channelName = useAppSelector((state)=>state.channel.channelName);
  // console.log(channelName);
  console.log(inputText);

  const sendMessage = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    e.preventDefault();
    console.log("send message")
  };
  
  return (
    <div className='chat'>
        {/* chatHeader */}
        <ChatHeader  channelName={channelName}/>
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
                <input type="text" placeholder='#Udemyへメッセージ送信' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)} />
                {/* ↑↑↑↑イベントで起きた変化を受け取る関数 */}
                <button 
                type='submit' 
                className='chatInputButtun'
                onClick={(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>
                  sendMessage(e)
                }>
                  送信
                  </button>
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