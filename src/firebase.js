import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHpQz_ITGAuz0dr9tuAVEEhzIMUb9ocTU",
  authDomain: "chat-4e5b4.firebaseapp.com",
  projectId: "chat-4e5b4",
  storageBucket: "chat-4e5b4.appspot.com",
  messagingSenderId: "76852442177",
  appId: "1:76852442177:web:1c2822f0f408e7152c42c0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
