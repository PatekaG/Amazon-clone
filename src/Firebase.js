import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBKD_v7eTAICc6JYeeZIgBktk1XzWYUgrA",
    authDomain: "clone-6d227.firebaseapp.com",
    projectId: "clone-6d227",
    storageBucket: "clone-6d227.firebasestorage.app",
    messagingSenderId: "599877936124",
    appId: "1:599877936124:web:40b4e0de1058076b3ac879",
    measurementId: "G-4VW5H2VFH0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export{db, auth};