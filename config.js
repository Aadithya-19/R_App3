import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyBNpzvapyrRqIv9yVHaCxZi9DqCkKZwyN8",
    authDomain: "r-app-c5841.firebaseapp.com",
    projectId: "r-app-c5841",
    storageBucket: "r-app-c5841.appspot.com",
    messagingSenderId: "803025493715",
    appId: "1:803025493715:web:2cf56ddd541c113f67be26"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();