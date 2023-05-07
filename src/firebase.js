import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCdRSrZt5EOogLfmNutMKTjSIw2GWFVlAo",
  authDomain: "chatly-3a21c.firebaseapp.com",
  projectId: "chatly-3a21c",
  storageBucket: "chatly-3a21c.appspot.com",
  messagingSenderId: "194658515434",
  appId: "1:194658515434:web:0fae46b1c835d54ce81a93"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
