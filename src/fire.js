// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtNcEY-JdjU-t4o36p-WFb3Udl9lF9AqE",
    authDomain: "traithmon.firebaseapp.com",
    projectId: "traithmon",
    storageBucket: "traithmon.appspot.com",
    messagingSenderId: "1047663405926",
    appId: "1:1047663405926:web:348c400b9e1b002bb1b6a7",
    measurementId: "G-N5VE7QWPKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export default { analytics, auth, db }