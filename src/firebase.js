import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrHpEJDfXjxNE12HvnjrF-nH4h5B5z0HM",
  authDomain: "card-d88d7.firebaseapp.com",
  projectId: "card-d88d7",
  storageBucket: "card-d88d7.firebasestorage.app",
  messagingSenderId: "76570763752",
  appId: "1:76570763752:web:3b33b2687606c8fce8445d",
};

const app =
  getApps().length > 0
    ? getApp()
    : initializeApp(firebaseConfig);

export const db = getFirestore(app);