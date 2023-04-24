import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkrJTU1ClS8KDBtnwX1VaFVaI1TDRXuFo",
  authDomain: "bytes-and-pixels.firebaseapp.com",
  projectId: "bytes-and-pixels",
  storageBucket: "bytes-and-pixels.appspot.com",
  messagingSenderId: "694512660715",
  appId: "1:694512660715:web:1e79fa8f2b48fb01dfceae",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
