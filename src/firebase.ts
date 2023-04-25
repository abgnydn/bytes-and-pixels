import { initializeApp } from "firebase/app";
import {
  getFirestore,
  CollectionReference,
  collection,
  DocumentData,
} from "firebase/firestore";
import { User } from "./types";

const firebaseConfig = {
  apiKey: "AIzaSyDkrJTU1ClS8KDBtnwX1VaFVaI1TDRXuFo",
  authDomain: "bytes-and-pixels.firebaseapp.com",
  projectId: "bytes-and-pixels",
  storageBucket: "bytes-and-pixels.appspot.com",
  messagingSenderId: "694512660715",
  appId: "1:694512660715:web:1e79fa8f2b48fb01dfceae",
};

const app = initializeApp(firebaseConfig);

export const fireStore = getFirestore();

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(fireStore, collectionName) as CollectionReference<T>;
};

export const usersCol = createCollection<User>("users");
