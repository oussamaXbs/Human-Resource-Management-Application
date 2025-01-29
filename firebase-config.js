// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQKkZ1GgedUA2D6VaNveEYIP-udVX1c1k",
  authDomain: "hrms-e844d.firebaseapp.com",
  projectId: "hrms-e844d",
  storageBucket: "hrms-e844d.firebasestorage.app",
  messagingSenderId: "1027031234152",
  appId: "1:1027031234152:web:fb566e0cf7a16f5fb72ddd",
  measurementId: "G-1SJY6T4FVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);