import { getDatabase } from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCpkgGOrqyw1HNMvg8Mx0OR8Bg0msVOFpo",
  authDomain: "practice-todo-ca8ed.firebaseapp.com",
  databaseURL:
    "https://practice-todo-ca8ed-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "practice-todo-ca8ed",
  storageBucket: "practice-todo-ca8ed.appspot.com",
  messagingSenderId: "849556270561",
  appId: "1:849556270561:web:65a6e7c614299feb2b36a0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase();
