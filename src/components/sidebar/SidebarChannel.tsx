import React from 'react'
import "./SidebarChannel.scss"
import { DocumentData } from 'firebase/firestore';
import { useAppDispatch } from '../../app/hooks';
import { setChannelInfo } from '../../features/channelSlice';

type Props ={
  id :string;
  channel:DocumentData;
}

// Propsを定義することで、チャンネル名をFirebaseから受け取っている
const SidebarChannel = (props: Props)=> {
  const {id,channel}=props; 
  const dispatch = useAppDispatch() //dispacthを呼び込む
  return (
    <div className='sidebarChannel'  //click時にdispatchを使ってchannelSliceで定義したsetChannelInfoを呼び出す
      onClick={()=> 
        dispatch(
          setChannelInfo({
            channelId:id,
            channelName:channel.channel.channelName,
          })
        )
      }
    >
        <h4>
            <span className='sidebarChannelHash'>#</span>
            {channel.channel.channelName}
            {/* 上でチャンネル名を取得できる。 */}
        </h4>
    </div>
  )
}

export default SidebarChannel