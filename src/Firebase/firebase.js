import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCP61ecRP2wmZuvj2O4UOo5BDKVfAosjKk",
  authDomain: "gallary-eb16a.firebaseapp.com",
  projectId: "gallary-eb16a",
  storageBucket: "gallary-eb16a.appspot.com",
  messagingSenderId: "924837242805",
  appId: "1:924837242805:web:618333f8ece28382e95bfc"
};

// Initialize Firebase
firebase.default.initializeApp(firebaseConfig);
const projectstorage = firebase.storage()
const projectfirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp
export {projectfirestore, projectstorage, timestamp};