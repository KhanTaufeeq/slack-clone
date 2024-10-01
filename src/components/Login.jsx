import React from "react";
import "../Login.css";
import { Button } from "@mui/material";
import {auth, provider} from '../firebase';
import { useStateValue } from "./StateProvider";
import { actionTypes } from "../Reducer";

function Login() {
  const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(res => {
            console.log(res);
            dispatch({
              type: actionTypes.SET_USER,
              user: res.user,
            })
        })
        .catch(error => {
            alert(error.message);
        })
    }
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/306_Slack_logo-512.png"
          alt="slack"
        />
        <h1>Welcome to TECH I.S. Slack Workplace :)</h1>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
