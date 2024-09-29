import React from 'react'
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

function Sidebar() {
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
    </div>
  )
}

export default Sidebar;