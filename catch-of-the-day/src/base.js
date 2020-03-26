import Rebase from 're-base';   // react firebase specific
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAeaW-BPEUZIV7UrRujkoq3NuSi4Q9IwJ0",
    authDomain: "catch-of-the-day-tutoria-c5198.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-tutoria-c5198.firebaseio.com",
});


const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base; 