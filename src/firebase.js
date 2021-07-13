// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const firebaseConfig = {
  apiKey: "AIzaSyDiH6SL25MYF__BpXzHco788Srnw1fD8z8",
  authDomain: "todo-app-666.firebaseapp.com",
  projectId: "todo-app-666",
  storageBucket: "todo-app-666.appspot.com",
  messagingSenderId: "520373517464",
  appId: "1:520373517464:web:5c110f4b06f117381d64ed",
  measurementId: "G-Y5ZLZF40NJ",
};*/
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDiH6SL25MYF__BpXzHco788Srnw1fD8z8",
  authDomain: "todo-app-666.firebaseapp.com",
  projectId: "todo-app-666",
  storageBucket: "todo-app-666.appspot.com",
  messagingSenderId: "520373517464",
  appId: "1:520373517464:web:5c110f4b06f117381d64ed",
  measurementId: "G-Y5ZLZF40NJ",
});
const db = firebaseApp.firestore();
export default db;
