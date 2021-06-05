import firebase from "firebase/app";
import "firebase/auth";  
import "firebase/firestore";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB_mYbcUuUeQXHJB5elJ6JoVBUaPgP_qqQ",
    authDomain: "todo-react-f25e3.firebaseapp.com",
    projectId: "todo-react-f25e3",
    storageBucket: "todo-react-f25e3.appspot.com",
    messagingSenderId: "331867573965",
    appId: "1:331867573965:web:a4f0c8c14794d2ef226384",
    measurementId: "G-5BVW3QBMW5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;
  export const auth = firebase.auth();
  export const db = firebase.firestore();