// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSaYyWfEFc4fzXin8E_CXWkg9fbQyZjR8",
  authDomain: "netflix-clone-47370.firebaseapp.com",
  projectId: "netflix-clone-47370",
  storageBucket: "netflix-clone-47370.appspot.com",
  messagingSenderId: "366549278628",
  appId: "1:366549278628:web:70edeaf0d32a31d248ab31",
  measurementId: "G-KTWPKJETYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
