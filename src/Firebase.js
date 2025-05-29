import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBKD_v7eTAICc6JYeeZIgBktk1XzWYUgrA",
//   authDomain: "clone-6d227.firebaseapp.com",
//   projectId: "clone-6d227",
//   storageBucket: "clone-6d227.appspot.com",
//   messagingSenderId: "599877936124",
//   appId: "1:599877936124:web:40b4e0de1058076b3ac879",
//   measurementId: "G-4VW5H2VFH0"
// };

// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// const db = getFirestore(app);

// export { auth, db };




// rules_version = '2';

// service cloud.firestore {
//   match /databases/{database}/documents {

//     // This rule allows anyone with your Firestore database reference to view, edit,
//     // and delete all data in your Firestore database. It is useful for getting
//     // started, but it is configured to expire after 30 days because it
//     // leaves your app open to attackers. At that time, all client
//     // requests to your Firestore database will be denied.
//     //
//     // Make sure to write security rules for your app before that time, or else
//     // all client requests to your Firestore database will be denied until you Update
//     // your rules
//     match /{document=**} {
//       allow read, write: if request.time < timestamp.date(2025, 5, 19);
//     }
//   }
// }