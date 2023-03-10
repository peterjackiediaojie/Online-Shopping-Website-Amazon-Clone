import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAmXqkuiOg6_-Uzi34eMOg1pavMeDRrOQ",
  authDomain: "challenge-aleck.firebaseapp.com",
  projectId: "challenge-aleck",
  storageBucket: "challenge-aleck.appspot.com",
  messagingSenderId: "445453799285",
  appId: "1:445453799285:web:7826a4e6d6ef652762cd3c",
  measurementId: "G-W4RVK5K5BQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
