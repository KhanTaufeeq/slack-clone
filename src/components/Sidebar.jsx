import React, {useState, useEffect} from 'react'
import '../Sidebar.css';
import { FiberManualRecord } from '@mui/icons-material';
import { Create } from '@mui/icons-material';
import { InsertComment } from '@mui/icons-material';
import SidebarOption from './SidebarOption';
import { Inbox } from '@mui/icons-material';
import { Drafts } from '@mui/icons-material';
import { BookmarkBorder } from '@mui/icons-material';
import { PeopleAlt } from '@mui/icons-material';
import { Apps } from '@mui/icons-material';
import { FileCopy } from '@mui/icons-material';
import { ExpandLess } from '@mui/icons-material';
import { ExpandMore } from '@mui/icons-material';
import { Add } from '@mui/icons-material';
import db from '../firebase';

function Sidebar() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    // run this code once when the sidebar component loads
    db.collection('rooms').onSnapshot(snapshot => {
      setChannels(
        snapshot.docs.map(doc => ({
          id: doc.id,
          name : doc.data().name,
        }))
      )
    })
  }, []);
  return (
    <div className="sidebar">
        <div className="sidebar__header">
            <div className="sidebar__info">
            <h2>Exceptional developer</h2>
            <h3>
                <FiberManualRecord/>
                Mohd Taufeeq Khan
            </h3>
            </div>
            <Create/>
        </div>
        <SidebarOption Icon = {InsertComment} title = "Threads" />
        <SidebarOption Icon = {Inbox} title = "Mentions & Reactions" />
        <SidebarOption Icon = {Drafts} title = "Saved items" />
        <SidebarOption Icon = {BookmarkBorder} title = "Channel Browser" />
        <SidebarOption Icon = {PeopleAlt} title = "People & user groups" />
        <SidebarOption Icon = {Apps} title = "Apps" />
        <SidebarOption Icon = {FileCopy} title = "File browser" />
        <SidebarOption Icon = {ExpandLess} title = "Show less" />
        <hr />
        <SidebarOption Icon = {ExpandMore} title = "Channel" />
        <hr />
        <SidebarOption Icon = {Add} title = "Add Channel" />

        {/* Connect to database and list all the channels */}
        {/* <SidebarOption ..../> */}
        {
          channels.map(channel => (
            <SidebarOption title = {channel.name} id = {channel.id} />
          ))
        }
    </div>
  )
}

export default Sidebar;