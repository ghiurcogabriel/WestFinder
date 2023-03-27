import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBJb5lCGtGVAnTH6P2PGgfalg48lc7gzT4",
  authDomain: "westfinder-2fda8.firebaseapp.com",
  databaseURL: "https://westfinder-2fda8-default-rtdb.firebaseio.com",
  projectId: "westfinder-2fda8",
  storageBucket: "westfinder-2fda8.appspot.com",
  messagingSenderId: "789283670586",
  appId: "1:789283670586:web:0250d2331bb48fd5eb4303",
  measurementId: "G-P5XF90H3XE"
};

 export const appProject = initializeApp(firebaseConfig);
 export const db = getFirestore(appProject);
 export const authUser = getAuth(appProject);

// console.log(appProject)