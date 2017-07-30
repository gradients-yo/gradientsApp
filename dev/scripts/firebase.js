
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDCTrL3qHuaT1tNKqLuch248Gc_xp0rF6s",
  authDomain: "gradients-e2142.firebaseapp.com",
  databaseURL: "https://gradients-e2142.firebaseio.com",
  projectId: "gradients-e2142",
  storageBucket: "",
  messagingSenderId: "397175574252"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const database = firebase.database();
export const dbRef = database.ref("/");
export const provider = new firebase.auth.GoogleAuthProvider;
export default firebase; 