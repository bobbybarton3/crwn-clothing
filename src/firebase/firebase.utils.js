import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAXehQFeWLIea2We1M6VBM8OQsKODFqPMc",
    authDomain: "crwn-db-1c651.firebaseapp.com",
    projectId: "crwn-db-1c651",
    storageBucket: "crwn-db-1c651.appspot.com",
    messagingSenderId: "241812209342",
    appId: "1:241812209342:web:85bd1cc705751d0021a8ef",
    measurementId: "G-YC4RE54CCK"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    console.log(snapShot)

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
           await userRef.set({
               displayName,
               email,
               createdAt,
               ...additionalData
           }) 
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;