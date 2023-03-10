import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQIvtlDRVTuukvhVv6hvO9aG3LmNv9M2c",
  authDomain: "shoppingcart-86a4f.firebaseapp.com",
  projectId: "shoppingcart-86a4f",
  storageBucket: "shoppingcart-86a4f.appspot.com",
  messagingSenderId: "945596398195",
  appId: "1:945596398195:web:e1c7282a598ce42e27c806",
  measurementId: "G-M9V07XWHLX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
