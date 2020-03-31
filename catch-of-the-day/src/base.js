import Rebase from 're-base';   // react firebase specific
import firebase from "firebase";
import {API_KEY, AUTH_DOMAIN, DATABASE_URL} from './constants';

const firebaseApp = firebase.initializeApp({
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
});


const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base; 