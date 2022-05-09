import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDBfck-J02Z3gbBLO5yFyLvaWtLfjQTtIE",
  authDomain: "wallets-bae54.firebaseapp.com",
  projectId: "wallets-bae54",
  storageBucket: "wallets-bae54.appspot.com",
  messagingSenderId: "575736187810",
  appId: "1:575736187810:web:c07b4e528aedcfded240fb",
  measurementId: "G-3FML29JE81",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
