import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';


const firebaseConfig = {
    apiKey: "AIzaSyBxfPv9tJSBCnYYplmIHW-eREVlYt5ZaBE",
    authDomain: "skeleton-screens.firebaseapp.com",
    databaseURL: "https://skeleton-screens.firebaseio.com",
    projectId: "skeleton-screens",
    storageBucket: "skeleton-screens.appspot.com",
    messagingSenderId: "418054163963",
    appId: "1:418054163963:web:9368fb8cff28ea5d664f5e",
    measurementId: "G-END4N5HEV3"
};


firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;