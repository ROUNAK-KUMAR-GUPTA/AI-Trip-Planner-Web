// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore}   from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWxjBcE6DWfq3inT5NlF9XSDG69uJ_yzY",
  authDomain: "ai-travel-planner-b90d4.firebaseapp.com",
  projectId: "ai-travel-planner-b90d4",
  storageBucket: "ai-travel-planner-b90d4.firebasestorage.app",
  messagingSenderId: "141209566851",
  appId: "1:141209566851:web:2ab5156b5b847a7163a5b6",
  measurementId: "G-JSCCQ118WH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
//const analytics = getAnalytics(app);