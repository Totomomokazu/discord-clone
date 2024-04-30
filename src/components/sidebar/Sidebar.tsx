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
// import { collection, query } from 'firebase/firestore/lite'; //ここのliteが不要かも
import { DocumentData, collection, query } from 'firebase/firestore';
import { QueryDocumentSnapshot, QuerySnapshot, onSnapshot } from "firebase/firestore";

interface Channel{
    id:string,
    channel:DocumentData;
}

const Sidebar = () => {
    const [channles,setChannels] = useState<Channel[]>([]);

    const user = useAppSelector((state)=>state.user);
    const q = query(collection(db,"channles"));

    useEffect(() =>{
        onSnapshot(q,(querySnapshot)=>{
            const channlesResults: Channel[] = [];
            querySnapshot.docs.forEach((doc) => 
                channlesResults.push({
                    id:doc.id,
                    channel:doc.data(),
                })
            );
            setChannels(channlesResults);
        });
    },[]);


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
                    <AddIcon className='sidebarAddicon'/>
                </div>

                <div className='sidebarChannelList'>
                    {channles.map((channel) => (
                        <SidebarChannel/>
                    ))}                    
                    {/* <SidebarChannel/>
                    <SidebarChannel/>
                    <SidebarChannel/> */}
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
