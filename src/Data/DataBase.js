import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQzQIFQShvoCnn-PJvWNcZHqcUT2RlTJA",
  authDomain: "vue-firebase-267f6.firebaseapp.com",
  databaseURL: "https://vue-firebase-267f6-default-rtdb.firebaseio.com",
  projectId: "vue-firebase-267f6",
  storageBucket: "vue-firebase-267f6.appspot.com",
  messagingSenderId: "251898356335",
  appId: "1:251898356335:web:f44f0e2d6ae9696daaa39a",
  measurementId: "G-HVRY2192XT"
};

// Initialize Firebase
 let app=firebase.initializeApp(firebaseConfig);
 
export default app.database();