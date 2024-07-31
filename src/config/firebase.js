// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyDiQQXPQPkcuDarsCkwtBCCwJ0TFIBXw",
  authDomain: "grabby-app-2b788.firebaseapp.com",
  projectId: "grabby-app-2b788",
  storageBucket: "grabby-app-2b788.appspot.com",
  messagingSenderId: "743759838423",
  appId: "1:743759838423:web:efbad5d7ac53194772c492",
  measurementId: "G-3QEZ54JR5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
