import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYBVvap8Fc5iOskH3RbqHnFp1FRH0zSvM",
  authDomain: "boggle-shailu.firebaseapp.com",
  projectId: "boggle-shailu",
  storageBucket: "boggle-shailu.appspot.com",
  messagingSenderId: "191809162121",
  appId: "1:191809162121:web:848c7df9e8d917e6c16f58"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth(); // firebase authentication object
export const firestore = firebase.firestore(); // firestore db
export default firebase;