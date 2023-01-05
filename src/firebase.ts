import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBYOQj1QG2an2N-5HsEqboUTTdfkrLi7Xg",
  authDomain: "cinema-app-9d330.firebaseapp.com",
  projectId: "cinema-app-9d330",
  storageBucket: "cinema-app-9d330.appspot.com",
  messagingSenderId: "1090855395820",
  appId: "1:1090855395820:web:239859ad917402bda2a0c9"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)