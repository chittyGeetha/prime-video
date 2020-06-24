import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD1D-m_hkQTFAYO1ZuNg2CLO2MbxZ9EXz8",
    authDomain: "prime-a5615.firebaseapp.com",
    databaseURL: "https://prime-a5615.firebaseio.com",
    projectId: "prime-a5615",
    storageBucket: "prime-a5615.appspot.com",
    messagingSenderId: "969472359445",
    appId: "1:969472359445:web:f87df6d8a58073eae1621c"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase;