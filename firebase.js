// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from  "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT4kCf_J26yPfnHCI8ibQWxR7ALBBNQsQ",
  authDomain: "inventory-management-eab12.firebaseapp.com",
  projectId: "inventory-management-eab12",
  storageBucket: "inventory-management-eab12.appspot.com",
  messagingSenderId: "998201938235",
  appId: "1:998201938235:web:1eef61e6f85c44cc12e71e",
  measurementId: "G-BC785JCRFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}
