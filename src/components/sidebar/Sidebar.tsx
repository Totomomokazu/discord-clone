import React from 'react'
import "./Sidebar.scss"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';


const Sidebar = () => {
  return (
    <div className='sidebar'>
        {/* sidebarLeft */}
        <div className='sidebarLeft'>
            <div className='sidebarIcon'>
                <img src="./logo192.png" alt="" />
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
                    <SidebarChannel/>
                    <SidebarChannel/>
                    <SidebarChannel/>
                    <SidebarChannel/>
                </div>


                <div className='sidebarFooter'>
                    <div className='sidebarAccount'> 
                        <img src="./icon.jpg" alt="" />
                        <div className='accountName'>
                            <h4>Tomokazu</h4>
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
