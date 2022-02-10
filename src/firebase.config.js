import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcBLbfCQZd1teYjisDYt5bHVynK8XC3OY",
  authDomain: "house-marketplace-app-9a52a.firebaseapp.com",
  projectId: "house-marketplace-app-9a52a",
  storageBucket: "house-marketplace-app-9a52a.appspot.com",
  messagingSenderId: "128153305353",
  appId: "1:128153305353:web:31a3eadad07c25582b13d8",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
