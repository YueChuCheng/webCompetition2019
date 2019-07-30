import firebase from 'firebase/app';

import "firebase/firestore";
import 'firebase/auth'; //新增此import 才能使用登入功能


// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBrnsPLNnEZsbdP3u0vnqPdyhBFvbr7zhY",
    authDomain: "takao-922f1.firebaseapp.com",
    databaseURL: "https://takao-922f1.firebaseio.com",
    projectId: "takao-922f1",
    storageBucket: "takao-922f1.appspot.com",
    messagingSenderId: "28172285693",
    appId: "1:28172285693:web:58f5c177930a3bce"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;
