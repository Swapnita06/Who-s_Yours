import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.process.env.REACT_APP_API_KEY,
  authDomain: "datingapp-f07d5.firebaseapp.com",
  projectId: "datingapp-f07d5",
  storageBucket: "datingapp-f07d5.appspot.com",
  messagingSenderId: "673169984494",
  appId: "1:673169984494:web:fa914733928a2d24c31cff"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()