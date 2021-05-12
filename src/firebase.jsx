import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBSlyj1Bq3Z8CBA_c35otocBR_nZHFyaJ0",
    authDomain: "my-website-e07c8.firebaseapp.com",
    projectId: "my-website-e07c8",
    storageBucket: "my-website-e07c8.appspot.com",
    messagingSenderId: "235505604583",
    appId: "1:235505604583:web:f76da4fa38d05626264f42"
});

var db = firebaseApp.firestore();

export { db };
