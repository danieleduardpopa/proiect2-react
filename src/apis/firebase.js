import * as firebase from 'firebase/app';
import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../configs/firebase';
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    signOut, 
    } from "firebase/auth";


const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

// firebase.auth().signInWithGoogle(provider)

export function signInWithGoogle() {
    return signInWithPopup(auth, provider)
};

export function signOutUser() {
    return signOut(auth)
}

