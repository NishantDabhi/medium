// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp1YayXmNtMYpgIWsCZTJdYRt89LVS6TM",
  authDomain: "medium-clone-de452.firebaseapp.com",
  projectId: "medium-clone-de452",
  storageBucket: "medium-clone-de452.appspot.com",
  messagingSenderId: "804528483272",
  appId: "1:804528483272:web:c52baebc58b4e1d9742efd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth, provider, db }