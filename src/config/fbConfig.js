import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
// initialize firebase
var fbConfig = {
  apiKey: "AIzaSyCbWmcqqFLX3aY19bbuWFXG4As-8o2yIrk",
  authDomain: "mellis-react-redux-app.firebaseapp.com",
  databaseURL: "https://mellis-react-redux-app.firebaseio.com",
  projectId: "mellis-react-redux-app",
  storageBucket: "mellis-react-redux-app.appspot.com",
  messagingSenderId: "732567977058",
  appId: "1:732567977058:web:3c6253c8be4ef65f81a53b",
  measurementId: "G-CJ0H14ML0K"
};

// Initialize Firebase
firebase.initializeApp(fbConfig);
firebase.firestore();

export default firebase;