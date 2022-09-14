
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
// import firebase from 'firebase';



const firebaseConfig = {
  apiKey: "AIzaSyDkxKQO1V-TQME5r4hxJcPHri1uqg2QFMY",
  authDomain: "sw28-2a9d6.firebaseapp.com",
  projectId: "sw28-2a9d6",
  storageBucket: "sw28-2a9d6.appspot.com",
  messagingSenderId: "1032788091787",
  appId: "1:1032788091787:web:6d59045154ae9450e5458e",
  measurementId: "G-H9PDWZMEH9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)

// Initialize Firebase with Firestore
export const db = getFirestore(app);

