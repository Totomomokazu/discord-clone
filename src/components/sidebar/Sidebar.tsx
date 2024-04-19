import React from 'react'
import "./Sidebar.scss"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

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
            </div>
        </div>
    </div>
  )
}

export default Sidebar
