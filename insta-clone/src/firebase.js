import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB-oyopiMD6VDfcv-VUtu3V8NlW1vCDjmY",
    authDomain: "instagram-clone-8197f.firebaseapp.com",
    databaseURL: "https://instagram-clone-8197f.firebaseio.com",
    projectId: "instagram-clone-8197f",
    storageBucket: "instagram-clone-8197f.appspot.com",
    messagingSenderId: "1092369783562",
    appId: "1:1092369783562:web:b03bd69942c6b86851b8f3",
    measurementId: "G-WTVEK4T6R0"
  })

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };