import * as firebase from "firebase/app"
import "firebase/storage"
import "firebase/firestore"

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBcmztjtmU-0F9iV7hCC9_EQ_tgd9byqI8",
    authDomain: "familygram-ebbbb.firebaseapp.com",
    projectId: "familygram-ebbbb",
    storageBucket: "familygram-ebbbb.appspot.com",
    messagingSenderId: "580833751126",
    appId: "1:580833751126:web:11859b60dac546e0170bf7"
  };

// Initialize Firebase app
firebase.initializeApp(firebaseConfig);

// import firebase storage
const projectStorage = firebase.storage()

// import firebase firestore
const projectFirestore = firebase.firestore()

export { projectStorage, projectFirestore }