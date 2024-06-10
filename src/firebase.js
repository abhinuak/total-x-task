// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB-xVfwoYZgWzgho2DY6o8va4HkfL-EGtY",
  authDomain: "otp-generation-ddb65.firebaseapp.com",
  projectId: "otp-generation-ddb65",
  storageBucket: "otp-generation-ddb65.appspot.com",
  messagingSenderId: "863185087110",
  appId: "1:863185087110:web:18e6ad229fed11dfba3f07",
  measurementId: "G-FPPD7S6L6R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);