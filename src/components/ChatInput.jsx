import React , {useState} from "react";
import "../ChatInput.css";
import db from "../firebase";
import { useStateValue } from "./StateProvider";
import firebase from "firebase/compat/app";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{user}] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();

    if (channelId){
        db.collection('rooms').doc(channelId).collection('messages').add({
            message : input,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL
        })
    }
    setInput('');
  };
  return (
    <div className="chatInput">
      <form action="">
        <input
          value = {input}
          type="text"
          name="message"
          placeholder={`Message #${channelName}`}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
