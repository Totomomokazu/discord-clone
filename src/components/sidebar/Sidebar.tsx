import React, { useEffect, useState } from 'react'
import "./Sidebar.scss"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import { auth, db } from '../../firebase';
import { useAppSelector } from '../../app/hooks';
import { DocumentData, addDoc, collection, query } from 'firebase/firestore';
import { QueryDocumentSnapshot, QuerySnapshot, onSnapshot } from "firebase/firestore";
import useCollection from '../../hooks/useCollection'; //カスタムhooksを呼び出している

interface Channel{
    id:string,
    channel:DocumentData;
}

const Sidebar = () => {
    const user = useAppSelector((state)=>state.user.user);
    const {documents:channels} = useCollection("channels");
    // カスタムhooksを呼び出している

    const addChannel = async() => { //addChannelという関数を作成
        let channelName:string|null = prompt("新しいチャンネルを作成します"); //promptという関数はfirebaseとは別で定義されている関数

        if(channelName){
            await addDoc(collection(db, "channels"), { //channelNameを取得する関数
                channelName: channelName,
            })
        }
    }

  return (
    <div className='sidebar'>
        {/* sidebarLeft */}
        <div className='sidebarLeft'>
            <div className='sidebarIcon'>
                <img src="./discordIcon.png" alt="" />
            </div>
            <div className='sidebarIcon'>
                <img src="./logo192.png" alt="" />
            </div>   
        </div>
   
   
        {/* sidebarRight */}
        <div className='sidebarRight'>
            <div className='sidebarTop'>
                <h3>Discord</h3>
                <ExpandMoreIcon/>
            </div>
            
            {/* sidebarChannnels */}
            <div className='sidebarChannels'>
                <div className='sidebarChannelsHeader'>
                    <div className='sidebarHeader'>
                        <ExpandMoreIcon/>
                        <h4>test</h4>
                    </div>
                    <AddIcon className='sidebarAddicon' onClick={() => addChannel()}/>
                    {/* ↑で、onClickイベントを定義し、clickされたときにaddChannelを呼び起こす */}
                </div>

                <div className='sidebarChannelList'>
                    {channels.map((channel) => ( //チャンネル名をmap関数で展開している。
                        <SidebarChannel channel={channel} id={channel.id} key={channel.id}/>
                    ))}                    
                </div>


                <div className='sidebarFooter'>
                    <div className='sidebarAccount'> 
                        <img src={user?.photo} alt="" onClick={()=> auth.signOut()} />
                        {/* <img src="./icon.jpg" alt="" onClick={()=> auth.signOut()} /> */}
                        <div className='accountName'>
                            <h4>{user?.displayName}</h4>
                            <span>#{user?.uid.substring(0,4)}</span>
                        </div>                  
                    </div>
                    <div className='sidebarVoice'>
                        <MicIcon/>
                        <HeadphonesIcon/>
                        <SettingsIcon/>
                    </div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
