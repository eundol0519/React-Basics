// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3j82dSccOpqTMBMxuVrODXWd7bhS3Khg",
    authDomain: "friend-test-c57f3.firebaseapp.com",
    projectId: "friend-test-c57f3",
    storageBucket: "friend-test-c57f3.appspot.com",
    messagingSenderId: "1054750540367",
    appId: "1:1054750540367:web:aaab50f33f36969361203a",
    measurementId: "G-JD0J03DBRE"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore();
export {db}