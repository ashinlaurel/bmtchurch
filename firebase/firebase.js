import * as firebase from "firebase";
// import "firebase/auth";
// import "firebase/database";
// import "firebase/firestore";
// import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCBajZFNIgr1OGIDx26alCu1uHUt59rqcs",
  authDomain: "bmt-church.firebaseapp.com",
  databaseURL: "https://bmt-church.firebaseio.com",
  projectId: "bmt-church",
  storageBucket: "bmt-church.appspot.com",
  messagingSenderId: "157514309791",
  appId: "1:157514309791:web:11cd83ee242bc017d702aa",
  measurementId: "G-9BTTZFRH32",
};
// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// Needed Stuff
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
