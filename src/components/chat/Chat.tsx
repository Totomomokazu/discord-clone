import React, { useState } from 'react'
import "./Chat.scss"
import ChatHeader from './ChatHeader';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMessage from './ChatMessage';
import { useAppSelector } from '../../app/hooks';
import { CollectionReference, DocumentData, DocumentReference, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';



function Chat() {
  const [inputText,setInputText] = useState<string>("");
  // 文字列を受け取るための状態変数を定義
  const channelName = useAppSelector((state)=>state.channel.channelName);
  const channelId=useAppSelector((state)=>state.channel.channelId);
  const user = useAppSelector((state)=>state.user.user);

  // console.log(channelName);
  console.log(inputText);

  const sendMessage = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    e.preventDefault();

    // channelsコレクションの中にあるmessagesコレクションの中にメッセージ情報を入れる
    const collectionRef: CollectionReference<DocumentData> = collection(db,"channels",String(channelId),"meeseges");

    const docRef: DocumentReference<DocumentData>=  await addDoc(
      collectionRef,
      {
        message:inputText,
        timestamp:serverTimestamp(),
        user:user,
    });
    console.log(docRef)
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