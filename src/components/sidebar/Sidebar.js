import { Add, AppsOutlined, BookmarkBorderOutlined, DraftsOutlined, ExpandLessOutlined, ExpandMoreOutlined, FiberManualRecord, FileCopyOutlined, InboxOutlined, InsertComment, PeopleAltOutlined } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import SidebarOption from './SidebarOption';
import db from '../../firebase';
import { useStateValue } from '../../StateProvider';

 
function Sidebar() {

    const [channels , setChannels] = useState([]);
    const [{user}] = useStateValue();


    useEffect(()=>{
        db.collection('rooms')
        .onSnapshot(snapshot =>{
            setChannels(
                snapshot.docs.map((doc)=>({
                    id: doc.id,
                    name: doc.data().name
                }))
            )
        })
    },[])

    return (
        <div className="sidebar">
            <div className="sidebar_header"> 
                <div className="sidebar_info">
                    <h2>Developer Gossip</h2>
                    <h3>
                        <FiberManualRecord  />
                        {user?.displayName}
                    </h3>
                </div>
                <BorderColorOutlinedIcon />
            </div>
                <SidebarOption  Icon={InsertComment} title="Threads" />
                <SidebarOption   title="Youtube" />
                <SidebarOption Icon={InboxOutlined} title=" Mention & Reaction " />
                <SidebarOption Icon={DraftsOutlined} title="Saved Item" />
                <SidebarOption Icon={BookmarkBorderOutlined} title="Channel Browser" />
                <SidebarOption Icon={PeopleAltOutlined} title="People & user Group" />
                <SidebarOption Icon={AppsOutlined} title="Apps" />
                <SidebarOption Icon={FileCopyOutlined} title="File Browser" />
                <SidebarOption Icon={ExpandLessOutlined} title="Show Less" />
                <hr />
                <SidebarOption Icon={ExpandMoreOutlined} title="Channel " />
                <hr/>
                <SidebarOption Icon={Add} addChannelOption  title="Add Channel " />

                {channels.map(channel =>(
                    <SidebarOption  title={channel.name}  id={channel.id} />
                ))}
        </div>
    )
}

export default Sidebar
