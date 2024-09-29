// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyArbyjG9Fr8RZbMLqRiwNJPwUWbpY7ixck",
    authDomain: "slack-clone-ea50e.firebaseapp.com",
    projectId: "slack-clone-ea50e",
    storageBucket: "slack-clone-ea50e.appspot.com",
    messagingSenderId: "196172712723",
    appId: "1:196172712723:web:4e89aefdec40e3d0ebe8e6",
    measurementId: "G-KTRLH40ZGE"
};

// Firestore: More structured, advanced querying, better scalability.
// Realtime Database: Simpler, real-time sync focused, better for basic hierarchical data.

// const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider;

export {auth, provider};
export default db;

// collection > documents > data;

