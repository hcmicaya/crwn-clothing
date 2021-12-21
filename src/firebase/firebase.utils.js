import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyB9rMKpSnHaxSpgHeWaDU4LKXtIQjKrDpA",
    authDomain: "crwn-db-63a20.firebaseapp.com",
    projectId: "crwn-db-63a20",
    storageBucket: "crwn-db-63a20.appspot.com",
    messagingSenderId: "516120285589",
    appId: "1:516120285589:web:622effaa96d8453aa4e69c",
    measurementId: "G-YN8K1VS8CM"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
