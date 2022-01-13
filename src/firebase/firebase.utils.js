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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    // checks if there's data
    if(!snapShot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();
        // create if it there's no data
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;