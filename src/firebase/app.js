// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBowfkfmRqpJ4dKWy5mlqH1LseKpPDBJyo",
  authDomain: "ecommerce-6020d.firebaseapp.com",
  projectId: "ecommerce-6020d",
  storageBucket: "ecommerce-6020d.appspot.com",
  messagingSenderId: "50987363177",
  appId: "1:50987363177:web:1420ac4f5c28c41cb32bf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)