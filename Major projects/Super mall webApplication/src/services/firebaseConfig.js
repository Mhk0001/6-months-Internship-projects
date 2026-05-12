// src/services/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "add _api_key_here",
  authDomain: "supermall-ee533.firebaseapp.com",
  projectId: "supermall-ee533",
  storageBucket: "supermall-ee533.firebasestorage.app",
  messagingSenderId: "225395268528",
  appId: "1:225395268528:web:aedbf061289112f2085475",
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
