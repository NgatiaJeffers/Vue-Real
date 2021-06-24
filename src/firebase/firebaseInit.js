import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDspnGQSRqvJJARt8KUTzqnQFEUM0Wqv9U",
    authDomain: "blog-3443e.firebaseapp.com",
    projectId: "blog-3443e",
    storageBucket: "blog-3443e.appspot.com",
    messagingSenderId: "283368121537",
    appId: "1:283368121537:web:c657f0632e6a45263de040"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serveTimestamp;

  export { timestamp };
  export default firebaseApp.firestore();