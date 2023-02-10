import * as firebase from 'firebase/app';
import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../configs/firebase';
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    signOut,
    FacebookAuthProvider, 
    } from "firebase/auth";


const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();




export function signInWithGoogle() {
    const auth = getAuth(app);
    return signInWithPopup(auth, googleProvider)
};
export function signInWithFacebook() {
    const auth = getAuth(app);
    return signInWithPopup(auth, facebookProvider)
};

export function signOutUser() {
    const auth = getAuth(app);
    return signOut(auth)
}

