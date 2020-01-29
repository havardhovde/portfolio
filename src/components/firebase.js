import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyBXciXUjE8bs8vP4Yy2wBuFJrIoC4h3EGM",
    authDomain: "react-blog-firebase-be63e.firebaseapp.com",
    databaseURL: "https://react-blog-firebase-be63e.firebaseio.com",
    projectId: "react-blog-firebase-be63e",
    storageBucket: "react-blog-firebase-be63e.appspot.com",
    messagingSenderId: "354148184211",
    appId: "1:354148184211:web:ee1b8c22aa10e007131d66",
    measurementId: "G-YQ9K81Z47T"
};

firebase.initializeApp(firebaseConfig);

export default firebase