// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3-OpPLDpZNOR0G1afznT4g4wEYVC3Bz4",
  authDomain: "wp-aichat.firebaseapp.com",
  projectId: "wp-aichat",
  storageBucket: "wp-aichat.appspot.com",
  messagingSenderId: "986151372255",
  appId: "1:986151372255:web:d58f7f397c1c178951b06a",
  measurementId: "G-8NJBDK706E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
