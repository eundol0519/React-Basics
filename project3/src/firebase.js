// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9ibkUwbpTj7StpjUojepYY2v1liyFcVo",
  authDomain: "sparta-project2-a9e22.firebaseapp.com",
  projectId: "sparta-project2-a9e22",
  storageBucket: "sparta-project2-a9e22.appspot.com",
  messagingSenderId: "348625584748",
  appId: "1:348625584748:web:03319982f6327e194ace49",
  measurementId: "G-PQJ1V0G5ML"
};

initializeApp(firebaseConfig);

export const db = getFirestore();