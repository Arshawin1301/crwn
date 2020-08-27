import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBtXpglqKGVC-9XOaVYrFuJooxgMMRrako",
    authDomain: "crwn-db-f70c4.firebaseapp.com",
    databaseURL: "https://crwn-db-f70c4.firebaseio.com",
    projectId: "crwn-db-f70c4",
    storageBucket: "crwn-db-f70c4.appspot.com",
    messagingSenderId: "988101604338",
    appId: "1:988101604338:web:8dd0654e02fb0882c2f16b",
    measurementId: "G-VPRHMCXJHT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;