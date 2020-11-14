import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO5Crm6xPPbXKW9k4D-MyDqegNAdSzITY",
  authDomain: "tik-tok-clone-17af4.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-17af4.firebaseio.com",
  projectId: "tik-tok-clone-17af4",
  storageBucket: "tik-tok-clone-17af4.appspot.com",
  messagingSenderId: "234770693837",
  appId: "1:234770693837:web:41975e3853866963787384",
  measurementId: "G-MKGR53MX8Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
