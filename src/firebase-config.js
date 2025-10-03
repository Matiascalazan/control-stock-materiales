import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAx4mlI4LAUMPQoiFEckmBPK0k4zlGCz1A",
  authDomain: "app-deposito-c241c.firebaseapp.com",
  projectId: "app-deposito-c241c",
  storageBucket: "app-deposito-c241c.firebasestorage.app",
  messagingSenderId: "541685188745",
  appId: "1:541685188745:web:ee61e06790bae813ad9e58"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);