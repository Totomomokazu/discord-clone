import React, { useEffect, useState } from 'react'
import "./Chat.scss"
import ChatHeader from './ChatHeader';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMessage from './ChatMessage';
import { useAppSelector } from '../../app/hooks';
import { CollectionReference, DocumentData, DocumentReference, Timestamp, addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, snapshotEqual } from 'firebase/firestore';
import { db } from '../../firebase';

interface Messages{
  timestamp:Timestamp;
  message:string;
  user:{
    uid:string;
    photo:string;
    email:string;
    displayName:string;
  };
}


function Chat() {
  const [inputText,setInputText] = useState<string>(""); //chatのメッセージを受け取るためにもconstでusestateを定義している
  // 文字列を受け取るための状態変数を定義
  const [messages,setMessages] = useState<Messages[]>([]);
  const channelName = useAppSelector((state)=>state.channel.channelName);
  const channelId=useAppSelector((state)=>state.channel.channelId);
  const user = useAppSelector((state)=>state.user.user);

  // console.log(channelName);
  // console.log(inputText);

  useEffect(()=>{
    let collectionRef = collection(
      db,
      "channels",
      String(channelId),
      "messages"
    );

    const collectionRefOrder = query(collectionRef,orderBy("timestamp","asc"));
    
    onSnapshot(collectionRefOrder, (snapshot) => {
      let results: Messages[] =[];
      snapshot.docs.forEach((doc) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      setMessages(results);
      console.log(results);
    });
  },[channelId]);


  const sendMessage = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    e.preventDefault();

    // channelsコレクションの中にあるmessagesコレクションの中にメッセージ情報を入れる
    const collectionRef: CollectionReference<DocumentData> = collection(db,"channels",String(channelId),"messages");

    const docRef: DocumentReference<DocumentData>=  await addDoc(
      collectionRef,
      {
        message:inputText,
        timestamp:serverTimestamp(),
        user:user,
    });
    // console.log(docRef);
    setInputText("");
  };
  
  return (
    <div className='chat'>
        {/* chatHeader */}
        <ChatHeader  channelName={channelName}/>
        {/* chatMessage */}

        <div className='chatMessage'>
          {messages.map((messages, index) => (
            <ChatMessage 
            key={index}
            message={messages.message}
            timestamp={messages.timestamp}
            user={messages.user  || { uid: '', photo: '', email: '', displayName: 'Unknown User' }} />
            //  ★追記した|| { uid: '', photo: '', email: '', displayName: 'Unknown User' }
          ))}
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
                  //onclickでクリック発生時に発生するクリックイベントを定義。
                  sendMessage(e)
                }
                value={inputText}
                
                >
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