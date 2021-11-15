import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config ={
    apiKey: "AIzaSyCfvBrk2qB2jFBbD1Jg8DjqEYZHoPHGT3s",
    authDomain: "clothes-shop-20bd3.firebaseapp.com",
    projectId: "clothes-shop-20bd3",
    storageBucket: "clothes-shop-20bd3.appspot.com",
    messagingSenderId: "107489735124",
    appId: "1:107489735124:web:da7b4d8b8d1055e5cae641",
    measurementId: "G-XMJPZX79QQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;