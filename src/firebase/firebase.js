import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCMffZuz0QLLtGQG11uODdDr0l1douZtpE",
    authDomain: "authentication-f486e.firebaseapp.com",
    projectId: "authentication-f486e",
    storageBucket: "authentication-f486e.appspot.com",
    messagingSenderId: "607260843861",
    appId: "1:607260843861:web:ebff5cc0bd0395466e19dc",
    measurementId: "G-6MQ9N0DZTE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;
