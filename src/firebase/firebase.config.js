// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkFUF706lWxWEV0xe9lIxkp5V1tv05H0Y",
  authDomain: "fir-fighter-b587c.firebaseapp.com",
  projectId: "fir-fighter-b587c",
  storageBucket: "fir-fighter-b587c.firebasestorage.app",
  messagingSenderId: "745179491872",
  appId: "1:745179491872:web:fb672c88dee92a6e049645"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);