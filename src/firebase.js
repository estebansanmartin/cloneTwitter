import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB3rV23zIXCycfsiJDKVCyYRpbeqgZ3mgA",
    authDomain: "twitter-clone-85dfb.firebaseapp.com",
    databaseURL: "https://twitter-clone-85dfb.firebaseio.com",
    projectId: "twitter-clone-85dfb",
    storageBucket: "twitter-clone-85dfb.appspot.com",
    messagingSenderId: "1042682482708",
    appId: "1:1042682482708:web:2a6c1dbd8a8d105d3a1701"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;