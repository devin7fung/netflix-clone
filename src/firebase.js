// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkHig_6YxCbyOR8zQBAXILg8pLEjgVESA",
  authDomain: "netflixclone-ba9fb.firebaseapp.com",
  projectId: "netflixclone-ba9fb",
  storageBucket: "netflixclone-ba9fb.appspot.com",
  messagingSenderId: "1094378077676",
  appId: "1:1094378077676:web:6a3bae433ee569864ad4c9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
