// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "letmeask-14361.firebaseapp.com",
  databaseURL: "https://letmeask-14361-default-rtdb.firebaseio.com",
  projectId: "letmeask-14361",
  storageBucket: "letmeask-14361.appspot.com",
  messagingSenderId: "177076575775",
  appId: "1:177076575775:web:fcef35f6f269179ec2bf2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);