import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyAbGOBMfDShGWqSPBjBa0V9dubedo-1Hq4",
  authDomain: "online-store-cf11e.firebaseapp.com",
  projectId: "online-store-cf11e",
  storageBucket: "online-store-cf11e.appspot.com",
  messagingSenderId: "790904636157",
  appId: "1:790904636157:web:865af03531f4c8b5efb494",
  measurementId: "G-1YRM09R7MP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}