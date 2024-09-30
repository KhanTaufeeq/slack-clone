import React, {useState, useEffect} from 'react';
import '../Chat.css';
import { useParams } from 'react-router';
import { StarBorderOutlined } from '@mui/icons-material';
import { InfoOutlined } from '@mui/icons-material';
import db from '../firebase';

function Chat() {
    const {roomId} = useParams();
    const [roomDetails, setRoomDetails] = useState(null);

    useEffect(() => {
        if (roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomDetails(snapshot.data())
            ))
        }
    }, [roomId]);
    console.log(roomDetails);
  return (
    <div className="chat">
        {/* <h2>You are in the {roomDetails?.name} room</h2> */}
        <div className="chat__header">
            <div className="chat__headerLeft">
                <h4 className="chat__channelName">
                    <strong>#{roomDetails?.name}</strong>
                    <StarBorderOutlined/>
                </h4>
            </div>
            <div className="chat__headerRight">
                <p>
                    <InfoOutlined/> Details
                </p>
            </div>
        </div>
    </div>
  )
}

export default Chat;

// useParams() -> Returns an object of key/value pairs of the dynamic params from the current URL 
// that were matched by the route path.


// useEffect:
// When the roomId changes, the useEffect hook runs and listens to the Firebase database to retrieve 
// the room details. Once the Firebase query is done, roomDetails gets updated with the actual data from the database.


// Optional Chaining (?.):
// The ?. operator is a safeguard that only accesses the property (name) 
// if roomDetails is not null or undefined. If roomDetails is null or undefined, 
// it short-circuits and returns undefined for the whole expression instead of throwing an error.
// When you use roomDetails?.name, 
// you're essentially saying "if roomDetails exists, then access name, otherwise, return undefined."