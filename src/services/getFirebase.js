// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJRL1KgqhjeLQC1O-fmvjIYK9H_HXCGG4",
    authDomain: "unica-certeza-podcast.firebaseapp.com",
    projectId: "unica-certeza-podcast",
    storageBucket: "unica-certeza-podcast.appspot.com",
    messagingSenderId: "948146966970",
    appId: "1:948146966970:web:5a4917f16e38c5560d0d83",
    measurementId: "G-B4WVVEKT1J"
  };




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Database Firestore
 export const db = getFirestore();
