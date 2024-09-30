import React from 'react';
import '../SidebarOption.css';
import { useNavigate } from 'react-router';
import db from '../firebase';

function SidebarOption({Icon, title, id, addChannelOption}) {
  const navigate = useNavigate();

  const selectChannel = () => {
    if (id) {
      navigate(`/room/${id}`)
    } else{
      navigate('title')
    }
  }

  const addChannel = () => {
    const channelName = prompt('Please enter a channel name');
    
    if (channelName){
      db.collection('rooms').add({
        name: channelName,
      })
    }
  }

  return (
    <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
        {
            Icon && <Icon className="sidebarOption__icon"/>
        }
        {
            Icon ? <h3>{title}</h3> : <h3 className='sidebarOption__hash'>#  {title}</h3>
        }
    </div>
  )
}

export default SidebarOption;

// useNavigate() is a hook introduced in React Router v6 to replace useHistory(). 
// It provides a simpler and more intuitive way to navigate programmatically between routes in your React application.

// Key Features of useNavigate():
// Programmatic Navigation: Similar to useHistory(), you can navigate between routes programmatically without relying on link elements.

// Replacing Routes: You can replace the current entry in the navigation history rather than adding a new one, 
// which is helpful for actions like redirects after login.

// State Passing: You can pass state or data to the next route when navigating.