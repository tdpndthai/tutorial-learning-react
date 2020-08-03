import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAIrs6aGJ0k9Es-Z5qbUfIJDpnoC6prcrw",
    authDomain: "crwndb-d5500.firebaseapp.com",
    databaseURL: "https://crwndb-d5500.firebaseio.com",
    projectId: "crwndb-d5500",
    storageBucket: "crwndb-d5500.appspot.com",
    messagingSenderId: "876192927179",
    appId: "1:876192927179:web:f3ff5a2e910923c8213a4e",
    measurementId: "G-3NFV8639FJ"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;