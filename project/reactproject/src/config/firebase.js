// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNA7PsLb6fN_fPzDnz-w3XOvdd-QjhiZU",
  authDomain: "vitecontact-a8541.firebaseapp.com",
  projectId: "vitecontact-a8541",
  storageBucket: "vitecontact-a8541.appspot.com",
  messagingSenderId: "207729040438",
  appId: "1:207729040438:web:06a4277e1f28f7bb120c97"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);