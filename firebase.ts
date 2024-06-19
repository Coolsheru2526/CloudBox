// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXXfNQGDDMrBwp7uhmKgS18s5zbmUe9eU",
  authDomain: "dropbox-clone-71848.firebaseapp.com",
  projectId: "dropbox-clone-71848",
  storageBucket: "dropbox-clone-71848.appspot.com",
  messagingSenderId: "437913983812",
  appId: "1:437913983812:web:3b35cd11f7371507769511",
  measurementId: "G-EVQKBW3PZ1"
};

const app = getApps().length? getApp():initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
